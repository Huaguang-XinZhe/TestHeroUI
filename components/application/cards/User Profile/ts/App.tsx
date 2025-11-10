"use client";


import React from "react";
import {Card, CardHeader, CardBody, Button, Avatar, Tabs, Tab, Chip} from "@heroui/react";


export default function Component() {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-scroll">
      <Card className="my-10 w-[400px]">
        <CardHeader className="relative flex h-[100px] flex-col justify-end overflow-visible bg-linear-to-br from-pink-300 via-purple-300 to-indigo-400">
          <Avatar
            className="h-20 w-20 translate-y-12"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <Button
            className="absolute top-3 right-3 bg-white/20 text-white dark:bg-black/20"
            radius="full"
            size="sm"
            variant="light"
          >
            Edit Profile
          </Button>
        </CardHeader>
        <CardBody>
          <div className="pt-6 pb-4">
            <p className="text-large font-medium">Tony Reichert</p>
            <p className="text-small text-default-400 max-w-[90%]">@tony.reichert</p>
            <div className="flex gap-2 pt-2 pb-1">
              <Chip variant="flat">Design</Chip>
              <Chip variant="flat">UI/UX</Chip>
              <Chip variant="flat">Photography</Chip>
            </div>
            <p className="text-small text-foreground py-2">
              Creator of Radify Icons Set. 500+ icons in 6 styles, SVG and Figma files, and more.
            </p>
            <div className="flex gap-2">
              <p>
                <span className="text-small text-default-500 font-medium">13</span>&nbsp;
                <span className="text-small text-default-400">Following</span>
              </p>
              <p>
                <span className="text-small text-default-500 font-medium">2500</span>&nbsp;
                <span className="text-small text-default-400">Followers</span>
              </p>
            </div>
          </div>
          <Tabs fullWidth>
            <Tab key="posts" title="Posts" />
            <Tab key="likes" title="Likes" />
            <Tab key="comments" title="Media" />
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

