"use client";


import type {PopoverProps} from "@heroui/react";


import React from "react";
import {
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@heroui/react";
import {Icon} from "@iconify/react";


export type PopoverFilterWrapperProps = Omit<PopoverProps, "children"> & {
  title?: string;
  children: React.ReactNode;
};


const PopoverFilterWrapper = React.forwardRef<HTMLDivElement, PopoverFilterWrapperProps>(
  ({title, children, ...props}, ref) => {
    const {isOpen, onClose, onOpenChange} = useDisclosure();


    return (
      <Popover ref={ref} isOpen={isOpen} onOpenChange={onOpenChange} {...props}>
        <PopoverTrigger>
          <Button
            className="border-default-200 text-default-500"
            endContent={<Icon icon="solar:alt-arrow-down-linear" />}
            variant="bordered"
          >
            {title}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex max-w-xs flex-col items-start gap-2 px-4 pt-4">
          <span className="text-medium text-default-600 mb-2 font-medium">{title}</span>
          <div className="w-full px-2">{children}</div>
          <Divider className="bg-default-100 mt-3" />
          <div className="flex w-full justify-end gap-2 py-2">
            <Button size="sm" variant="flat" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" size="sm" variant="flat" onPress={onClose}>
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);


PopoverFilterWrapper.displayName = "PopoverFilterWrapper";


export default PopoverFilterWrapper;

