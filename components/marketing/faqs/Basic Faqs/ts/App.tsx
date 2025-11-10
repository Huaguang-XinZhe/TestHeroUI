"use client";


import React from "react";
import {Accordion, AccordionItem} from "@heroui/react";
import {Icon} from "@iconify/react";


import faqs from "./faqs";


export default function Component() {
  return (
    <section className="mx-auto w-full max-w-6xl px-0 py-20 sm:py-32 md:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <h2 className="px-2 text-3xl leading-7">
          <span className="inline-block md:hidden">FAQs</span>
          <span className="hidden md:inline-block">Frequently asked questions</span>
        </h2>
        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          itemClasses={{
            base: "px-6 bg-default-100! shadow-none! hover:bg-default-200/50!",
            title: "font-medium",
            trigger: "py-6",
            content: "pt-0 pb-6 text-base text-default-500",
          }}
          items={faqs}
          selectionMode="multiple"
          variant="splitted"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={24} />}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

