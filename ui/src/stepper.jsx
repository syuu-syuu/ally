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
  const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    try {
      console.log("Submitting form data:", formData);
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const responseData = await response.json();
      setResponseData(responseData);
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("There was an error submitting the data", error);
    }
  };

  const getStepContent = (stepIndex) => {
    if (stepIndex === steps.length - 1) {
      return <Summary formData={formData} />;
    } else {
      return (
        <GenericForm stepIndex={stepIndex} onFormChange={handleFormChange} />
      );
    }
  };

  return (
    <div>
      <Header></Header>

      <div className="stepper-header">
        <div className="stepper-title">
          Ally Supplier Overview Questionnaire
        </div>
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
                    <div>
                      <Button
                        disabled={index === 0}
                        onClick={() =>
                          setActiveStep((prevActiveStep) => prevActiveStep - 1)
                        }
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
                          fontFamily: "inter, sans-serif",
                        }}
                      >
                        {index === steps.length - 1
                          ? "Finish"
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
}

export default Questionaire;
