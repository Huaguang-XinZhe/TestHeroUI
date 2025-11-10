"use client";


import React from "react";
import {Avatar, Badge, ScrollShadow, Listbox, ListboxItem, Input, Tabs, Tab} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import messagingChatList from "./messaging-chat-list";
import MessagingChatHeader from "./messaging-chat-header";


const MessageChatInbox = React.forwardRef(({page, paginate, ...props}, ref) => {
  return (
    <div ref={ref} {...props}>
      <div className="h-dvh w-full overflow-visible">
        <MessagingChatHeader className="hidden sm:flex" page={page} paginate={paginate} />
        <div className="mb-6 flex flex-col gap-4 px-3 sm:px-6">
          <div>
            <div className="mb-4 lg:mb-4">
              <Input
                aria-label="Search"
                labelPlacement="outside"
                placeholder="Search..."
                radius="md"
                startContent={
                  <Icon
                    className="text-default-500 [&>g]:stroke-[2px]"
                    icon="solar:magnifer-linear"
                    width={18}
                  />
                }
                variant="bordered"
              />
            </div>
            <div className="mt-4">
              <Tabs
                fullWidth
                classNames={{
                  cursor: "group-data-[selected=true]:bg-content1",
                }}
              >
                <Tab key="inbox" title="Inbox" />
                <Tab key="unread" title="Unread" />
              </Tabs>
            </div>
          </div>
        </div>
        <ScrollShadow className="flex h-full max-h-[calc(100vh-196px)] flex-col gap-6 overflow-y-auto px-3">
          <Listbox
            classNames={{
              base: "p-0",
            }}
            items={messagingChatList}
            variant="flat"
          >
            {(item) => (
              <ListboxItem
                key={item.id}
                className={cn("mb-2 px-4", {
                  "bg-default-100": item.active,
                })}
                endContent={<div className="text-small text-default-400">{item.time}</div>}
                textValue={item.name}
                onPress={() => paginate?.(1)}
              >
                <div className="flex items-center gap-2 py-1">
                  {item.count == 0 ? (
                    <Avatar alt={item.name} className="shrink-0" size="sm" src={item.avatar} />
                  ) : (
                    <Badge color="danger" content={item.count}>
                      <Avatar alt={item.name} className="shrink-0" size="sm" src={item.avatar} />
                    </Badge>
                  )}


                  <div className="ml-2 min-w-0 flex-1">
                    <div className="text-small text-default-foreground font-semibold">
                      {item.name}
                    </div>
                    <div className="text-small text-default-500 truncate">{item.message}</div>
                  </div>
                </div>
              </ListboxItem>
            )}
          </Listbox>
        </ScrollShadow>
      </div>
    </div>
  );
});


MessageChatInbox.displayName = "MessageChatInbox";


export default MessageChatInbox;

