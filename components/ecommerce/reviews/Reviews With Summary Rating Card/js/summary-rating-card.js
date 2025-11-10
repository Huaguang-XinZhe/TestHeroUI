"use client";


import React from "react";
import {Icon} from "@iconify/react";
import {Button, Progress} from "@heroui/react";
import {cn} from "@heroui/react";


const SummaryRatingCard = React.forwardRef(
  ({className, ratings, totalRatingCount, averageRating, onWriteReview, ...props}, ref) => (
    <div
      ref={ref}
      className={cn("rounded-medium bg-content1 shadow-small flex flex-col gap-2 p-6", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Icon className="text-warning-500" icon="solar:star-bold" width={20} />
        <span className="text-large font-semibold">{averageRating}</span>
        <span className="text-default-500">• (Based on {totalRatingCount} reviews)</span>
      </div>
      <div className="flex flex-col gap-2">
        {ratings.map(({rating, count}, index) => {
          const percentage = (count / totalRatingCount) * 100;


          return (
            <div key={index} className="flex items-center gap-1">
              <Progress
                showValueLabel
                aria-label={`${rating} stars`}
                color="warning"
                label={
                  <span className="text-small">{`${rating} ${rating > 1 ? "stars" : "star"}`}</span>
                }
                value={percentage}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex w-full flex-col gap-4">
        <Button
          fullWidth
          radius="full"
          startContent={<Icon icon="solar:pen-bold" />}
          variant="bordered"
          onClick={onWriteReview}
        >
          Write a review
        </Button>
        <p className="text-small text-default-500 px-2">Share your experience with this product</p>
      </div>
    </div>
  ),
);


SummaryRatingCard.displayName = "SummaryRatingCard";


export default SummaryRatingCard;

