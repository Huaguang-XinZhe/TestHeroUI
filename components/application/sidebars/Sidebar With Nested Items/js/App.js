"use client";


import React from "react";
import {Avatar, Button, ScrollShadow, Spacer} from "@heroui/react";
import {Icon} from "@iconify/react";


import {AcmeIcon} from "./acme";
import {sectionNestedItems} from "./sidebar-items";
import Sidebar from "./sidebar";


export default function Component() {
  return (
    <div className="h-full min-h-192">
      <div className="border-r-small border-divider relative flex h-full w-72 flex-1 flex-col p-6">
        <div className="flex items-center gap-2 px-2">
          <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
            <AcmeIcon className="text-background" />
          </div>
          <span className="text-small font-bold uppercase">Acme</span>
        </div>


        <Spacer y={8} />


        <div className="flex items-center gap-3 px-2">
          <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          <div className="flex flex-col">
            <p className="text-small text-default-600 font-medium">Kate Moore</p>
            <p className="text-tiny text-default-400">Customer Support</p>
          </div>
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar defaultSelectedKey="home" items={sectionNestedItems} />
        </ScrollShadow>


        <Spacer y={8} />


        <div className="mt-auto flex flex-col">
          <Button
            fullWidth
            className="text-default-500 data-[hover=true]:text-foreground justify-start"
            startContent={
              <Icon className="text-default-500" icon="solar:info-circle-line-duotone" width={24} />
            }
            variant="light"
          >
            Help & Information
          </Button>
          <Button
            className="text-default-500 data-[hover=true]:text-foreground justify-start"
            startContent={
              <Icon
                className="text-default-500 rotate-180"
                icon="solar:minus-circle-line-duotone"
                width={24}
              />
            }
            variant="light"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}

