"use client";


import React from "react";
import {Input, Select, SelectItem} from "@heroui/react";
import {cn} from "@heroui/react";


import companyTypes from "./company-types";
import states from "./states";
import companyIndustries from "./company-industries";


const CompanyInformationForm = React.forwardRef(({className, ...props}, ref) => {
  const inputProps = {
    labelPlacement: "outside",
    classNames: {
      label:
        "text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700",
    },
  };


  const selectProps = {
    labelPlacement: "outside",
    classNames: {
      label: "text-small font-medium text-default-700 group-data-[filled=true]:text-default-700",
    },
  };


  return (
    <>
      <div className="text-default-foreground text-3xl leading-9 font-bold">
        Company Information
      </div>
      <div className="text-default-500 py-4">
        Please provide the information for your incorporated company
      </div>
      <form
        ref={ref}
        className={cn("flex grid grid-cols-12 flex-col gap-4 py-8", className)}
        {...props}
      >
        <Select
          className="col-span-12 md:col-span-6"
          items={companyTypes}
          label="Company Type"
          name="company-type"
          placeholder="C Corporation"
          {...selectProps}
        >
          {(companyType) => <SelectItem key={companyType.value}>{companyType.title}</SelectItem>}
        </Select>


        <Select
          className="col-span-12 md:col-span-6"
          items={states}
          label="Registration State"
          name="registration-state"
          placeholder="Delaware"
          {...selectProps}
        >
          {(registrationState) => (
            <SelectItem key={registrationState.value}>{registrationState.title}</SelectItem>
          )}
        </Select>


        <Input
          className="col-span-12 md:col-span-6"
          label="Company Name"
          name="company-name"
          placeholder="Type your company name here"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Entity Ending"
          name="entity-ending"
          placeholder="Inc."
          {...inputProps}
        />


        <Select
          className="col-span-12"
          items={companyIndustries}
          label="Company Industry"
          name="company-industry"
          placeholder="B2C SaaS"
          {...selectProps}
        >
          {(companyIndustry) => (
            <SelectItem key={companyIndustry.value}>{companyIndustry.title}</SelectItem>
          )}
        </Select>


        <Input
          className="col-span-12 md:col-span-6"
          label="Street Name"
          name="street-name"
          placeholder="Geary 2234"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Suite"
          name="suite"
          placeholder="#166"
          {...inputProps}
        />


        <Select
          className="col-span-12 md:col-span-4"
          items={states}
          label="State"
          name="state"
          placeholder="Delaware"
          {...selectProps}
        >
          {(registrationState) => (
            <SelectItem key={registrationState.value}>{registrationState.title}</SelectItem>
          )}
        </Select>


        <Input
          className="col-span-12 md:col-span-4"
          label="City"
          name="city"
          placeholder="San Francisco"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-4"
          label="Zip Code"
          name="zip-code"
          placeholder="9409"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="EIN"
          name="ein"
          placeholder="Type your company EIN here"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Confirm EIN"
          name="confirm-ein"
          placeholder="Confirm your company EIN here"
          {...inputProps}
        />
      </form>
    </>
  );
});


CompanyInformationForm.displayName = "CompanyInformationForm";


export default CompanyInformationForm;

