"use client";


import React from "react";
import {ScrollShadow} from "@heroui/react";


import Sidebar from "./sidebar";


import {AcmeIcon} from "./acme";
import {items} from "./sidebar-items";


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
      <div className="border-r-small border-divider h-full w-72 p-6">
        <div className="flex items-center gap-2 px-2">
          <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
            <AcmeIcon className="text-background" />
          </div>
          <span className="text-small font-bold uppercase">Acme</span>
        </div>
        <ScrollShadow className="h-full max-h-full py-[10vh]">
          <Sidebar defaultSelectedKey="home" items={items} />
        </ScrollShadow>
      </div>
    </div>
  );
}

