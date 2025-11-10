"use client";


import React from "react";
import {RadioGroup} from "@heroui/react";


import ColorRadioItem from "./color-radio-item";


export default function Component() {
  return (
    <div className="max-w-fit">
      <h3 className="text-medium text-default-600 leading-8 font-medium">Color</h3>
      <RadioGroup
        aria-label="Color"
        classNames={{
          base: "mt-2",
          wrapper: "gap-2",
        }}
        orientation="horizontal"
      >
        <ColorRadioItem color="#3F3F46" tooltip="Gray" value="gray" />
        <ColorRadioItem color="#F31260" tooltip="Red" value="red" />
        <ColorRadioItem color="#006FEE" tooltip="Blue" value="blue" />
        <ColorRadioItem color="#17C964" tooltip="Green" value="green" />
        <ColorRadioItem color="#F5A524" tooltip="Yellow" value="yellow" />
        <ColorRadioItem color="#222222" tooltip="Black" value="black" />
        <ColorRadioItem color="#ffffff" tooltip="White" value="white" />
      </RadioGroup>
    </div>
  );
}

