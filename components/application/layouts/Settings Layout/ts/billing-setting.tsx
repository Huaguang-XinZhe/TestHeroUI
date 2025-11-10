"use client";


import * as React from "react";
import {Button, Input, RadioGroup, Select, SelectItem, Spacer} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import {PlanCustomRadio} from "./plan-custom-radio";


interface BillingSettingCardProps {
  className?: string;
}


const addressOptions = [
  {
    label: "Buenos Aires",
    value: "buenos-aires",
    description: "Buenos Aires",
  },
];


const countryOptions = [
  {
    label: "Argentina",
    value: "ar",
    description: "Argentina",
  },
];


const BillingSetting = React.forwardRef<HTMLDivElement, BillingSettingCardProps>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn("p-2", className)} {...props}>
      {/* Payment Method */}
      <div>
        <div className="rounded-large bg-default-100">
          <div className="flex items-center justify-between gap-2 px-4 py-3">
            <div className="flex items-center gap-3">
              <Icon className="text-default-500 h-6 w-6" icon="solar:card-outline" />
              <div>
                <p className="text-default-600 text-sm font-medium">Payment method</p>
                <p className="text-default-400 text-xs">MasterCard credit card ending in ***3456</p>
              </div>
            </div>
            <Button
              className="bg-default-foreground text-background"
              radius="md"
              size="sm"
              variant="shadow"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
      <Spacer y={4} />
      {/* Current Plan */}
      <div>
        <p className="text-default-700 text-base font-medium">Current Plan</p>
        <p className="text-default-400 mt-1 text-sm font-normal">
          Your free trial ends in <span className="text-default-500">8 days.</span>
        </p>
        {/* Plan radio group */}
        <RadioGroup
          className="mt-4"
          classNames={{
            wrapper: "gap-4 flex-row flex-wrap",
          }}
          defaultValue="pro-monthly"
          orientation="horizontal"
        >
          <PlanCustomRadio
            classNames={{
              label: "text-default-500 font-medium",
            }}
            description="Pro Monthly"
            value="pro-monthly"
          >
            <div className="mt-2">
              <p className="pt-2">
                <span className="text-default-foreground text-[30px] leading-7 font-semibold">
                  $12
                </span>
                &nbsp;<span className="text-default-400 text-xs font-medium">/per month</span>
              </p>
              <ul className="text-default-500 list-inside list-disc text-xs font-normal">
                <li>Unlimited users</li>
                <li>All features</li>
                <li>Support via email and chat</li>
                <li>Billed monthly, cancel any time</li>
              </ul>
            </div>
          </PlanCustomRadio>
          <PlanCustomRadio
            classNames={{
              label: "text-default-500 font-medium",
            }}
            description="Pro Yearly"
            value="pro-yearly"
          >
            <div className="mt-2">
              <p className="pt-2">
                <span className="text-default-foreground text-[30px] leading-7 font-semibold">
                  $72
                </span>
                &nbsp;<span className="text-default-400 text-xs font-medium">/per year</span>
              </p>
              <ul className="text-default-500 list-inside list-disc text-xs font-normal">
                <li>Unlimited users</li>
                <li>All features</li>
                <li>Support via email and chat</li>
                <li>Billed monthly, cancel any time</li>
              </ul>
            </div>
          </PlanCustomRadio>
        </RadioGroup>
      </div>
      <Spacer y={4} />
      {/* Billing Address */}
      <div>
        {/*  Title */}
        <div>
          <p className="text-default-700 text-base font-medium">Billing Address</p>
          <p className="text-default-400 mt-1 text-sm font-normal">
            If you&apos;d like to add a postal address to every invoice, enter it here.
          </p>
        </div>
      </div>
      <div className="mt-2 space-y-2">
        <Input placeholder="Address Line 1" />
        <Input placeholder="Address Line 2" />
        <Input placeholder="City" />
        <div className="flex items-center gap-2">
          <Select defaultSelectedKeys={["buenos-aires"]}>
            {addressOptions.map((addressOption) => (
              <SelectItem key={addressOption.value}>{addressOption.label}</SelectItem>
            ))}
          </Select>
          <Input placeholder="Postal Code" />
        </div>
        <Select defaultSelectedKeys={["ar"]}>
          {countryOptions.map((countryOption) => (
            <SelectItem key={countryOption.value}>{countryOption.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Button className="bg-default-foreground text-background mt-5" size="sm">
        Save
      </Button>
    </div>
  ),
);


BillingSetting.displayName = "BillingSetting";


export default BillingSetting;

