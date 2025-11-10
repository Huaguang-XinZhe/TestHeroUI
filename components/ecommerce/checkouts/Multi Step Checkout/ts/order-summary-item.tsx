"use client";


import React from "react";
import {Button, Image, Link, Tooltip} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


export type OrderSummaryItemType = {
  id: string;
  name: string;
  href: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  imageSrc: string;
};


export type OrderSummaryItemProps = React.HTMLAttributes<HTMLLIElement> & OrderSummaryItemType;


const OrderSummaryItem = React.forwardRef<HTMLLIElement, OrderSummaryItemProps>(
  ({children, name, href, price, color, size, quantity, imageSrc, className, ...props}, ref) => (
    <li
      ref={ref}
      className={cn("border-b-small border-divider flex items-center gap-x-4 py-4", className)}
      {...props}
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center">
        <Image alt={name} src={imageSrc} />
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="text-small">
          <Link className="text-foreground font-medium" href={href} underline="hover">
            {name || children}
          </Link>
        </h4>
        <div className="flex items-center gap-3">
          <p>
            <span className="text-small text-default-500">Color: </span>
            <span className="text-small text-default-700 font-medium capitalize">{color}</span>
          </p>
          <p>
            <span className="text-small text-default-500">Size: </span>
            <span className="text-small text-default-700 font-medium">{size}</span>
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-small text-default-700 font-semibold">${price}</span>
          <span className="text-small text-default-500">x {quantity}</span>
        </div>
      </div>
      <Tooltip content="Remove" placement="top">
        <Button isIconOnly className="h-7 w-7 min-w-6" radius="full" variant="flat">
          <Icon icon="lucide:x" width={14} />
        </Button>
      </Tooltip>
    </li>
  ),
);


OrderSummaryItem.displayName = "OrderSummaryItem";


export default OrderSummaryItem;

