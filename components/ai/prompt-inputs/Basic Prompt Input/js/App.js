"use client";


import React from "react";
import {Button, Tooltip} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import PromptInput from "./prompt-input";


export default function Component() {
  const [prompt, setPrompt] = React.useState("");


  return (
    <form className="flex w-full items-start gap-2">
      <Tooltip showArrow content="Add file">
        <Button isIconOnly radius="lg" variant="flat">
          <Icon className="text-default-600" icon="solar:paperclip-linear" width={20} />
        </Button>
      </Tooltip>
      <PromptInput value={prompt} onValueChange={setPrompt} />
      {!prompt && (
        <Tooltip showArrow content="Speak">
          <Button isIconOnly variant="flat">
            <Icon className="text-default-600" icon="solar:microphone-3-linear" width={20} />
          </Button>
        </Tooltip>
      )}


      <Tooltip showArrow content="Send message">
        <Button
          isIconOnly
          color={!prompt ? "default" : "primary"}
          isDisabled={!prompt}
          radius="lg"
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
    </form>
  );
}

