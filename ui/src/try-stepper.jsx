import React, { useState } from "react";

const Step = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : null;
};

const Stepper = () => {
  //Tracks the current step in the stepper.
  const [activeStep, setActiveStep] = React.useState(0);
  //Indicates whether the current step is the last step.
  const [isLastStep, setIsLastStep] = React.useState(false);
  //Indicates whether the current step is the first step.
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const totalSteps = 4;

  //Increments the activeStep state by 1 if the current step is not the last step.
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  //Decrements the activeStep state by 1 if the current step is not the first step.
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Stepper;
