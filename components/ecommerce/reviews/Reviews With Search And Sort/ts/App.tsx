"use client";


import React from "react";
import {Input, Select, SelectItem} from "@heroui/react";
import {Icon} from "@iconify/react";


import CardReview from "./card-review";
import reviews from "./reviews";


export default function Component() {
  return (
    <section className="mx-auto w-full max-w-6xl px-2 md:px-6 lg:px-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap md:px-2">
        <div className="flex w-full items-center gap-2">
          <h1 className="text-medium md:text-large font-semibold">Reviews</h1>
          <div className="flex items-center gap-1">
            <Icon className="text-warning-500" icon="solar:star-bold" width={20} />
            <span className="text-medium md:text-large font-semibold">4.4</span>
            <span className="text-small text-default-500 lg:text-medium text-right">
              (Based on {reviews.length} reviews)
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-4">
          <Input
            fullWidth
            aria-label="Search"
            className="w-72"
            labelPlacement="outside"
            placeholder="Search reviews"
            startContent={<Icon icon="solar:magnifer-linear" />}
          />
          <Select
            aria-label="Sort by"
            className="w-40"
            defaultSelectedKeys={["most_recent"]}
            labelPlacement="outside"
          >
            <SelectItem key="most_recent">Most recent</SelectItem>
            <SelectItem key="most_helpful">Most helpful</SelectItem>
            <SelectItem key="highest_rating">Highest rating</SelectItem>
          </Select>
        </div>
      </header>
      <div className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <CardReview key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

