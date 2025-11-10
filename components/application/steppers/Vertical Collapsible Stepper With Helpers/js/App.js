"use client";


import React from "react";
import {Progress, Spacer} from "@heroui/react";


import VerticalCollapsibleSteps from "./vertical-collapsible-steps";
import SupportCard from "./support-card";


const steps = [
  {
    title: "Create an account",
    description:
      "Laying a robust foundation is key to ensuring the stability and growth of any project.",
    details: [
      "Create a new account to get started with the registration process.",
      "Set up your account with a unique username and password.",
    ],
  },
  {
    title: "Company Information",
    description: "Please describe your business, including its main services and target market.",
    details: [
      "Briefly describe the core mission and services offered by your company.",
      "Highlight the key services that your business provides to its clients.",
      "Identify the primary audience or market that your business aims to serve.",
    ],
  },
  {
    title: "Choose Address",
    description:
      "Please choose the official address for your business or residence from the list provided",
    details: [
      "Select the address that you would like to use for your business.",
      "If you need to update your address, please contact customer support for assistance.",
    ],
  },
  {
    title: "Payment",
    description: "Complete the registration process to finalize your account setup.",
    details: [
      "Review your order and confirm that all details are correct.",
      "Once your payment is processed, your account will be activated.",
    ],
  },
];


export default function Component() {
  const [currentStep, setCurrentStep] = React.useState(2);


  return (
    <section className="max-w-sm">
      <h1 className="mb-2 text-xl font-medium" id="getting-started">
        Getting started
      </h1>
      <p className="text-small text-default-500 mb-5">
        Follow the steps to configure your account. This allows you to set up your business address.
      </p>
      <Progress
        classNames={{
          base: "px-0.5 mb-5",
          label: "text-small",
          value: "text-small text-default-400",
        }}
        label="Steps"
        maxValue={steps.length - 1}
        minValue={0}
        showValueLabel={true}
        size="md"
        value={currentStep}
        valueLabel={`${currentStep + 1} of ${steps.length}`}
      />


      <VerticalCollapsibleSteps
        currentStep={currentStep}
        steps={steps}
        onStepChange={setCurrentStep}
      />


      <Spacer y={4} />
      <SupportCard className="border-default-200 bg-default-50! dark:border-default-100 dark:bg-default-50/50! m-0! border px-2 shadow-none" />
    </section>
  );
}

