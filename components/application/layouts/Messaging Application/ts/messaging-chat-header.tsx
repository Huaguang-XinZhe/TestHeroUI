"use client";


import React from "react";
import {Button, Chip} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


export interface MessagingChatHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  page?: number;
  onOpen?: () => void;
  paginate?: (direction: number) => void;
}


const MessagingChatHeader = React.forwardRef<HTMLInputElement, MessagingChatHeaderProps>(
  ({page, paginate, onOpen, className, ...props}, ref) => {
    return (
      <header
        className={cn("flex w-full items-center justify-between px-3 py-3 sm:px-6", className)}
        {...props}
        ref={ref}
      >
        {page === 0 ? (
          <Button
            isIconOnly
            className={cn("text-default-500 flex", {
              "sm:hidden": page === 0,
            })}
            size="sm"
            variant="light"
            onPress={onOpen}
          >
            <Icon height={24} icon="solar:hamburger-menu-outline" width={24} />
          </Button>
        ) : (
          <Button
            isIconOnly
            className="text-default-500 flex lg:hidden"
            size="sm"
            variant="light"
            onPress={() => paginate?.(-1)}
          >
            <Icon height={24} icon="solar:arrow-left-outline" width={24} />
          </Button>
        )}


        <div
          className={cn(
            "text-large text-foreground flex w-full items-center justify-center font-bold lg:justify-start",
            {
              "sm:justify-start": page === 0,
            },
          )}
        >
          <h2 className="text-large text-foreground font-bold">Chats</h2>
          <Chip
            classNames={{
              base: "h-[18px] ml-2 bg-default-100",
              content: "text-default-600 text-[10px] font-medium",
            }}
            size="sm"
            variant="flat"
          >
            24
          </Chip>
        </div>


        <Button
          isIconOnly
          className="border-default-200 text-default-400 ml-auto h-[28px] w-[28px] min-w-[28px] rounded-[6px] border-1 p-0"
          variant="bordered"
        >
          <Icon
            className="text-default-400 [&>g]:stroke-[2px]"
            icon="solar:pen-new-square-linear"
            width={15}
          />
        </Button>
      </header>
    );
  },
);


MessagingChatHeader.displayName = "MessagingChatHeader";


export default MessagingChatHeader;

