"use client";


import React from "react";


import PromptInputFullLineWithBottomActionsLarge from "./prompt-input-full-line-with-bottom-actions-large";


export default function Component() {
  return (
    <div className="flex h-screen max-h-[calc(100vh-140px)] w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-xl flex-col items-center gap-8">
          <h1 className="text-default-foreground text-3xl leading-9 font-semibold">
            How can I help you today?
          </h1>
          <div className="flex w-full flex-col gap-4">
            <PromptInputFullLineWithBottomActionsLarge />
          </div>
        </div>
      </div>
    </div>
  );
}

