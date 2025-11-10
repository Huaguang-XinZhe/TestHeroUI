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
  Tooltip,
} from "@heroui/react";
import {cn} from "@heroui/react";


import {FrequencyEnum} from "./pricing-types";
import {frequencies, tiers} from "./pricing-tiers";
import features from "./pricing-tiers-features";


export default function Component() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0]);


  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);


    setSelectedFrequency(frequencies[frequencyIndex]);
  };


  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center py-24">
      <div
        aria-hidden="true"
        className="px:5 fixed inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#FF71D7] to-[#C9A9E9] opacity-30 dark:opacity-[.15]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="text-secondary leading-7 font-medium">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">Compare plans & features.</h1>
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


      {/* Grid ---> "xs" to "lg" */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
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


      {/* Table ---> lg */}
      <div className="isolate hidden lg:block">
        <div className="relative">
          {tiers.some((tier) => tier.mostPopular) ? (
            <div className="absolute inset-x-4 inset-y-0 z-[-1] flex">
              <div
                aria-hidden="true"
                className="flex w-1/4 px-1"
                style={{marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%`}}
              >
                <div className="rounded-medium border-small border-secondary/50 bg-background/60 dark:bg-default-100/50 w-full backdrop-blur-md backdrop-saturate-150" />
              </div>
            </div>
          ) : null}
          <table className="w-full table-fixed border-separate border-spacing-x-4 text-left">
            <caption className="sr-only">Pricing plan comparison</caption>
            <colgroup>
              {Array.from({length: tiers.length + 1}).map((_, index) => (
                <col key={index} className="w-1/4" />
              ))}
            </colgroup>
            <thead className="sticky top-0 z-10">
              <tr>
                <td />
                {tiers.map((tier) => (
                  <th key={tier.key} className="relative px-6 pt-6 xl:px-8 xl:pt-8" scope="col">
                    {tier.mostPopular ? (
                      <Chip
                        classNames={{
                          base: "absolute top-2 right-2",
                        }}
                        color="secondary"
                        variant="flat"
                      >
                        Most Popular
                      </Chip>
                    ) : null}
                    <div className="text-large text-foreground relative font-medium">
                      {tier.title}
                    </div>
                  </th>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <span className="sr-only">Price</span>
                </th>
                {tiers.map((tier) => (
                  <td key={tier.key} className="relative px-6 py-4 xl:px-8">
                    <div className="text-foreground flex items-baseline gap-1">
                      <span className="from-foreground to-foreground-600 inline bg-linear-to-br bg-clip-text text-4xl leading-8 font-semibold tracking-tight text-transparent">
                        {typeof tier.price === "string"
                          ? tier.price
                          : tier.price[selectedFrequency.key]}
                      </span>
                      <span className="text-small text-default-600 font-medium">
                        {tier.priceSuffix
                          ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                          : `/${selectedFrequency.priceSuffix}`}
                      </span>
                    </div>
                    <Button
                      fullWidth
                      as={Link}
                      className={cn("mt-6", {
                        "shadow-default-500/50 font-medium shadow-xs": tier.mostPopular,
                      })}
                      color="secondary"
                      href={tier.href}
                      variant={tier.buttonVariant}
                    >
                      {tier.buttonText}
                    </Button>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, featIndex) => (
                <React.Fragment key={feat.title}>
                  <tr>
                    <th
                      className={cn("text-large text-foreground pt-12 pb-4 font-semibold", {
                        "pt-16": featIndex === 0,
                      })}
                      colSpan={1}
                      scope="colgroup"
                    >
                      {feat.title}
                      <Divider className="bg-default-600/10 absolute -inset-x-4 mt-2" />
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.key} className="relative py-4" />
                    ))}
                  </tr>
                  {feat.items.map((tierFeature) => (
                    <tr key={tierFeature.title}>
                      <th className="text-medium text-default-700 py-4 font-normal" scope="row">
                        {tierFeature.helpText ? (
                          <div className="flex items-center gap-1">
                            <span>{tierFeature.title}</span>
                            <Tooltip
                              className="max-w-[240px]"
                              color="foreground"
                              content={tierFeature.helpText}
                              placement="right"
                            >
                              <Icon
                                className="text-default-600"
                                icon="solar:info-circle-line-duotone"
                                width={20}
                              />
                            </Tooltip>
                          </div>
                        ) : (
                          tierFeature.title
                        )}
                      </th>


                      {tiers.map((tier) => {
                        return (
                          <td key={tier.key} className="relative px-6 py-4 xl:px-8">
                            {typeof tierFeature.tiers[tier.key] === "string" ? (
                              <div className="text-medium text-default-500 text-center">
                                {tierFeature.tiers[tier.key]}
                              </div>
                            ) : (
                              <>
                                {tierFeature.tiers[tier.key] === true ? (
                                  <Icon
                                    className="text-secondary mx-auto"
                                    icon="ci:check"
                                    width={24}
                                  />
                                ) : (
                                  <Icon
                                    className="text-default-400 mx-auto"
                                    icon="ci:close-sm"
                                    width={24}
                                  />
                                )}


                                <span className="sr-only">
                                  {tierFeature.tiers[tier.key] === true
                                    ? "Included"
                                    : "Not included"}
                                  &nbsp;in&nbsp;{tier.title}
                                </span>
                              </>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
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

