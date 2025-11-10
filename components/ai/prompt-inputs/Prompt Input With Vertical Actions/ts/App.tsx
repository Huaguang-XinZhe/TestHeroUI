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
        fullWidth
        classNames={{
          input: "pt-1 text-medium",
        }}
        endContent={
          <div className="flex flex-col gap-2">
            {!prompt && (
              <Tooltip showArrow content="Speak">
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <Icon className="text-default-500" icon="solar:microphone-3-linear" width={20} />
                </Button>
              </Tooltip>
            )}
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
        }
        radius="lg"
        startContent={
          <Tooltip showArrow content="Add file">
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Icon className="text-default-500" icon="solar:paperclip-linear" width={20} />
            </Button>
          </Tooltip>
        }
        value={prompt}
        onValueChange={setPrompt}
      />
    </form>
  );
}

