import React from "react";


import VerticalSteps from "./vertical-steps";


export default function Component() {
  return (
    <VerticalSteps
      hideProgressBars
      className="max-w-sm"
      defaultStep={1}
      stepClassName="border border-default-200 dark:border-default-50 aria-[current]:bg-default-100 dark:aria-[current]:bg-default-50"
      steps={[
        {
          title: "Create an account",
          description:
            "Laying a robust foundation is key to ensuring the stability and growth of any project.",
        },
        {
          title: "Company Information",
          description:
            "Please describe your business, including its main services and target market.",
        },
        {
          title: "Choose Address",
          description:
            "Please choose the official address for your business or residence from the list provided",
        },
        {
          title: "Payment",
          description: "Complete the registration process to finalize your account setup.",
        },
      ]}
    />
  );
}

