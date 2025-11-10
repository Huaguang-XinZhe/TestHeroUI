"use client";


import type {CardProps} from "@heroui/react";


import React from "react";
import {Icon} from "@iconify/react";
import {Card, CardHeader, CardBody, RadioGroup, Badge} from "@heroui/react";


import PlanRadio from "./plan-radio";


export default function Component(props: CardProps) {
  return (
    <Card className="w-[400px]" {...props}>
      <CardHeader className="flex flex-col items-start px-6 pt-5 pb-0">
        <h4 className="text-large font-medium">Select your plan</h4>
        <p className="text-tiny text-default-400">
          Find a plan that&apos;s right for you and your team.
        </p>
      </CardHeader>
      <CardBody>
        <RadioGroup aria-label="Plans" classNames={{wrapper: "gap-3"}}>
          <PlanRadio
            description="Up to 20 items and 5 projects."
            icon={
              <Icon className="text-secondary" icon="solar:box-minimalistic-linear" width={18} />
            }
            label="Hobby plan"
            monthlyPrice={0}
            value="hobby"
          />
          <Badge
            showOutline
            classNames={{
              badge:
                "z-10 bg-secondary-50 border-small text-secondary border-secondary-200 right-5 px-2 py-1",
            }}
            content="Popular"
            size="sm"
            variant="flat"
          >
            <PlanRadio
              description="Unlimited items and 20 projects."
              icon={
                <Icon className="text-secondary" icon="solar:box-minimalistic-linear" width={18} />
              }
              label="Pro plan"
              monthlyPrice={30}
              value="pro"
            />
          </Badge>
          <PlanRadio
            description="Unlimited items and projects."
            icon={
              <Icon className="text-secondary" icon="solar:box-minimalistic-linear" width={18} />
            }
            label="Enterprise plan"
            monthlyPrice={100}
            value="enterprise"
          />
        </RadioGroup>
        <p className="text-tiny text-default-400 pt-4 pl-1">
          Selected payment method can be changed at any time.
        </p>
      </CardBody>
    </Card>
  );
}

