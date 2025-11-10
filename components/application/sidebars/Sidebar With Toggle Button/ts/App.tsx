"use client";


import React from "react";
import {Avatar, Button, ScrollShadow, Spacer} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


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
  const [isHidden, setIsHidden] = React.useState(false);


  return (
    <div className="flex h-full min-h-192 w-full">
      <div
        className={cn(
          "border-r-small! border-divider relative flex h-full w-72 max-w-[288px] flex-1 flex-col p-6 transition-[transform,opacity,margin] duration-250 ease-in-out",
          {
            "-ml-72 -translate-x-72": isHidden,
          },
        )}
      >
        <div className="flex items-center gap-2 px-2">
          <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
            <AcmeIcon className="text-background" />
          </div>
          <span className="text-small font-bold uppercase">Acme</span>
        </div>
        <Spacer y={8} />
        <div className="flex items-center gap-3 px-3">
          <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
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
      <div className="w-full flex-1 flex-col p-4">
        <header className="rounded-medium border-small border-divider flex items-center gap-3 p-4">
          <Button isIconOnly size="sm" variant="light" onPress={() => setIsHidden(!isHidden)}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:sidebar-minimalistic-outline"
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

