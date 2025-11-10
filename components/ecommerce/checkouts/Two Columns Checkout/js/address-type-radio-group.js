"use client";


import React from "react";
import {Radio, RadioGroup} from "@heroui/react";
import {cn} from "@heroui/react";


const AddressTypeForm = React.forwardRef(({className, classNames = {}, ...props}, ref) => {
  return (
    <RadioGroup
      {...props}
      ref={ref}
      classNames={{
        ...classNames,
        base: cn("mt-4", classNames?.base, className),
        wrapper: cn("gap-8", classNames?.wrapper),
      }}
      defaultValue="home"
      label="Address type"
      orientation="horizontal"
    >
      <Radio description="All Day Delivery" value="home">
        Home
      </Radio>
      <Radio description="Delivery Between 9AM - 6PM" value="office">
        Office
      </Radio>
    </RadioGroup>
  );
});


AddressTypeForm.displayName = "AddressTypeForm";


export default AddressTypeForm;

