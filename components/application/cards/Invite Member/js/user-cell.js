"use client";


import React from "react";
import {Avatar, cn} from "@heroui/react";


import CellWrapper from "./cell-wrapper";


const UserCell = React.forwardRef(({avatar, name, permission, className, ...props}, ref) => (
  <CellWrapper ref={ref} className={cn("bg-transparent px-3 py-1", className)} {...props}>
    <div className="flex items-center gap-2">
      <Avatar size="sm" src={avatar} />
      <p className="text-small text-default-500">{name}</p>
    </div>
    <p className="text-small text-default-400">{permission}</p>
  </CellWrapper>
));


UserCell.displayName = "UserCell";


export default UserCell;

