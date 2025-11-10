"use client";


import React from "react";
import {Avatar, Button, ScrollShadow, Spacer, Input} from "@heroui/react";
import {Icon} from "@iconify/react";


import Sidebar from "./sidebar";


import {AcmeIcon} from "./acme";
import {brandItems} from "./sidebar-items";


/**
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
export default function Component() {
  return (
    <div className="h-full min-h-192">
      <div className="bg-primary relative flex h-full w-72 flex-1 flex-col p-6">
        <div className="flex items-center gap-2 px-2">
          <div className="border-small border-primary-foreground/20 flex h-8 w-8 items-center justify-center rounded-full">
            <AcmeIcon className="text-primary-foreground" />
          </div>
          <span className="text-small text-primary-foreground font-medium uppercase">Acme</span>
        </div>


        <Spacer y={8} />


        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-2">
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29028708c" />
            <div className="flex flex-col">
              <p className="text-small text-primary-foreground">Jane Doe</p>
              <p className="text-tiny text-primary-foreground/60">Product Designer</p>
            </div>
          </div>
          <Input
            fullWidth
            aria-label="search"
            classNames={{
              base: "px-1",
              inputWrapper:
                "bg-primary-400 dark:bg-primary-300 data-[hover=true]:bg-primary-300/80 group-data-[focus=true]:bg-primary-300",
              input:
                "font-light placeholder:text-primary-foreground/80 group-data-[has-value=true]:text-primary-foreground",
            }}
            color="primary"
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <Icon
                className="text-primary-foreground/60 [&>g]:stroke-[2px]"
                icon="solar:magnifer-linear"
                width={18}
              />
            }
          />
        </div>


        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar
            defaultSelectedKey="home"
            iconClassName="text-primary-foreground/60 group-data-[selected=true]:text-primary-foreground"
            itemClasses={{
              base: "data-[selected=true]:bg-primary-400 dark:data-[selected=true]:bg-primary-300 data-[hover=true]:bg-primary-300/20 dark:data-[hover=true]:bg-primary-300/40",
              title:
                "text-primary-foreground/60 group-data-[selected=true]:text-primary-foreground",
            }}
            items={brandItems}
            sectionClasses={{
              heading: "text-primary-foreground/80",
            }}
            variant="flat"
          />
        </ScrollShadow>


        <Spacer y={8} />


        <div className="mt-auto flex flex-col">
          <Button
            fullWidth
            className="text-primary-foreground/60 data-[hover=true]:text-primary-foreground justify-start"
            startContent={
              <Icon
                className="text-primary-foreground/60"
                icon="solar:info-circle-line-duotone"
                width={24}
              />
            }
            variant="light"
          >
            Help & Information
          </Button>
          <Button
            className="text-primary-foreground/60 data-[hover=true]:text-primary-foreground justify-start"
            startContent={
              <Icon
                className="text-primary-foreground/60 rotate-180"
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

