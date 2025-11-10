"use client";


import type {Filter} from "./filters-types";


import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  RadioGroup,
  ScrollShadow,
  Switch,
  Tab,
  Tabs,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import ColorRadioItem from "./color-radio-item";
import PriceSlider from "./price-slider";
import RatingRadioGroup from "./rating-radio-group";
import TagGroupItem from "./tag-group-item";


import {FilterTypeEnum} from "./filters-types";


export type FiltersWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  items: Filter[];
  title?: string;
  showTitle?: boolean;
  showActions?: boolean;
  className?: string;
  scrollShadowClassName?: string;
};


const FiltersWrapper = React.forwardRef<HTMLDivElement, FiltersWrapperProps>(
  (
    {
      items,
      title = "Filters",
      showTitle = true,
      showActions = true,
      className,
      scrollShadowClassName,
    },
    ref,
  ) => {
    const renderFilter = React.useCallback((filter: Filter) => {
      switch (filter.type) {
        case FilterTypeEnum.Tabs:
          return (
            <Tabs fullWidth aria-label={filter.title}>
              {filter.options?.map((option) => <Tab key={option.value} title={option.title} />)}
            </Tabs>
          );
        case FilterTypeEnum.PriceRange:
          return <PriceSlider aria-label={filter.title} range={filter.range} />;


        case FilterTypeEnum.Rating:
          return <RatingRadioGroup />;


        case FilterTypeEnum.TagGroup:
          return (
            <CheckboxGroup aria-label="Select amenities" className="gap-1" orientation="horizontal">
              {filter.options?.map((option) => (
                <TagGroupItem key={option.value} icon={option.icon} value={option.value}>
                  {option.title}
                </TagGroupItem>
              ))}
            </CheckboxGroup>
          );
        case FilterTypeEnum.Toggle:
          return (
            <div className="-mx-4 flex flex-col">
              {filter.options?.map((option) => (
                <Switch
                  key={option.value}
                  classNames={{
                    base: cn(
                      "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
                      "justify-between cursor-pointer rounded-lg gap-2 -mr-2 px-4 py-3",
                    ),
                    wrapper: "mr-0",
                  }}
                  value={option.value}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-medium">{option.title}</p>
                    <p className="text-tiny text-default-400">{option.description}</p>
                  </div>
                </Switch>
              ))}
            </div>
          );
        case FilterTypeEnum.CheckboxGroup:
          return (
            <Accordion
              className="px-0"
              defaultExpandedKeys={filter?.defaultOpen ? ["options"] : []}
            >
              <AccordionItem
                key="options"
                classNames={{
                  title: "text-medium font-medium leading-8 text-default-600",
                  trigger: "p-0",
                  content: "px-1",
                }}
                title={filter.title}
              >
                <CheckboxGroup aria-label={filter.title}>
                  {filter.options?.map((option) => (
                    <Checkbox key={option.value} value={option.value}>
                      {option.title}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>
            </Accordion>
          );
        case FilterTypeEnum.Color:
          return (
            <RadioGroup
              aria-label={filter.title}
              classNames={{
                wrapper: "gap-2",
              }}
              orientation="horizontal"
            >
              {filter.options?.map((option) => (
                <ColorRadioItem
                  key={option.value}
                  color={option.color}
                  tooltip={option.title}
                  value={option.value}
                />
              ))}
            </RadioGroup>
          );
      }
    }, []);


    return (
      <div
        ref={ref}
        className={cn("rounded-medium bg-content1 h-full max-h-fit w-full max-w-sm p-6", className)}
      >
        {showTitle && (
          <>
            <h2 className="text-large text-foreground font-medium">{title}</h2>
            <Divider className="bg-default-100 my-3" />
          </>
        )}
        <ScrollShadow
          className={cn(
            "-mx-6 h-full px-6",
            {
              "max-h-[calc(100%-220px)]": showActions,
            },
            scrollShadowClassName,
          )}
        >
          <div className="flex flex-col gap-6">
            {items.map((filter) => (
              <div key={filter.title} className="flex flex-col gap-3">
                {filter.type !== FilterTypeEnum.CheckboxGroup ? (
                  <div>
                    <h3 className="text-medium text-default-600 leading-8 font-medium">
                      {filter.title}
                    </h3>
                    <p className="text-small text-default-400">{filter.description}</p>
                  </div>
                ) : null}
                {renderFilter(filter)}
              </div>
            ))}
          </div>
        </ScrollShadow>


        {showActions && (
          <>
            <Divider className="bg-default-100 my-6" />


            <div className="mt-auto flex flex-col gap-2">
              <Button
                color="primary"
                startContent={
                  <Icon
                    className="text-primary-foreground [&>g]:stroke-[3px]"
                    icon="solar:magnifer-linear"
                    width={16}
                  />
                }
              >
                Show 300+ stays
              </Button>
              <Button className="text-default-500" variant="flat">
                Clear all filters
              </Button>
            </div>
          </>
        )}
      </div>
    );
  },
);


FiltersWrapper.displayName = "FiltersWrapper";


export default FiltersWrapper;

