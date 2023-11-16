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
  // const [responseData, setResponseData] = useState(null);

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
      return <Summary formData={finalFormData} />;
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
                <StepLabel className="custom-step-label">
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
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={() => setActiveStep(0)} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
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
