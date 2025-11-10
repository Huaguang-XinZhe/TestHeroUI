import React from "react";


import RowSteps from "./row-steps";


export default function Component() {
  return (
    <RowSteps
      defaultStep={2}
      steps={[
        {
          title: "Create",
        },
        {
          title: "Review",
        },
        {
          title: "Publish",
        },
      ]}
    />
  );
}

