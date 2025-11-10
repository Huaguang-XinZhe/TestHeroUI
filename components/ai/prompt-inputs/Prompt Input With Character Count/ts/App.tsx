"use client";


import React from "react";
import {Button, Tooltip} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import PromptInput from "./prompt-input";


export default function Component() {
  const [prompt, setPrompt] = React.useState<string>("");


  return (
    <form className="flex w-full items-start gap-2">
      <PromptInput
        classNames={{
          innerWrapper: "relative w-full",
          input: "pt-1 pb-6 pr-10! text-medium",
        }}
        endContent={
          <div className="absolute right-0 flex h-full flex-col items-end justify-between gap-2">
            <Tooltip showArrow content="Speak">
              <Button isIconOnly radius="full" size="sm" variant="light">
                <Icon className="text-default-500" icon="solar:microphone-3-linear" width={20} />
              </Button>
            </Tooltip>
            <div className="flex items-end gap-2">
              <p className="text-tiny text-default-400 py-1">{prompt.length}/2000</p>
              <Tooltip showArrow content="Send message">
                <Button
                  isIconOnly
                  color={!prompt ? "default" : "primary"}
                  isDisabled={!prompt}
                  radius="lg"
                  size="sm"
                  variant={!prompt ? "flat" : "solid"}
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
          </div>
        }
        minRows={3}
        radius="lg"
        startContent={
          <Tooltip showArrow content="Add Image">
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Icon
                className="text-default-500"
                icon="solar:gallery-minimalistic-linear"
                width={20}
              />
            </Button>
          </Tooltip>
        }
        value={prompt}
        onValueChange={setPrompt}
      />
    </form>
  );
}

