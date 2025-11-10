"use client";


import React from "react";
import {Checkbox, Link, RadioGroup, Radio} from "@heroui/react";
import {cn} from "@heroui/react";


const ChooseAddressForm = React.forwardRef(({className, ...props}, ref) => {
  const radioClassNames = {
    base: cn(
      "inline-flex m-0 bg-default-100 items-center justify-between",
      "flex-row-reverse w-full max-w-full cursor-pointer rounded-lg p-4 border-medium border-transparent",
      "data-[selected=true]:border-secondary",
    ),
    control: "bg-secondary text-secondary-foreground",
    wrapper: "group-data-[selected=true]:border-secondary",
    label: "text-small text-default-500 font-medium",
    labelWrapper: "m-0",
  };


  return (
    <>
      <div className="text-default-foreground text-3xl leading-9 font-bold">Choose Address</div>
      <div className="text-default-500 py-4 text-base leading-5">
        Selecting the ideal location for your business correspondence
      </div>
      <form ref={ref} className={cn("flex grid grid-cols-12 flex-col py-8", className)} {...props}>
        <RadioGroup
          className="col-span-12"
          classNames={{
            wrapper: "gap-4",
          }}
          defaultValue="address1"
          name="address"
        >
          <Radio classNames={radioClassNames} value="address1">
            123 Market St, San Francisco, CA 94103
          </Radio>
          <Radio classNames={radioClassNames} value="address2">
            456 Castro St, San Francisco, CA 94114
          </Radio>
          <Radio classNames={radioClassNames} value="address3">
            789 Montgomery St, San Francisco, CA 94111
          </Radio>
        </RadioGroup>


        <Checkbox
          defaultSelected
          className="col-span-12 mx-0 my-2 px-2 text-left"
          color="secondary"
          name="terms-and-privacy"
          size="md"
        >
          I read and agree with the
          <Link className="text-secondary mx-1 underline" href="#" size="md">
            Terms
          </Link>
          <span>and</span>
          <Link className="text-secondary ml-1 underline" href="#" size="md">
            Privacy Policy
          </Link>
          .
        </Checkbox>
      </form>
    </>
  );
});


ChooseAddressForm.displayName = "ChooseAddressForm";


export default ChooseAddressForm;

