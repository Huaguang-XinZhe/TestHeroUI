import React from "react";


import HorizontalSteps from "./horizontal-steps";


export default function Component() {
  return (
    <HorizontalSteps
      defaultStep={2}
      steps={[
        {
          title: "Create account",
        },
        {
          title: "Company Information",
        },
        {
          title: "Choose Address",
        },
        {
          title: "Complete Payment",
        },
        {
          title: "Preview and Confirm",
        },
      ]}
    />
  );
}

