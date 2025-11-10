"use client";


import React from "react";
import {AvatarGroup, Avatar, Button} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


export type SupportCardProps = React.HTMLAttributes<HTMLDivElement>;


const SupportCard = React.forwardRef<HTMLDivElement, SupportCardProps>(
  ({className, ...props}, ref) => (
    <div
      {...props}
      ref={ref}
      className={cn(
        "align-center rounded-large bg-content1 shadow-small my-2 flex shrink-0 items-center justify-center gap-3 self-stretch px-3 py-3",
        className,
      )}
    >
      <AvatarGroup isBordered size="sm">
        <Avatar
          classNames={{
            base: "ring-0 ring-offset-1 w-[25px] h-[25px]",
          }}
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/d958cf406bb83c3c0a93e2f03fcb0bef.jpg"
        />
        <Avatar
          classNames={{
            base: "ring-0 ring-offset-1 w-[25px] h-[25px]",
          }}
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg"
        />
        <Avatar
          classNames={{
            base: "ring-0 ring-offset-1 w-[25px] h-[25px]",
          }}
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/f4d075c1fa8155478e5bb26aaae69fc1.jpg"
        />
      </AvatarGroup>
      <div className="text-tiny text-default-700 line-clamp-2 text-left font-medium">
        We’re here to answer your questions.
      </div>
      <Button
        isIconOnly
        className="align-center bg-default-100 flex h-[32px] w-[31px] justify-center rounded-[12px] dark:bg-[#27272A]/40"
        size="sm"
        variant="flat"
      >
        <Icon
          className="text-default-400 dark:text-foreground [&>g>path:nth-child(1)]:stroke-[3px] [&>g>path:nth-child(2)]:stroke-[2.5px]"
          icon="solar:chat-round-dots-linear"
          width={20}
        />
      </Button>
    </div>
  ),
);


SupportCard.displayName = "SupportCard";


export default SupportCard;

