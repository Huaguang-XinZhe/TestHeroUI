"use client";


import React from "react";


import FeaturesCardsIndividual from "./features-cards-individual";
import PromptInputFullLine from "./prompt-input-full-line";


export default function Component() {
  return (
    <div className="flex h-dvh w-full max-w-full flex-col gap-8">
      <div className="flex h-full flex-col justify-center gap-10">
        <div className="flex w-full flex-col justify-start gap-2">
          <h1 className="text-foreground-400 text-3xl leading-9 font-semibold">John,</h1>
          <h1 className="text-default-foreground text-3xl leading-9 font-semibold">
            How can I help you today?
          </h1>
        </div>
        <FeaturesCardsIndividual />
      </div>
      <div className="flex flex-col gap-2">
        <PromptInputFullLine />
        <p className="text-tiny text-foreground-400 px-2 text-center">
          Acme AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

