import React from "react";


import MinimalRowSteps from "./minimal-row-steps";


const STEPS_COUNT = 4;


export default function Component() {
  const [currentStep, setCurrentStep] = React.useState(2);


  return (
    <MinimalRowSteps
      currentStep={currentStep}
      label={`Step ${currentStep + 1} of ${STEPS_COUNT}`}
      stepsCount={STEPS_COUNT}
      onStepChange={setCurrentStep}
    />
  );
}

