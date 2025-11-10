"use client";


import React from "react";
import {ScrollShadow, Tab, Tabs} from "@heroui/react";


import Conversation from "./conversation";
import PromptInputWithBottomActions from "./prompt-input-with-bottom-actions";


import SidebarContainer from "./sidebar-with-gradient-background";


export default function Component() {
  return (
    <div className="h-dvh w-full max-w-full">
      <SidebarContainer
        header={
          <Tabs className="justify-center">
            <Tab key="creative" title="Creative" />
            <Tab key="technical" title="Technical" />
            <Tab key="precise" title="Precise" />
          </Tabs>
        }
        title="Creative Uses for Kids' Art"
      >
        <div className="relative flex h-full flex-col">
          <ScrollShadow className="flex h-full max-h-[60vh] flex-col gap-6 overflow-y-auto pb-8">
            <Conversation />
            <Conversation />
          </ScrollShadow>
          <div className="mt-auto flex max-w-full flex-col gap-2">
            <PromptInputWithBottomActions />
            <p className="text-tiny text-default-400 px-2">
              Acme AI can make mistakes. Consider checking important information.
            </p>
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
}

