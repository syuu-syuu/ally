import * as React from "react";
import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Box,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import GenericForm from "./form.jsx";
import Summary from "./summary";
import Header from "./header.jsx";
import "./stepper.css";

const steps = [
  { label: "Basic Information" },
  { label: "Detail Information" },
  { label: "Collaboration" },
  { label: "Final Output" },
];

function Questionaire() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({});
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(true);
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);

  // const handleDisclaimerChange = (isChecked) => {
  //   setDisclaimerChecked(isChecked);
  // };
  const handleDisclaimerChange = (event) => {
    setDisclaimerChecked(event.target.checked);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      if (!disclaimerChecked) {
        alert("Please accept the disclaimer to proceed.");
        return;
      }

      const finalFormData = {
        ...formData,
        ...selectedCheckboxes,
      };
      console.log("Submitting form data:", finalFormData);
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setIsSubmitted(true);
      setSuccess(true);
      setActiveStep(steps.length);

      // const responseData = await response.json();
      // setResponseData(responseData);
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("There was an error submitting the data", error);
      setIsSubmitted(true);
      setSuccess(false);
    }
  };

  const getStepContent = (stepIndex) => {
    const finalFormData = {
      ...formData,
      ...selectedCheckboxes,
    };
    if (stepIndex === steps.length - 1) {
      return (
        <Summary
          formData={finalFormData}
          isDisclaimerChecked={disclaimerChecked}
          onDisclaimerChange={handleDisclaimerChange}
        />
      );
    } else {
      return (
        <GenericForm
          stepIndex={stepIndex}
          onFormChange={handleFormChange}
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
      );
    }
  };

  function CustomStepIcon(props) {
    const { active, completed, icon } = props;

    if (completed) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <circle cx="20" cy="20" r="20" fill="#5F285E" />
          <path
            d="M3.835 7.259L0.974 4.398L0 5.365L3.835 9.2L12.068 0.967L11.101 0L3.835 7.259Z"
            fill="white"
            transform="translate(14, 15.5)"
          />
        </svg>
      );
    }
    if (active) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <circle cx="20" cy="20" r="20" fill="#5F285E" />

          <path
            d="M10.1102 6.48531L10.7722 7.14731L4.25723 13.6563H3.59523V12.9943L10.1092 6.48031M12.6982 2.15631C12.5107 2.15821 12.3313 2.23319 12.1982 2.36531L10.8792 3.68031L13.5792 6.38031L14.8912 5.05631C14.9579 4.9898 15.0108 4.91078 15.047 4.82378C15.0831 4.73678 15.1017 4.64351 15.1017 4.54931C15.1017 4.45512 15.0831 4.36185 15.047 4.27485C15.0108 4.18785 14.9579 4.10883 14.8912 4.04231L13.2092 2.36531C13.1425 2.29794 13.0628 2.2447 12.975 2.20879C12.8872 2.17288 12.7931 2.15504 12.6982 2.15631ZM10.1102 4.45031L2.15723 12.4023V15.1023H4.85723L12.8062 7.14631L10.1062 4.44631L10.1102 4.45031Z"
            fill="white"
            transform="translate(11, 11)"
          />
        </svg>
      );
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <text className="icon-number" x="50%" y="50%">
          {icon}
        </text>
        <path
          d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z"
          stroke="#758490"
        />
      </svg>
    );
  }

  const renderStepper = () => (
    <div>
      <div className="stepper-header">
        <p className="stepper-title">Ally Supplier Overview Questionnaire</p>
        <p className="stepper-msg">
          Please fill the following with the best of your knowledge.
        </p>
      </div>

      <div className="stepper-container">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  StepIconComponent={CustomStepIcon}
                  className="custom-step-label"
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  {getStepContent(index)}
                  <Box sx={{ mb: 2 }}>
                    <div className="btns">
                      <Button
                        className="btn-pre"
                        disabled={index === 0}
                        onClick={() =>
                          setActiveStep((prevActiveStep) => prevActiveStep - 1)
                        }
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                      <Button
                        className="btn-next"
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 1,
                          mr: 1,
                          backgroundColor: "#650360",
                          fontFamily: "inter, sans-serif",
                        }}
                      >
                        {index === steps.length - 1
                          ? "Submit"
                          : "Save and Next"}
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {/* {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={() => setActiveStep(0)} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )} */}
        </Box>
      </div>
    </div>
  );

  const renderSuccessMessage = () => (
    <div className="msg">
      <p className="msg-title">Success</p>
      <p className="msg-content">Your form has been submitted successfully !</p>
    </div>
  );

  const renderErrorMessage = () => (
    <div className="msg">
      <p className="msg-title">Opps</p>
      <p className="msg-content">Something goes wrong !</p>
    </div>
  );

  let content;
  if (isSubmitted) {
    content = success ? renderSuccessMessage() : renderErrorMessage();
  } else {
    content = renderStepper();
  }

  return (
    <div>
      <Header />
      {content}
    </div>
  );
}

export default Questionaire;
