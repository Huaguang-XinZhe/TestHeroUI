"use client";


import type {CardProps} from "@heroui/react";


import React from "react";
import {Button, Card, Image, CardBody} from "@heroui/react";
import {Icon} from "@iconify/react";


export default function Component(props: CardProps) {
  return (
    <Card className="w-full max-w-[520px]" {...props}>
      <Button
        isIconOnly
        className="absolute top-2 right-2 z-20"
        radius="full"
        size="sm"
        variant="light"
      >
        <Icon className="text-default-400" icon="iconamoon:close-thin" width={24} />
      </Button>
      <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
        <Image
          removeWrapper
          alt="Acme Creators"
          className="h-auto w-full flex-none object-cover object-top md:w-48"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/hero-card-complete.jpeg"
        />
        <div className="px-4 py-5">
          <h3 className="text-large font-medium">Become an Acme Creator!</h3>
          <div className="text-small text-default-400 flex flex-col gap-3 pt-2">
            <p>
              Visit creators.acme.com to sign up today and start earning credits from your fans and
              followers.
            </p>
            <p>Acme supports YouTube, Twitch, Vimeo and more!</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

