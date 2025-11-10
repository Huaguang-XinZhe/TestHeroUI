import React from "react";


import VerticalSteps from "./vertical-steps";


export default function Component() {
  return (
    <VerticalSteps
      steps={[
        {
          title: "Create an account",
          description: "Setting up your foundation",
        },
        {
          title: "Company Information",
          description: "Tell us about your business",
        },
        {
          title: "Choose Address",
          description: "Select your official location",
        },
        {
          title: "Payment",
          description: "Finalize your registration",
        },
      ]}
    />
  );
}

