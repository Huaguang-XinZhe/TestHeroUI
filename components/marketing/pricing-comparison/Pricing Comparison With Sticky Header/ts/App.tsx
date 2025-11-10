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


  const mostPopularColumnBg = "bg-content2 dark:bg-content1";


  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center py-24">
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="text-primary leading-7 font-medium">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">Compare plans & features.</h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Discover the ideal plan, beginning at under $2 per week.
        </h2>
      </div>
      <Spacer y={8} />


      <Tabs
        classNames={{
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="full"
        size="lg"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.Yearly}
          aria-label="Pay Yearly"
          className="pr-1.5"
          title={
            <div className="flex items-center gap-2">
              <p>Pay Yearly</p>
              <Chip color="primary">Save 25%</Chip>
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
            className={cn("relative p-3", {
              "border-content3 bg-content2 dark:border-content2 dark:bg-content1": tier.mostPopular,
              "border-medium! border-default-100 bg-transparent": !tier.mostPopular,
            })}
            shadow="none"
          >
            {tier.mostPopular ? (
              <Chip
                classNames={{
                  base: "absolute top-4 right-4",
                  content: "font-medium text-primary-500 dark:text-primary-600",
                }}
                color="primary"
                variant="flat"
              >
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
                    /{selectedFrequency.priceSuffix}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon className="text-primary" icon="ci:check" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color={tier.buttonColor}
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
                  <th
                    key={tier.key}
                    className={cn("relative px-6 pt-6 xl:px-8 xl:pt-8", {
                      [`${mostPopularColumnBg} rounded-t-medium`]: tier.mostPopular,
                      "bg-transparent": !tier.mostPopular,
                    })}
                    scope="col"
                  >
                    {tier.mostPopular ? (
                      <Chip
                        classNames={{
                          base: "absolute top-2 right-2",
                        }}
                        color="primary"
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
                  <td
                    key={tier.key}
                    className={cn("relative px-6 py-4 xl:px-8", {
                      [`${mostPopularColumnBg}`]: tier.mostPopular,
                      "bg-transparent": !tier.mostPopular,
                    })}
                  >
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
                      color={tier.buttonColor}
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
                      <td
                        key={tier.key}
                        className={cn("relative py-4", {
                          [`${mostPopularColumnBg}`]: tier.mostPopular,
                        })}
                      />
                    ))}
                  </tr>
                  {feat.items.map((tierFeature, tierFeatureIndex) => (
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
                        const isLastOne =
                          tierFeatureIndex === feat.items.length - 1 &&
                          featIndex === features.length - 1;


                        return (
                          <td
                            key={tier.key}
                            className={cn("relative px-6 py-4 xl:px-8", {
                              [`${mostPopularColumnBg} ${isLastOne ? "rounded-b-medium" : ""}`]:
                                tier.mostPopular,
                            })}
                          >
                            {typeof tierFeature.tiers[tier.key] === "string" ? (
                              <div className="text-medium text-default-500 text-center">
                                {tierFeature.tiers[tier.key]}
                              </div>
                            ) : (
                              <>
                                {tierFeature.tiers[tier.key] === true ? (
                                  <Icon
                                    className="text-primary mx-auto"
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

