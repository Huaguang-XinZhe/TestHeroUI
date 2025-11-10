"use client";


import React from "react";
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ScrollShadow,
  Spacer,
  useDisclosure,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import Sidebar from "./sidebar";


import {AcmeIcon} from "./acme";
import {sectionItemsWithTeams} from "./sidebar-items";


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
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const sidebarWidth = 288;


  return (
    <div className="flex h-dvh w-full">
      <Modal
        classNames={{
          base: "justify-start sm:m-0 p-0 h-dvh max-h-full w-(--sidebar-width)",
          wrapper: "items-start justify-start w-(--sidebar-width)!",
          body: "p-0",
          closeButton: "z-50",
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: -288,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            },
          },
        }}
        radius="none"
        scrollBehavior="inside"
        style={{
          // @ts-ignore
          "--sidebar-width": `${sidebarWidth}px`,
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody>
            <div className="relative flex h-full w-72 flex-1 flex-col p-6">
              <div className="flex items-center gap-2 px-2">
                <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
                  <AcmeIcon className="text-background" />
                </div>
                <span className="text-small text-foreground font-bold uppercase">Acme</span>
              </div>
              <Spacer y={8} />
              <div className="flex items-center gap-3 px-3">
                <Avatar
                  isBordered
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
                <div className="flex flex-col">
                  <p className="text-small text-default-600 font-medium">John Doe</p>
                  <p className="text-tiny text-default-400">Product Designer</p>
                </div>
              </div>


              <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                <Sidebar defaultSelectedKey="home" items={sectionItemsWithTeams} />
              </ScrollShadow>


              <Spacer y={8} />
              <div className="mt-auto flex flex-col">
                <Button
                  fullWidth
                  className="text-default-500 data-[hover=true]:text-foreground justify-start"
                  startContent={
                    <Icon
                      className="text-default-500"
                      icon="solar:info-circle-line-duotone"
                      width={24}
                    />
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
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="w-full flex-1 flex-col p-4">
        <header className="rounded-medium border-small border-divider flex items-center gap-3 p-4">
          <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:hamburger-menu-outline"
              width={24}
            />
          </Button>
          <h2 className="text-medium text-default-700 font-medium">Overview</h2>
        </header>
        <main className="mt-4 h-full w-full overflow-visible">
          <div className="rounded-medium border-small border-divider flex h-[90%] w-full flex-col gap-4" />
        </main>
      </div>
    </div>
  );
}

