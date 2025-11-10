"use client";
import type {MessagingChatMessageProps} from "./data";


import React, {useCallback} from "react";
import {Avatar, Image} from "@heroui/react";
import {cn} from "@heroui/react";


const MessagingChatMessage = React.forwardRef<HTMLDivElement, MessagingChatMessageProps>(
  ({avatar, name, time, message, isRTL, imageUrl, className, classNames, ...props}, ref) => {
    const messageRef = React.useRef<HTMLDivElement>(null);


    const MessageAvatar = useCallback(
      () => (
        <div className="relative flex-none">
          <Avatar src={avatar} />
        </div>
      ),
      [avatar],
    );


    const Message = () => (
      <div className="flex max-w-[70%] flex-col gap-4">
        <div
          className={cn(
            "rounded-medium bg-content2 text-default-600 relative w-full px-4 py-3",
            classNames?.base,
          )}
        >
          <div className="flex">
            <div className="text-small text-default-foreground w-full font-semibold">{name}</div>
            <div className="flex-end text-small text-default-400">{time}</div>
          </div>
          <div ref={messageRef} className="text-small text-default-900 mt-2">
            <div className="whitespace-pre-line">{message}</div>
            {imageUrl && (
              <Image
                alt={`Image sent by ${name}`}
                className="border-default-200 shadow-small mt-2 border-2"
                height={96}
                src={imageUrl}
                width={264}
              />
            )}
          </div>
        </div>
      </div>
    );


    return (
      <div
        {...props}
        ref={ref}
        className={cn("flex gap-3", {"flex-row-reverse": isRTL}, className)}
      >
        <MessageAvatar />
        <Message />
      </div>
    );
  },
);


MessagingChatMessage.displayName = "MessagingChatMessage";


export default MessagingChatMessage;

