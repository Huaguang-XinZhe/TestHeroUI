"use client";


import React from "react";
import {Card, Image, CardBody, CardFooter, Button, Spacer} from "@heroui/react";


export default function Component(props) {
  return (
    <Card className="w-[420px]" {...props}>
      <CardBody className="px-3 pb-1">
        <Image
          alt="Card image"
          className="aspect-video w-full object-cover object-top"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/airpods.png"
        />


        <Spacer y={2} />
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium">Card with thumbnail</p>
          <p className="text-small text-default-400">
            This is a card with a thumbnail image on top.
          </p>
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button fullWidth variant="light">
          Cancel
        </Button>
        <Button fullWidth>Continue</Button>
      </CardFooter>
    </Card>
  );
}

