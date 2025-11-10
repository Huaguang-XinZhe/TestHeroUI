"use client";


import React, {useState} from "react";
import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";


import {PromptInputFullLineComponent} from "./prompt-input-full-line";


const suggestions = [
  {
    id: "blog-post",
    label: "Create a blog post about NextUI",
    icon: "solar:document-add-outline",
  },
  {
    id: "recommend-books",
    label: "Recommend some books",
    icon: "solar:book-linear",
  },
  {
    id: "weather",
    label: "What's the weather today?",
    icon: "solar:cloud-sun-2-outline",
  },
  {
    id: "car-concept",
    label: "Design a car concept",
    icon: "solar:gallery-linear",
  },
];


const PromptSuggestions = ({onSelect}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion.id}
          className="rounded-medium border-default-200 text-default-foreground hover:border-default-400 hover:text-foreground data-[hover=true]:border-default-400 data-[hover=true]:text-foreground h-[52px] justify-start gap-2 border-1 bg-transparent px-4 transition-colors duration-150!"
          startContent={
            <div className="flex h-6 w-6 items-center justify-center">
              <Icon className="text-default-500" icon={suggestion.icon} width={20} />
            </div>
          }
          variant="light"
          onPress={() => onSelect?.(suggestion)}
        >
          {suggestion.label}
        </Button>
      ))}
    </div>
  );
};


export default function PromptInputFullLineWithBottomActionsLarge() {
  const [prompt, setPrompt] = useState("");


  const handleSuggestionSelect = (suggestion) => {
    setPrompt(suggestion.label);
  };


  return (
    <div className="flex w-full flex-col gap-4">
      <PromptInputFullLineComponent prompt={prompt} setPrompt={setPrompt} />
      <PromptSuggestions onSelect={handleSuggestionSelect} />
    </div>
  );
}

