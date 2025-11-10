"use client";


import type {RadioGroupProps, RadioProps} from "@heroui/react";


import React from "react";
import {RadioGroup, VisuallyHidden, useRadio, useRadioGroupContext} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


const ThemeRadioItem = ({icon, ...props}: RadioProps & {icon: string}) => {
  const {
    Component,
    isSelected: isSelfSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useRadio(props);


  const groupContext = useRadioGroupContext();


  const isSelected =
    isSelfSelected || Number(groupContext.groupState.selectedValue) >= Number(props.value);


  const wrapperProps = getWrapperProps();


  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...wrapperProps}
        className={cn(
          wrapperProps?.["className"],
          "border-opacity-10 pointer-events-none h-8 w-8 rounded-full border-black ring-0 transition-transform group-data-[pressed=true]:scale-90",
          {
            "bg-default-200 dark:bg-default-100": isSelected,
          },
        )}
      >
        <Icon className="text-default-500" icon={icon} width={18} />
      </div>
    </Component>
  );
};


const ThemeSwitch = React.forwardRef<HTMLDivElement, Omit<RadioGroupProps, "children">>(
  ({classNames = {}, ...props}, ref) => (
    <RadioGroup
      ref={ref}
      aria-label="Select a theme"
      classNames={{
        ...classNames,
        wrapper: cn("gap-0 items-center", classNames?.wrapper),
      }}
      defaultValue="dark"
      orientation="horizontal"
      {...props}
    >
      <ThemeRadioItem icon="solar:moon-linear" value="dark" />
      <ThemeRadioItem icon="solar:sun-2-linear" value="light" />
      <ThemeRadioItem icon="solar:monitor-linear" value="system" />
    </RadioGroup>
  ),
);


ThemeSwitch.displayName = "ThemeSwitch";


export default ThemeSwitch;

