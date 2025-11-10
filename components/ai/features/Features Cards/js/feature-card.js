"use client";


import React from "react";
import {Card, CardBody, CardHeader} from "@heroui/react";


const FeatureCard = React.forwardRef(({title, descriptions = [], icon, ...props}, ref) => {
  return (
    <Card ref={ref} className="bg-content2" shadow="none" {...props}>
      <CardHeader className="flex flex-col gap-2 px-4 pt-6 pb-4">
        {icon}
        <p className="text-medium text-content2-foreground">{title}</p>
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        {descriptions.map((description, index) => (
          <div
            key={index}
            className="rounded-medium bg-content3 text-content3-foreground flex min-h-[50px] px-3 py-2"
          >
            <p className="text-small">{description}</p>
          </div>
        ))}
      </CardBody>
    </Card>
  );
});


FeatureCard.displayName = "FeatureCard";


export default FeatureCard;

