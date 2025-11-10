"use client";


import * as React from "react";
import {RadioGroup, Select, SelectItem, Spacer} from "@heroui/react";
import {cn} from "@heroui/react";


import SwitchCell from "./switch-cell";


import {ThemeCustomRadio} from "./theme-custom-radio";


interface AppearanceSettingCardProps {
  className?: string;
}


const fontSizeOptions = [
  {label: "Small", value: "small", description: "font size 14px"},
  {label: "Medium", value: "medium", description: "font size 16px"},
  {label: "Large", value: "large", description: "font size 18px"},
];


const AppearanceSetting = React.forwardRef<HTMLDivElement, AppearanceSettingCardProps>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn("p-2", className)} {...props}>
      {/* Theme */}
      <div>
        <p className="text-default-700 text-base font-medium">Theme</p>
        <p className="text-default-400 mt-1 text-sm font-normal">
          Change the appearance of the web.
        </p>
        {/* Theme radio group */}
        <RadioGroup className="mt-4 flex-wrap" orientation="horizontal">
          <ThemeCustomRadio value="free" variant="light">
            Light
          </ThemeCustomRadio>
          <ThemeCustomRadio value="pro" variant="dark">
            Dark
          </ThemeCustomRadio>
        </RadioGroup>
      </div>
      <Spacer y={4} />
      {/* Font size */}
      <div className="flex items-start justify-between gap-2 py-2">
        <div>
          <p className="text-default-700 text-base font-medium">Font size</p>
          <p className="text-default-400 mt-1 text-sm font-normal">Adjust the web font size.</p>
        </div>
        <Select className="max-w-[200px]" defaultSelectedKeys={["large"]}>
          {fontSizeOptions.map((fontSizeOption) => (
            <SelectItem key={fontSizeOption.value}>{fontSizeOption.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Spacer y={4} />
      {/* Translucent UI */}
      <SwitchCell
        classNames={{
          base: "bg-transparent p-0",
        }}
        color="foreground"
        description="Use transparency in UI elements like the sidebar and modal dialogs."
        label="Translucent UI"
      />
      <Spacer y={6} />
      {/* Use pointer cursor */}
      <SwitchCell
        classNames={{
          base: "bg-transparent p-0",
        }}
        color="foreground"
        description="Change the cursor to a pointer when hovering"
        label="Use pointer cursor"
      />
    </div>
  ),
);


AppearanceSetting.displayName = "AppearanceSetting";


export default AppearanceSetting;

