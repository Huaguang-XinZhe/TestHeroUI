"use client";


import React from "react";
import {
  ScrollShadow,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import PromptInputWithEnclosedActions from "./prompt-input-with-enclosed-actions";


import SidebarContainer from "./sidebar-with-chat-history";
import MessagingChatMessage from "./messaging-chat-message";
import messagingChatAIConversations from "./messaging-chat-ai-conversations";


export default function Component() {
  return (
    <div className="h-dvh w-full max-w-full">
      <SidebarContainer
        header={
          <Dropdown className="bg-content1">
            <DropdownTrigger>
              <Button
                className="text-default-400 min-w-[120px]"
                endContent={
                  <Icon
                    className="text-default-400"
                    height={20}
                    icon="solar:alt-arrow-down-linear"
                    width={20}
                  />
                }
                variant="light"
              >
                ACME v4
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dropdown menu with icons"
              className="px-0 py-[16px]"
              variant="faded"
            >
              <DropdownSection
                classNames={{
                  heading: "text-tiny px-[10px]",
                }}
                title="Model"
              >
                <DropdownItem
                  key="acme-v4"
                  className="text-default-500 data-[hover=true]:text-default-500"
                  classNames={{
                    description: "text-default-500 text-tiny",
                  }}
                  description="Newest and most advanced model"
                  endContent={
                    <Icon
                      className="text-default-foreground"
                      height={24}
                      icon="solar:check-circle-bold"
                      width={24}
                    />
                  }
                  startContent={
                    <Icon
                      className="text-default-400"
                      height={24}
                      icon="solar:star-rings-linear"
                      width={24}
                    />
                  }
                >
                  ACME v4
                </DropdownItem>


                <DropdownItem
                  key="acme-v3.5"
                  className="text-default-500 data-[hover=true]:text-default-500"
                  classNames={{
                    description: "text-default-500 text-tiny",
                  }}
                  description="Advanced model for complex tasks"
                  startContent={
                    <Icon
                      className="text-default-400"
                      height={24}
                      icon="solar:star-shine-outline"
                      width={24}
                    />
                  }
                >
                  ACME v3.5
                </DropdownItem>


                <DropdownItem
                  key="acme-v3"
                  className="text-default-500 data-[hover=true]:text-default-500"
                  classNames={{
                    description: "text-default-500 text-tiny",
                  }}
                  description="Great for everyday tasks"
                  startContent={
                    <Icon
                      className="text-default-400"
                      height={24}
                      icon="solar:star-linear"
                      width={24}
                    />
                  }
                >
                  ACME v3
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        }
        subTitle="Today"
        title="Apply for launch promotion"
      >
        <div className="relative flex h-full flex-col">
          <ScrollShadow className="flex h-full max-h-[60vh] flex-col gap-6 overflow-y-auto p-6 pb-8">
            {messagingChatAIConversations.map((messagingChatAIConversation, idx) => (
              <MessagingChatMessage
                key={idx}
                classNames={{
                  base: "bg-default-50",
                }}
                {...messagingChatAIConversation}
              />
            ))}
          </ScrollShadow>
          <div className="mt-auto flex max-w-full flex-col gap-2 px-6">
            <PromptInputWithEnclosedActions
              classNames={{
                button:
                  "bg-default-foreground opacity-100 w-[30px] h-[30px] min-w-[30px]! self-center",
                buttonIcon: "text-background",
                input: "placeholder:text-default-500",
              }}
              placeholder="Send a message to AcmeAI"
            />


            <p className="text-small text-default-500 px-2 text-center leading-5 font-medium">
              AcmeAI can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
}

