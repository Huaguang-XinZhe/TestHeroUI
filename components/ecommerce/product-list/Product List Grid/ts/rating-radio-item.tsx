"use client";


import type {RadioProps} from "@heroui/react";


import React from "react";
import {VisuallyHidden, useRadio, useRadioGroupContext} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


const RatingRadioItem = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    Component,
    isSelected: isSelfSelected,
    isFocusVisible,
    getBaseProps,
    getInputProps,
  } = useRadio(props);


  const groupContext = useRadioGroupContext();


  const isSelected =
    isSelfSelected || Number(groupContext.groupState.selectedValue) >= Number(props.value);
  const isReadOnly = groupContext.groupState.isReadOnly;
  const size = props.size || groupContext.size || "md";
  const color = props.color || groupContext.color || "primary";


  const starWidth = React.useMemo(() => {
    switch (size) {
      case "sm":
        return 16;
      case "md":
        return 24;
      case "lg":
        return 32;
    }
  }, [size]);


  const starColor = React.useMemo(() => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      case "danger":
        return "text-danger";
      default:
        return "text-primary";
    }
  }, [color]);


  const baseProps = getBaseProps();


  return (
    <Component
      {...baseProps}
      ref={ref}
      className={cn(baseProps["className"], {
        "cursor-default": isReadOnly,
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Icon
        className={cn(
          "transition-transform-colors pointer-events-none",
          isSelected ? starColor : "text-default-200",
          {
            "ring-focus ring-offset-content1 ring-2 ring-offset-2": isFocusVisible,
            "group-data-[pressed=true]:scale-90": !isReadOnly,
          },
        )}
        icon="solar:star-bold"
        width={starWidth}
      />
    </Component>
  );
});


RatingRadioItem.displayName = "RatingRadioItem";


export default RatingRadioItem;

