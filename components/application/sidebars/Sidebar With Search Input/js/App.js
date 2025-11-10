"use client";


import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  ScrollShadow,
  Spacer,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import Sidebar from "./sidebar";


import {AcmeIcon} from "./acme";
import {items} from "./sidebar-items";


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


        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-2">
            <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            <div className="flex flex-col">
              <p className="text-small text-default-600 font-medium">John Doe</p>
              <p className="text-tiny text-default-400">Product Designer</p>
            </div>
          </div>
          <Input
            fullWidth
            aria-label="search"
            className="px-1"
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <Icon
                className="text-default-500 [&>g]:stroke-[2px]"
                icon="solar:magnifer-linear"
                width={18}
              />
            }
          />
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar defaultSelectedKey="home" items={items} />
          <Card className="mx-2 overflow-visible" shadow="sm">
            <CardBody className="items-center py-5 text-center">
              <h3 className="text-medium text-default-700 font-medium">
                Upgrade to Pro
                <span aria-label="rocket-emoji" className="ml-2" role="img">
                  🚀
                </span>
              </h3>
              <p className="text-small text-default-500 p-4">
                Get 1 month free and unlock all the features of the pro plan.
              </p>
            </CardBody>
            <CardFooter className="absolute -bottom-8 justify-center">
              <Button className="px-10 shadow-md" color="primary" radius="full" variant="shadow">
                Upgrade
              </Button>
            </CardFooter>
          </Card>
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

