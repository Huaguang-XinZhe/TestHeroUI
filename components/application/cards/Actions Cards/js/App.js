import React from "react";


import ActionCard from "./action-card";


export default function Component() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <ActionCard
        description="Create a new Direct Employee Agreement template."
        icon="solar:document-medicine-linear"
        title="Create a new agreement"
        onPress={() => {
          console.log("Create a new agreement");
        }}
      />


      <ActionCard
        description="Edit the Direct Employee Agreement template."
        icon="solar:document-add-linear"
        title="Edit agreement"
        onPress={() => {
          console.log("Edit agreement");
        }}
      />


      <ActionCard
        description="Verify your identity to access all features."
        icon="solar:shield-check-linear"
        title="Verify identity"
        onPress={() => {
          console.log("Verify identity");
        }}
      />


      <ActionCard
        description="Add a new payment method to your account."
        icon="solar:card-linear"
        title="Add payment method"
        onPress={() => {
          console.log("Add payment method");
        }}
      />


      <ActionCard
        color="warning"
        description="Deactivate the employee agreement."
        icon="solar:user-block-rounded-linear"
        title="Set to inactive"
        onPress={() => {
          console.log("Set to inactive");
        }}
      />


      <ActionCard
        color="danger"
        description="Delete the employee agreement."
        icon="solar:trash-bin-minimalistic-linear"
        title="Delete agreement"
        onPress={() => {
          console.log("Delete agreement");
        }}
      />
    </div>
  );
}

