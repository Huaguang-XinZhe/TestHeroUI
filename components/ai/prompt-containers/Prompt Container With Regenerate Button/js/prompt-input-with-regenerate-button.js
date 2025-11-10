"use client";


import React from "react";
import {Button, Tooltip} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import PromptInput from "./prompt-input";


export default function Component() {
  const [isRegenerating, setIsRegenerating] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");


  const onRegenerate = () => {
    setIsRegenerating(true);


    setTimeout(() => {
      setIsRegenerating(false);
    }, 1000);
  };


  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <Button
          isDisabled={isRegenerating}
          size="sm"
          startContent={
            <Icon
              className={cn("text-medium", isRegenerating ? "origin-center animate-spin" : "")}
              icon="solar:restart-linear"
            />
          }
          variant="flat"
          onPress={onRegenerate}
        >
          Regenerate
        </Button>
      </div>
      <form className="rounded-medium bg-default-100 hover:bg-default-200/70 flex w-full flex-col items-start transition-colors">
        <PromptInput
          classNames={{
            inputWrapper: "bg-transparent! shadow-none",
            innerWrapper: "relative",
            input: "pt-1 pl-2 pb-6 pr-10! text-medium",
          }}
          endContent={
            <div className="flex items-end gap-2">
              <Tooltip showArrow content="Send message">
                <Button
                  isIconOnly
                  color={!prompt ? "default" : "primary"}
                  isDisabled={!prompt}
                  radius="lg"
                  size="sm"
                  variant="solid"
                >
                  <Icon
                    className={cn(
                      "[&>path]:stroke-[2px]",
                      !prompt ? "text-default-600" : "text-primary-foreground",
                    )}
                    icon="solar:arrow-up-linear"
                    width={20}
                  />
                </Button>
              </Tooltip>
            </div>
          }
          minRows={3}
          radius="lg"
          value={prompt}
          variant="flat"
          onValueChange={setPrompt}
        />


        <div className="flex w-full flex-wrap items-center justify-between gap-2 px-4 pb-4">
          <div className="flex flex-wrap gap-3">
            <Button
              size="sm"
              startContent={
                <Icon className="text-default-500" icon="solar:paperclip-linear" width={18} />
              }
              variant="flat"
            >
              Attach
            </Button>
            <Button
              size="sm"
              startContent={
                <Icon className="text-default-500" icon="solar:soundwave-linear" width={18} />
              }
              variant="flat"
            >
              Voice Commands
            </Button>
            <Button
              size="sm"
              startContent={
                <Icon className="text-default-500" icon="solar:notes-linear" width={18} />
              }
              variant="flat"
            >
              Templates
            </Button>
          </div>
          <p className="text-tiny text-default-400 py-1">{prompt.length}/2000</p>
        </div>
      </form>
    </div>
  );
}

