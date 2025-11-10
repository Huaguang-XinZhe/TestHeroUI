"use client";


import React from "react";
import {Progress, Spacer} from "@heroui/react";


import VerticalSteps from "./vertical-steps";
import SupportCard from "./support-card";


const steps = [
  {
    title: "Create an account",
    description:
      "Laying a robust foundation is key to ensuring the stability and growth of any project.",
  },
  {
    title: "Company Information",
    description: "Please describe your business, including its main services and target market.",
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
      <VerticalSteps
        hideProgressBars
        currentStep={currentStep}
        stepClassName="border border-default-200 dark:border-default-50 aria-[current]:bg-default-100 dark:aria-[current]:bg-default-50"
        steps={steps}
        onStepChange={setCurrentStep}
      />
      <Spacer y={4} />
      <SupportCard className="border-default-200 bg-default-50! dark:border-default-100 dark:bg-default-50/50! m-0! border px-2 shadow-none" />
    </section>
  );
}

