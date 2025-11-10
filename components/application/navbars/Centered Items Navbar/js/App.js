"use client";


import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@heroui/react";


import {AcmeIcon} from "./acme";


const menuItems = [
  "About",
  "Blog",
  "Customers",
  "Pricing",
  "Enterprise",
  "Changelog",
  "Documentation",
  "Contact Us",
];


export default function Component(props) {
  return (
    <Navbar
      {...props}
      classNames={{
        base: "py-4 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="54px"
    >
      <NavbarContent
        className="border-small border-default-200/20 bg-background/60 shadow-medium dark:bg-default-100/50 gap-4 rounded-full px-2 backdrop-blur-md backdrop-saturate-150"
        justify="center"
      >
        {/* Toggle */}
        <NavbarMenuToggle className="text-default-400 ml-2 md:hidden" />


        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <div className="bg-foreground text-background rounded-full">
            <AcmeIcon size={34} />
          </div>
          <span className="ml-2 font-medium md:hidden">ACME</span>
        </NavbarBrand>


        {/* Items */}
        <NavbarItem className="hidden md:flex">
          <Link className="text-default-500" href="#" size="sm">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="foreground" href="#" size="sm">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem className="ml-2 flex!">
          <Button radius="full" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>


      {/* Menu */}
      <NavbarMenu
        className="rounded-large border-small border-default-200/20 bg-background/60 shadow-medium dark:bg-default-100/50 top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] py-6 backdrop-blur-md backdrop-saturate-150"
        motionProps={{
          initial: {opacity: 0, y: -20},
          animate: {opacity: 1, y: 0},
          exit: {opacity: 0, y: -20},
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="text-default-500 w-full" href="#" size="md">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

