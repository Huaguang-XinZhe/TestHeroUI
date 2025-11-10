"use client";


import React from "react";
import {Button, Link} from "@heroui/react";
import {Icon} from "@iconify/react";


export default function Component() {
  return (
    <div className="border-divider bg-background/15 flex w-full items-center gap-x-3 border-b-1 px-6 py-2 backdrop-blur-xl sm:px-3.5 sm:before:flex-1">
      <p className="text-small text-foreground">
        <Link className="text-inherit" href="#">
          The Winter 2024 Release is here: new editor, analytics API, and so much more.&nbsp;
        </Link>
      </p>
      <Button
        as={Link}
        className="group text-small relative h-9 overflow-hidden bg-transparent font-normal"
        color="default"
        endContent={
          <Icon
            className="flex-none outline-hidden transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-2"
            icon="solar:arrow-right-linear"
            width={16}
          />
        }
        href="#"
        style={{
          border: "solid 2px transparent",
          backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(to right, #F871A0, #9353D3)`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        variant="bordered"
      >
        Explore
      </Button>
      <div className="flex flex-1 justify-end">
        <Button isIconOnly className="-m-1" size="sm" variant="light">
          <span className="sr-only">Close Banner</span>
          <Icon className="text-default-500" icon="lucide:x" width={20} />
        </Button>
      </div>
    </div>
  );
}

