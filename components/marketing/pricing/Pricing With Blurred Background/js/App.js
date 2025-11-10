"use client";


import React from "react";
import {Icon} from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Tab,
  Tabs,
} from "@heroui/react";
import {cn} from "@heroui/react";


import {FrequencyEnum} from "./pricing-types";
import {frequencies, tiers} from "./pricing-tiers";


export default function Component() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0]);


  const onFrequencyChange = (selectedKey) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);


    setSelectedFrequency(frequencies[frequencyIndex]);
  };


  return (
    <div className="relative flex max-w-4xl flex-col items-center py-24">
      <div
        aria-hidden="true"
        className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#FF71D7] to-[#C9A9E9] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="text-secondary leading-7 font-medium">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">Get unlimited access.</h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Discover the ideal plan, beginning at under $2 per week.
        </h2>
      </div>
      <Spacer y={8} />
      <Tabs
        classNames={{
          tabList: "bg-default-100/70",
          cursor: "bg-background dark:bg-default-200/30",
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="full"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.Yearly}
          aria-label="Pay Yearly"
          className="pr-0.5"
          title={
            <div className="flex items-center gap-2">
              <p>Pay Yearly</p>
              <Chip color="secondary" variant="flat">
                Save 25%
              </Chip>
            </div>
          }
        />


        <Tab key={FrequencyEnum.Quarterly} title="Pay Quarterly" />
      </Tabs>
      <Spacer y={12} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.key}
            isBlurred
            className={cn("bg-background/60 dark:bg-default-100/50 p-3", {
              "border-small! border-secondary/50": tier.mostPopular,
            })}
            shadow="md"
          >
            {tier.mostPopular ? (
              <Chip className="absolute top-4 right-4" color="secondary" variant="flat">
                Most Popular
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="from-foreground to-foreground-600 inline bg-linear-to-br bg-clip-text text-4xl leading-7 font-semibold tracking-tight text-transparent">
                  {typeof tier.price === "string" ? tier.price : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-small text-default-400 font-medium">
                    {tier.priceSuffix
                      ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                      : `/${selectedFrequency.priceSuffix}`}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon className="text-secondary" icon="ci:check" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color="secondary"
                href={tier.href}
                variant={tier.buttonVariant}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400">
          Are you an open source developer?&nbsp;
          <Link color="foreground" href="#" underline="always">
            Get a discount
          </Link>
        </p>
      </div>
    </div>
  );
}

