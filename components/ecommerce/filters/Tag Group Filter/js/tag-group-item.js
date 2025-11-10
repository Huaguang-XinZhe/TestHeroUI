"use client";


import React from "react";
import {Chip, VisuallyHidden, useCheckbox} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


const TagGroupItem = React.forwardRef(({icon, size = "md", ...props}, ref) => {
  const {children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps} =
    useCheckbox({
      ...props,
    });


  return (
    <label {...getBaseProps()} ref={ref}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: cn({
            "outline-hidden ring-2 ring-focus ring-offset-2 ring-offset-background": isFocusVisible,
            "bg-primary": isSelected,
          }),
          content: cn("text-small! text-default-400", {
            "text-primary-foreground": isSelected,
            "pr-1": !!icon,
          }),
        }}
        radius="sm"
        size={size}
        startContent={
          icon ? (
            <Icon
              className={cn("text-default-400", {
                "text-primary-foreground": isSelected,
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
    </label>
  );
});


TagGroupItem.displayName = "TagGroupItem";


export default TagGroupItem;

