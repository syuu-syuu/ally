import * as React from "react"; 
import { useForm } from 'react-hook-form';
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./index.css";
import "./stepper.css";



function OurStepper() {
  const { register, handleSubmit } = useForm(); 
  const [activeStep, setActiveStep] = React.useState(0); 
  const [formData, setFormData] = React.useState({});
  const steps = [
    {
      label: "Basic Information",
      description: (
        <form 
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="label">Company Name :</label>
            <input {...register("CompanyName", {required: true})}className="form" placeholder="ABC Company" />
          </div>
          <div>
            <label className="label">Contact Info :</label>
            <input {...register("ContactInfo", {required: true})}className="form" placeholder="xx-xxxxxxxxx" />
          </div>
          <div>
            <label className="label">NAICS Code(s) :</label>
            <input {...register("NAICSCode", {required: true})}className="form" placeholder="xxxxxx" />
          </div>
          <div>
            <label className="label">Annual Revenue :</label>
            <input {...register("AnnualRevenue", {required: true})}className="form" placeholder="12344 $" />
          </div>
          <div>
            <label className="label">Number of Employees :</label>
            <input {...register("NumberOfEmployees", {required: true})}className="form" placeholder="123" />
          </div>
          <div>
            <label className="label">Geographical Coverage Area :</label>
            <input {...register("GeographicalCoverageArea")}className="form" placeholder="1234 msq" />
          </div>
          <div>
            <label className="label">Diversity Council Affiliation : </label>
            <input {...register("DiversityCouncilAffiliation")}className="form" placeholder="NMSDC, WBENC" />
          </div>  
        </form>
      ),
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
  const handleSaveAndNext = () => {
    
    handleSubmit((data) => {
      console.log(data); 
      handleNext(); 
    })();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel className="custom-step-label">{step.label}</StepLabel>
            <></>
            <StepContent>
              <Typography>{step.description}</Typography>
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
                    type="button"
                    onClick={handleSaveAndNext}
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
