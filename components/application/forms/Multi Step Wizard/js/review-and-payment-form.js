"use client";


import React from "react";
import {
  Input,
  Avatar,
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
  Checkbox,
  Link,
  Tabs,
  Tab,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import countries from "./countries";
import states from "./states";


const ReviewAndPaymentForm = React.forwardRef(({className, ...props}, ref) => {
  const appearanceNoneClassName =
    "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";


  const inputProps = {
    labelPlacement: "outside",
    classNames: {
      label:
        "text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700",
    },
  };


  const numberInputProps = {
    labelPlacement: "outside",
    classNames: {
      label:
        "text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700",
      input: appearanceNoneClassName,
    },
  };


  const selectProps = {
    labelPlacement: "outside",
    classNames: {
      label: "text-small font-medium text-default-700 group-data-[filled=true]:text-default-700",
    },
  };


  const NumberInput = ({className, ...props}) => (
    <input
      className={cn(
        "text-default-foreground rounded-xs bg-transparent text-sm",
        className,
        appearanceNoneClassName,
      )}
      min={0}
      minLength={0}
      type="number"
      {...props}
    />
  );


  return (
    <>
      <div className="text-default-foreground text-3xl leading-9 font-bold">Review & Payment</div>
      <div className="text-default-500 py-4 text-base leading-5">You are almost done 🎉</div>
      <form
        ref={ref}
        className={cn("flex grid grid-cols-12 flex-col gap-4 py-8", className)}
        {...props}
      >
        <Tabs
          className="col-span-12"
          classNames={{
            cursor: "group-data-[selected=true]:bg-content1",
          }}
        >
          <Tab key="one-time-payment" title="One-time Payment" />
          <Tab key="subscription" title="Subscription" />
        </Tabs>


        <Input
          className="col-span-12"
          label="Email Address"
          name="email"
          placeholder="john.doe@acme.com"
          type="email"
          {...inputProps}
        />


        <Input
          className="text-default-500 col-span-12 rounded-xs bg-transparent text-sm md:col-span-6"
          endContent={
            <div className="flex items-center">
              <NumberInput
                className="w-7"
                max={12}
                maxLength={2}
                name="card-month"
                placeholder="MM"
              />


              <span className="text-default-500 mx-[2px]">/</span>
              <NumberInput
                className="w-7"
                max={99}
                maxLength={2}
                name="card-year"
                placeholder="YY"
              />


              <NumberInput
                className="ml-2"
                max={999}
                maxLength={3}
                name="card-cvc"
                placeholder="CVC"
              />
            </div>
          }
          label="Card number"
          minLength={0}
          name="card-number"
          placeholder="Card number"
          startContent={
            <span>
              <Icon className="text-default-400" icon="solar:card-bold" width={24} />
            </span>
          }
          type="number"
          {...numberInputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Entity Ending"
          name="entity-name"
          placeholder="Inc."
          {...inputProps}
        />


        <Select
          className="col-span-12"
          label="Cardholder name"
          name="cardholder-name"
          placeholder="John Doe"
          {...selectProps}
        >
          <SelectItem key="john-doe">John Doe</SelectItem>
          <SelectItem key="eva-e-isaacson">Eva E. Isaacson</SelectItem>
          <SelectItem key="connie-d-voss">Connie D. Voss</SelectItem>
        </Select>


        <Autocomplete
          className="col-span-12"
          defaultItems={countries}
          inputProps={{
            classNames: inputProps.classNames,
          }}
          label="Country"
          labelPlacement="outside"
          name="country"
          placeholder="Select country"
          showScrollIndicators={false}
        >
          {(item) => (
            <AutocompleteItem
              key={item.code}
              startContent={
                <Avatar
                  alt="Country Flag"
                  className="h-6 w-6"
                  src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                />
              }
            >
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>


        <Input
          className="col-span-12 md:col-span-6"
          label="Zip Code"
          name="zip-code"
          placeholder="Zip Code"
          {...inputProps}
        />


        <Select
          className="col-span-12 md:col-span-6"
          items={states}
          label="State"
          name="state"
          placeholder="State"
          {...selectProps}
        >
          {(registrationState) => (
            <SelectItem key={registrationState.value}>{registrationState.title}</SelectItem>
          )}
        </Select>


        <Checkbox
          defaultSelected
          className="col-span-12 m-0 p-2 text-left"
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


ReviewAndPaymentForm.displayName = "ReviewAndPaymentForm";


export default ReviewAndPaymentForm;

