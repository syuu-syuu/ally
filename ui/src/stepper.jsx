import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./form.css";
import Form from "./form.jsx";
import ErrorPage from "./error.jsx";
import SuccessPage from "./success.jsx";

const steps = [
  {
    label: "Basic Information",
  },
  {
    label: "Detail Information",
  },
  {
    label: "Collaboration",
  },
  {
    label: "Final Output",
  },
];

function OurStepper() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const [formData, setFormData] = React.useState({
    "Company Name": "",
    "Contact Info": "",
    "NAICS Code(s)": "",
    "Annual Revenue": "",
    "Number of Employees": "",
    "Geographical Coverage Area": "",
    "Diversity Council Affiliation": "",
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Form onFormChange={handleFormChange} />;
      case 1:
        return "";
      case 2:
        return "";
      case 3:
        return "";
      default:
        return "";
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleNext = () => {
  //   console.log(formData);
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  const handleNext = async () => {
    try {
      console.log(formData);
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const responseData = await response.json();
      setResponseData(responseData);
      setSuccess(true);
      console.log(responseData);
    } catch (error) {
      setError(error.message);
      console.error("There was an error submitting the data", error);
    }
  };

  // Redirect to an Error Page if any error is caught
  if (error) {
    return <ErrorPage message={error} />;
  }
  // Redirect to a Success Page if the operation is successful
  if (success) {
    return <SuccessPage data={responseData} />;
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    /* <div className="content">
        <div className="title">Ally Supplier Overview Questionnaire</div>
        <p className="text-wrapper">
          Please fill the following with the best of your knowledge.
        </p>
      </div> */

    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel className="custom-step-label">{step.label}</StepLabel>
            <></>
            <StepContent>
              {getStepContent(index)}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    className="button"
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 1,
                      mr: 1,
                      backgroundColor: "#650360",
                      fontfamily: "inter, sans-serif",
                    }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Save and Next"}
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default OurStepper;
