"use client";


import React from "react";
import {Avatar} from "@heroui/react";
import {cn} from "@heroui/react";


export type UserReviewProps = React.HTMLAttributes<HTMLDivElement> & {
  avatar: string;
  name: string;
  role: string;
  content: string;
};


const UserReview = React.forwardRef<HTMLDivElement, UserReviewProps>(
  ({children, name, avatar, content, className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn("rounded-medium bg-content1 shadow-small flex flex-col gap-2.5 p-5", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Avatar alt={name} className="h-7 w-7" size="sm" src={avatar} />
        <span className="text-small text-foreground">{name}</span>
      </div>
      <p className="text-default-700">{content || children}</p>
    </div>
  ),
);


UserReview.displayName = "UserReview";


export default UserReview;

