"use client";


import React from "react";
import {Avatar, Button, Spacer, useDisclosure, Tooltip} from "@heroui/react";
import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";
import {AnimatePresence, domAnimation, LazyMotion, m} from "framer-motion";
import {cn} from "@heroui/react";


import {AcmeIcon} from "./acme";
import MessagingChatInbox from "./messaging-chat-inbox";
import MessagingChatWindow from "./messaging-chat-window";
import MessagingChatProfile from "./messaging-chat-profile";
import Sidebar from "./sidebar";
import SidebarDrawer from "./sidebar-drawer";
import MessagingChatHeader from "./messaging-chat-header";
import messagingSidebarItems from "./messaging-sidebar-items";


const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 20 : -20,
    opacity: 0,
  }),
};


/**
 *  This example requires installing the `usehooks-ts` package:
 * `npm install usehooks-ts`
 *
 * import {useMediaQuery} from "usehooks-ts";
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
 * <MessagingSidebar defaultSelectedKey="chat" selectedKeys={[currentPath]} />
 * ```
 */
export default function Component() {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const {isOpen: isProfileSidebarOpen, onOpenChange: onProfileSidebarOpenChange} = useDisclosure();


  const isCompact = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");


  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);


  const paginate = React.useCallback(
    (newDirection) => {
      setPage((prev) => {
        if (!isCompact) return prev;


        const currentPage = prev[0];


        if (currentPage < 0 || currentPage > 2) return [currentPage, prev[1]];


        return [currentPage + newDirection, newDirection];
      });
    },
    [isCompact],
  );


  const content = React.useMemo(() => {
    let component = <MessagingChatInbox page={page} paginate={paginate} />;


    if (isCompact) {
      switch (page) {
        case 1:
          component = <MessagingChatWindow paginate={paginate} />;
          break;
        case 2:
          component = <MessagingChatProfile paginate={paginate} />;
          break;
      }


      return (
        <LazyMotion features={domAnimation}>
          <m.div
            key={page}
            animate="center"
            className="col-span-12"
            custom={direction}
            exit="exit"
            initial="enter"
            transition={{
              x: {type: "spring", stiffness: 300, damping: 30},
              opacity: {duration: 0.2},
            }}
            variants={variants}
          >
            {component}
          </m.div>
        </LazyMotion>
      );
    }


    return (
      <>
        <MessagingChatInbox className="lg:col-span-6 xl:col-span-4" />
        <MessagingChatWindow
          className="lg:col-span-6 xl:col-span-5"
          toggleMessagingProfileSidebar={onProfileSidebarOpenChange}
        />


        <div className="hidden xl:col-span-3 xl:block">
          <SidebarDrawer
            className="xl:block"
            isOpen={isProfileSidebarOpen}
            sidebarPlacement="right"
            sidebarWidth={320}
            onOpenChange={onProfileSidebarOpenChange}
          >
            <MessagingChatProfile />
          </SidebarDrawer>
        </div>
      </>
    );
  }, [isCompact, page, paginate, direction, isProfileSidebarOpen, onProfileSidebarOpenChange]);


  return (
    <div className="flex h-dvh w-full gap-x-3">
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
            defaultSelectedKey="chat"
            iconClassName="group-data-[selected=true]:text-default-50"
            isCompact={isCollapsed}
            itemClasses={{
              base: "px-3 rounded-large data-[selected=true]:bg-foreground!",
              title: "group-data-[selected=true]:text-default-50",
            }}
            items={messagingSidebarItems}
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
                onPress={() => paginate && paginate(page - 1)}
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


      <main className="w-full">
        <div className="sm:rounded-large sm:border-small sm:border-default-200 grid grid-cols-12 gap-0 overflow-y-hidden p-0 pb-2">
          <MessagingChatHeader
            aria-hidden={!isMobile}
            className="col-span-12 sm:hidden"
            page={page}
            paginate={paginate}
            onOpen={onOpen}
          />


          {isCompact ? (
            <AnimatePresence custom={direction} initial={false} mode="wait">
              {content}
            </AnimatePresence>
          ) : (
            content
          )}
        </div>
      </main>
    </div>
  );
}

