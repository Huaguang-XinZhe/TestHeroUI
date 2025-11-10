"use client";


import React from "react";
import {RadioGroup} from "@heroui/react";
import {cn} from "@heroui/react";


import FeedbackRatingItem, {RatingValueEnum} from "./feedback-rating-item";


export default function Component({classNames, ...props}) {
  const [value, setValue] = React.useState(RatingValueEnum.GOOD);


  return (
    <RadioGroup
      value={value}
      {...props}
      classNames={{
        ...classNames,
        base: cn(classNames?.base, "max-w-fit"),
        wrapper: cn(classNames?.wrapper, "gap-3"),
      }}
      defaultValue="1"
      orientation="horizontal"
      size="lg"
      onValueChange={setValue}
    >
      <FeedbackRatingItem value={RatingValueEnum.BAD} />
      <FeedbackRatingItem value={RatingValueEnum.NEUTRAL} />
      <FeedbackRatingItem value={RatingValueEnum.GOOD} />
      <FeedbackRatingItem value={RatingValueEnum.GREAT} />
    </RadioGroup>
  );
}

