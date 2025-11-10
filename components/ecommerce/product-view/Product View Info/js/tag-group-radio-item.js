"use client";


import React from "react";
import {Chip, VisuallyHidden, useRadio, useRadioGroupContext} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


const TagGroupRadioItem = React.forwardRef(({icon, ...props}, ref) => {
  const {
    Component,
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getInputProps,
    getLabelProps,
  } = useRadio(props);


  const groupContext = useRadioGroupContext();


  const isReadOnly = groupContext.groupState.isReadOnly;
  const size = props.size || groupContext.size || "md";
  const color = props.color || groupContext.color || "primary";


  const baseProps = getBaseProps();


  const colors = React.useMemo(() => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary",
          fg: "text-primary-foreground",
        };
      case "secondary":
        return {
          bg: "bg-secondary",
          fg: "text-secondary-foreground",
        };
      case "success":
        return {
          bg: "bg-success",
          fg: "text-success-foreground",
        };
      case "warning":
        return {
          bg: "bg-warning",
          fg: "text-warning-foreground",
        };
      case "danger":
        return {
          bg: "bg-danger",
          fg: "text-danger-foreground",
        };
      default:
        return {
          bg: "bg-primary",
          fg: "text-primary-foreground",
        };
    }
  }, [color]);


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
      <Chip
        classNames={{
          base: cn({
            "outline-hidden ring-2 ring-focus ring-offset-2 ring-offset-background": isFocusVisible,
            [colors.bg]: isSelected,
          }),
          content: cn("text-small! text-default-400", {
            [colors.fg]: isSelected,
            "pr-1": !!icon,
          }),
        }}
        radius="sm"
        size={size}
        startContent={
          icon ? (
            <Icon
              className={cn("text-default-400", {
                [colors.fg]: isSelected,
              })}
              icon={icon}
              width={16}
            />
          ) : undefined
        }
        variant="flat"
        {...getLabelProps()}
      >
        {children}
      </Chip>
    </Component>
  );
});


TagGroupRadioItem.displayName = "TagGroupRadioItem";


export default TagGroupRadioItem;

