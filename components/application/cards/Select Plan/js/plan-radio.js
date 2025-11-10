"use client";


import React from "react";
import {Radio} from "@heroui/react";
import {cn} from "@heroui/react";


const PlanRadio = React.forwardRef(
  ({icon, monthlyPrice, label, description, className, classNames = {}, ...props}, ref) => (
    <Radio
      {...props}
      ref={ref}
      classNames={{
        ...classNames,
        base: cn(
          "inline-flex m-0 px-3 py-4 max-w-full items-center justify-between",
          "flex-row-reverse w-full cursor-pointer rounded-lg 3 border-medium border-default-100",
          "data-[selected=true]:border-secondary data-[selected=true]:bg-secondary-50",
          classNames?.base,
          className,
        ),
        wrapper: cn("group-data-[focus-visible=true]:ring-secondary", classNames?.wrapper),
        labelWrapper: cn("ml-0", classNames?.labelWrapper),
      }}
      color="secondary"
    >
      <div className="flex w-full items-center gap-3">
        <div className="item-center bg-secondary-50 group-data-[selected=true]:bg-secondary-100 flex rounded-full p-2">
          {icon}
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="text-small">{label}</p>
            <span className="text-tiny text-default-500 mt-0.5">
              {monthlyPrice !== undefined && ` $${monthlyPrice} per month`}
            </span>
          </div>
          <p className="text-tiny text-default-400">{description}</p>
        </div>
      </div>
    </Radio>
  ),
);


PlanRadio.displayName = "PlanRadio";


export default PlanRadio;

