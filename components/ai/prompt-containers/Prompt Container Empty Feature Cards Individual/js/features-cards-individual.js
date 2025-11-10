"use client";


import React from "react";
import {Icon} from "@iconify/react";
import {Card, CardBody, CardHeader} from "@heroui/react";


const featuresCategories = [
  {
    key: "birthday",
    title: "Give me ideas for a friend birthday",
    icon: <Icon className="h-full w-full" icon="solar:lightbulb-linear" />,
    descriptions: [],
  },
  {
    key: "car",
    title: "What's the safest car of 2024?",
    icon: <Icon className="h-full w-full" icon="solar:square-academic-cap-2-linear" />,
    descriptions: [],
  },
  {
    key: "weather",
    title: "What's the weather for today?",
    icon: <Icon className="h-full w-full" icon="solar:cloud-sun-2-outline" />,
    descriptions: [],
  },
];


export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {featuresCategories.map((category) => (
        <Card
          key={category.key}
          isPressable
          className="bg-default-100 flex min-h-[360px] flex-col justify-between p-[28px]"
          shadow="none"
        >
          <CardHeader className="flex flex-col gap-2 p-0">
            <p className="text-foreground-700 text-left text-2xl leading-9 font-medium">
              {category.title}
            </p>
          </CardHeader>
          <CardBody className="text-default-500 flex flex-col items-end justify-end gap-2 p-0">
            <span className="h-11 w-11">{category.icon}</span>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

