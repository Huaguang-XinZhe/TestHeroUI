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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Avatar,
  Badge,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import NotificationsCard from "./notifications-card";


import {AcmeIcon} from "./acme";


export default function Component() {
  return (
    <Navbar
      classNames={{
        base: "lg:bg-transparent lg:backdrop-filter-none",
        item: "data-[active=true]:text-primary",
        wrapper: "px-4 sm:px-6",
      }}
      height="60px"
    >
      <NavbarBrand>
        <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
        <AcmeIcon />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent
        className="bg-content2 dark:bg-content1 ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full px-4 sm:flex"
        justify="start"
      >
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" className="flex gap-2 text-inherit" href="#">
            Deployments
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Analytics
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Settings
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="lg:bg-content2 lg:dark:bg-content1 ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:px-1"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <Button isIconOnly radius="full" variant="light">
            <Icon className="text-default-500" icon="solar:magnifer-linear" width={22} />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button isIconOnly radius="full" variant="light">
            <Icon className="text-default-500" icon="solar:sun-linear" width={24} />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button isIconOnly radius="full" variant="light">
            <Icon className="text-default-500" icon="solar:settings-linear" width={24} />
          </Button>
        </NavbarItem>
        <NavbarItem className="flex">
          <Popover offset={12} placement="bottom-end">
            <PopoverTrigger>
              <Button
                disableRipple
                isIconOnly
                className="overflow-visible"
                radius="full"
                variant="light"
              >
                <Badge color="danger" content="5" showOutline={false} size="md">
                  <Icon className="text-default-500" icon="solar:bell-linear" width={22} />
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
              <NotificationsCard className="w-full shadow-none" />
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="px-2">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <button className="mt-1 h-8 w-8 outline-hidden transition-transform">
                <Badge
                  className="border-transparent"
                  color="success"
                  content=""
                  placement="bottom-right"
                  shape="circle"
                  size="sm"
                >
                  <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29526708c" />
                </Badge>
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">johndoe@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>


      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive>
          <Link aria-current="page" className="w-full" color="primary" href="#">
            Deployments
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Analytics
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Settings
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

