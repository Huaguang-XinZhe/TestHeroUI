"use client";


import React from "react";
import {Avatar, Button, ScrollShadow, Spacer, Input, useDisclosure} from "@heroui/react";
import {Icon} from "@iconify/react";


import Sidebar from "./sidebar";


import {AcmeIcon} from "./acme";
import {sectionItemsWithTeams} from "./sidebar-items";
import SidebarDrawer from "./sidebar-drawer";


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
export default function Component({children, header, title = "Overview"}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const content = (
    <div className="from-default-100 via-danger-100 to-secondary-100 relative flex h-full w-72 flex-1 flex-col bg-linear-to-b p-6">
      <div className="flex items-center gap-2 px-2">
        <div className="border-small border-foreground/20 flex h-8 w-8 items-center justify-center rounded-full">
          <AcmeIcon className="text-foreground" />
        </div>
        <span className="text-small text-foreground font-medium uppercase">Acme</span>
      </div>


      <Spacer y={8} />


      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 px-2">
          <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29028708c" />
          <div className="flex flex-col">
            <p className="text-small text-foreground">Jane Doe</p>
            <p className="text-tiny text-default-500">Product Designer</p>
          </div>
        </div>
        <Input
          fullWidth
          aria-label="search"
          classNames={{
            base: "px-1",
            inputWrapper:
              "bg-default-400/20 data-[hover=true]:bg-default-500/30 group-data-[focus=true]:bg-default-500/20",
            input: "placeholder:text-default-600 group-data-[has-value=true]:text-foreground",
          }}
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <Icon
              className="text-default-600 [&>g]:stroke-[2px]"
              icon="solar:magnifer-linear"
              width={18}
            />
          }
        />
      </div>


      <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
        <Sidebar
          defaultSelectedKey="home"
          iconClassName="text-default-600 group-data-[selected=true]:text-foreground"
          itemClasses={{
            base: "data-[selected=true]:bg-default-400/20 data-[hover=true]:bg-default-400/10",
            title: "text-default-600 group-data-[selected=true]:text-foreground",
          }}
          items={sectionItemsWithTeams}
          sectionClasses={{
            heading: "text-default-600 font-medium",
          }}
          variant="flat"
        />
      </ScrollShadow>


      <Spacer y={8} />


      <div className="mt-auto flex flex-col">
        <Button
          fullWidth
          className="text-default-600 justify-start data-[hover=true]:text-black"
          startContent={
            <Icon className="text-default-600" icon="solar:info-circle-line-duotone" width={24} />
          }
          variant="light"
        >
          Help & Information
        </Button>
        <Button
          className="text-default-600 justify-start data-[hover=true]:text-black"
          startContent={
            <Icon
              className="text-default-600 rotate-180"
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
  );


  return (
    <div className="flex h-full min-h-192 w-full">
      <SidebarDrawer className="flex-none" isOpen={isOpen} onOpenChange={onOpenChange}>
        {content}
      </SidebarDrawer>
      <div className="flex w-full flex-col gap-y-4 p-4 sm:max-w-[calc(100%-288px)]">
        <header className="rounded-medium border-small border-divider flex h-16 min-h-16 items-center justify-between gap-2 overflow-x-scroll px-4 py-2">
          <div className="flex max-w-full items-center gap-2">
            <Button
              isIconOnly
              className="flex sm:hidden"
              size="sm"
              variant="light"
              onPress={onOpen}
            >
              <Icon
                className="text-default-500"
                height={24}
                icon="solar:hamburger-menu-outline"
                width={24}
              />
            </Button>
            <h2 className="text-medium text-default-700 truncate font-medium">{title}</h2>
          </div>
          {header}
        </header>
        <main className="flex h-full">
          <div className="rounded-medium border-small border-divider flex h-full w-full flex-col gap-4 p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

