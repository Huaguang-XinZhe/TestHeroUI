"use client";


import React from "react";
import {Avatar, Button, Spacer, Tab, Tabs, Tooltip, useDisclosure} from "@heroui/react";
import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";
import {cn} from "@heroui/react";


import {items} from "./items";


import {AcmeIcon} from "./acme";
import ProfileSetting from "./profile-setting";
import AppearanceSetting from "./appearance-setting";
import AccountSetting from "./account-setting";
import BillingSetting from "./billing-setting";
import TeamSetting from "./team-setting";
import SidebarDrawer from "./sidebar-drawer";
import Sidebar from "./sidebar";


/**
 * This example requires installing the `usehooks-ts` and `lodash` packages.
 * `npm install usehooks-ts lodash`
 *
 * import {useMediaQuery} from "usehooks-ts";
 * import {isEqual, uniqWith} from "lodash";
 *
 *
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
  const {isOpen, onOpenChange} = useDisclosure();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");


  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);


  return (
    <div className="flex h-dvh w-full gap-4">
      {/* Sidebar */}
      <SidebarDrawer
        className={cn("min-w-[288px] rounded-lg", {"min-w-[76px]": isCollapsed})}
        hideCloseButton={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <div
          className={cn(
            "will-change bg-default-100 transition-width relative flex h-full w-72 flex-col p-6",
            {
              "w-[83px] items-center px-[6px] py-6": isCollapsed,
            },
          )}
        >
          <div
            className={cn("flex items-center gap-3 pl-2", {
              "justify-center gap-0 pl-0": isCollapsed,
            })}
          >
            <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
              <AcmeIcon className="text-background" />
            </div>
            <span
              className={cn("text-small w-full font-bold uppercase opacity-100", {
                "w-0 opacity-0": isCollapsed,
              })}
            >
              Acme
            </span>
            <div className={cn("flex-end flex", {hidden: isCollapsed})}>
              <Icon
                className="dark:text-primary-foreground/60 cursor-pointer [&>g]:stroke-[1px]"
                icon="solar:round-alt-arrow-left-line-duotone"
                width={24}
                onClick={isMobile ? onOpenChange : onToggle}
              />
            </div>
          </div>
          <Spacer y={6} />
          <div className="flex items-center gap-3 px-3">
            <Avatar
              isBordered
              size="sm"
              src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg"
            />
            <div className={cn("flex max-w-full flex-col", {hidden: isCollapsed})}>
              <p className="text-small text-foreground font-medium">Kate Moore</p>
              <p className="text-tiny text-default-400 font-medium">Customer Support</p>
            </div>
          </div>


          <Spacer y={6} />


          <Sidebar
            defaultSelectedKey="settings"
            iconClassName="group-data-[selected=true]:text-default-50"
            isCompact={isCollapsed}
            itemClasses={{
              base: "px-3 rounded-large data-[selected=true]:bg-foreground!",
              title: "group-data-[selected=true]:text-default-50",
            }}
            items={items}
          />


          <Spacer y={8} />


          <div
            className={cn("mt-auto flex flex-col", {
              "items-center": isCollapsed,
            })}
          >
            {isCollapsed && (
              <Button
                isIconOnly
                className="text-default-600 flex h-10 w-10"
                size="sm"
                variant="light"
              >
                <Icon
                  className="dark:text-primary-foreground/60 cursor-pointer [&>g]:stroke-[1px]"
                  height={24}
                  icon="solar:round-alt-arrow-right-line-duotone"
                  width={24}
                  onClick={onToggle}
                />
              </Button>
            )}
            <Tooltip content="Support" isDisabled={!isCollapsed} placement="right">
              <Button
                fullWidth
                className={cn(
                  "text-default-600 data-[hover=true]:text-foreground justify-start truncate",
                  {
                    "justify-center": isCollapsed,
                  },
                )}
                isIconOnly={isCollapsed}
                startContent={
                  isCollapsed ? null : (
                    <Icon
                      className="text-default-600 flex-none"
                      icon="solar:info-circle-line-duotone"
                      width={24}
                    />
                  )
                }
                variant="light"
              >
                {isCollapsed ? (
                  <Icon
                    className="text-default-500"
                    icon="solar:info-circle-line-duotone"
                    width={24}
                  />
                ) : (
                  "Support"
                )}
              </Button>
            </Tooltip>
            <Tooltip content="Log Out" isDisabled={!isCollapsed} placement="right">
              <Button
                className={cn("text-default-500 data-[hover=true]:text-foreground justify-start", {
                  "justify-center": isCollapsed,
                })}
                isIconOnly={isCollapsed}
                startContent={
                  isCollapsed ? null : (
                    <Icon
                      className="text-default-500 flex-none rotate-180"
                      icon="solar:minus-circle-line-duotone"
                      width={24}
                    />
                  )
                }
                variant="light"
              >
                {isCollapsed ? (
                  <Icon
                    className="text-default-500 rotate-180"
                    icon="solar:minus-circle-line-duotone"
                    width={24}
                  />
                ) : (
                  "Log Out"
                )}
              </Button>
            </Tooltip>
          </div>
        </div>
      </SidebarDrawer>


      {/*  Settings Content */}
      <div className="w-full max-w-2xl flex-1 p-4">
        {/* Title */}
        <div className="flex items-center gap-x-3">
          <Button
            isIconOnly
            className="sm:hidden"
            size="sm"
            variant="flat"
            onPress={() => {
              setIsCollapsed(false);
              onOpenChange();
            }}
          >
            <Icon
              className="text-default-500"
              icon="solar:sidebar-minimalistic-linear"
              width={20}
            />
          </Button>
          <h1 className="text-default-foreground text-3xl leading-9 font-bold">Settings</h1>
        </div>
        <h2 className="text-small text-default-500 mt-2">
          Customize settings, email preferences, and web appearance.
        </h2>
        {/*  Tabs */}
        <Tabs
          fullWidth
          classNames={{
            base: "mt-6",
            cursor: "bg-content1 dark:bg-content1",
            panel: "w-full p-0 pt-4",
          }}
        >
          <Tab key="profile" title="Profile">
            <ProfileSetting />
          </Tab>
          <Tab key="appearance" title="Appearance">
            <AppearanceSetting />
          </Tab>
          <Tab key="account" title="Account">
            <AccountSetting />
          </Tab>
          <Tab key="billing" title="Billing">
            <BillingSetting />
          </Tab>
          <Tab key="team" title="Team">
            <TeamSetting />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

