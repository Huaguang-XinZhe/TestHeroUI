"use client";


import React from "react";
import {Chip, Divider} from "@heroui/react";


import {AcmeIcon} from "./acme";
import ThemeSwitch from "./theme-switch";


export default function Component() {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 md:order-2 md:items-end">
          <ThemeSwitch />
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center">
              <AcmeIcon size={34} />
              <span className="text-small font-medium">ACME</span>
            </div>
            <Divider className="h-4" orientation="vertical" />
            <Chip className="text-default-500 border-none px-0" color="success" variant="dot">
              All systems operational
            </Chip>
          </div>
          <p className="text-tiny text-default-400 text-center md:text-start">
            &copy; 2024 Acme Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

