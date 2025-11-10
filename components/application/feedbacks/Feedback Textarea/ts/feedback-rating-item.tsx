"use client";


import type {RadioProps} from "@heroui/react";


import React from "react";
import {VisuallyHidden, useRadio, useRadioGroupContext} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


export enum RatingValueEnum {
  BAD = "bad",
  NEUTRAL = "neutral",
  GOOD = "good",
  GREAT = "great",
}


export type FeedbackRatingItemProps = Omit<RadioProps, "value"> & {
  value: RatingValueEnum;
};


const FeedbackRatingItem = React.forwardRef<HTMLInputElement, FeedbackRatingItemProps>(
  (props, ref) => {
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


    const iconSize = React.useMemo(() => {
      switch (size) {
        case "sm":
          return 16;
        case "md":
          return 20;
        case "lg":
          return 24;
      }
    }, [size]);


    const iconData = React.useMemo(() => {
      switch (props.value) {
        case RatingValueEnum.BAD:
          return {
            icon: "fluent-mdl2:emoji-disappointed",
            color: "text-danger",
          };
        case RatingValueEnum.NEUTRAL:
          return {
            icon: "fluent-mdl2:emoji-neutral",
            color: "text-foreground",
          };
        case RatingValueEnum.GOOD:
          return {
            icon: "fluent-mdl2:emoji-2",
            color: "text-primary",
          };
        case RatingValueEnum.GREAT:
          return {
            icon: "fluent-mdl2:emoji",
            color: "text-success",
          };
      }
    }, [props.value]);


    const baseProps = getBaseProps();


    return (
      <Component
        {...baseProps}
        ref={ref}
        className={cn(baseProps?.["className"], {
          "cursor-default": isReadOnly,
        })}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <Icon
          className={cn(
            "transition-transform-colors pointer-events-none",
            isSelected ? iconData.color : "text-default-400 dark:text-default-300",
            {
              "ring-focus ring-offset-content1 ring-2 ring-offset-2": isFocusVisible,
              "group-data-[pressed=true]:scale-90": !isReadOnly,
            },
          )}
          icon={iconData.icon}
          width={iconSize}
        />
      </Component>
    );
  },
);


FeedbackRatingItem.displayName = "FeedbackRatingItem";


export default FeedbackRatingItem;

