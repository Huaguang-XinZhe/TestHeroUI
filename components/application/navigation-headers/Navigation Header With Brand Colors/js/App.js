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
  Tabs,
  Tab,
  AvatarGroup,
  Avatar,
  Chip,
  Tooltip,
  ScrollShadow,
  Divider,
  Breadcrumbs,
  BreadcrumbItem,
  Input,
  Badge,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import NotificationsCard from "./notifications-card";


import {AcmeIcon} from "./acme";


export default function Component() {
  return (
    <div className="w-full">
      <Navbar
        classNames={{
          base: "bg-primary",
          wrapper: "px-4 sm:px-6",
          item: "data-[active=true]:text-primary",
        }}
        height="64px"
      >
        <NavbarBrand>
          <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
          <AcmeIcon />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <Breadcrumbs className="hidden sm:flex" radius="full">
          <BreadcrumbItem
            classNames={{
              separator: "text-primary-foreground/50",
              item: "text-primary-foreground/50",
            }}
          >
            Apps
          </BreadcrumbItem>
          <BreadcrumbItem
            classNames={{
              separator: "text-primary-foreground/50",
              item: "text-primary-foreground/50",
            }}
          >
            iOS App
          </BreadcrumbItem>
          <BreadcrumbItem
            classNames={{
              separator: "text-primary-foreground/50",
              item: "text-primary-foreground",
            }}
          >
            TestFlight
          </BreadcrumbItem>
        </Breadcrumbs>


        {/* Right Menu */}
        <NavbarContent className="ml-auto h-12 max-w-fit items-center gap-0" justify="end">
          {/* Search */}
          <NavbarItem className="mr-2 hidden lg:flex">
            <Input
              aria-label="Search"
              classNames={{
                base: "px-1",
                inputWrapper:
                  "bg-primary-400 dark:bg-primary-300 data-[hover=true]:bg-primary-300/80 group-data-[focus=true]:bg-primary-300",
                input:
                  "font-light placeholder:text-primary-foreground/80 group-data-[has-value=true]:text-primary-foreground",
              }}
              labelPlacement="outside"
              placeholder="Search..."
              radius="full"
              startContent={
                <Icon
                  className="text-primary-foreground/60 [&>g]:stroke-[2px]"
                  icon="solar:magnifer-linear"
                  width={20}
                />
              }
            />
          </NavbarItem>
          {/* Mobile search */}
          <NavbarItem className="lg:hidden">
            <Button isIconOnly radius="full" variant="light">
              <Icon
                className="text-primary-foreground/60"
                icon="solar:magnifer-linear"
                width={20}
              />
            </Button>
          </NavbarItem>
          {/* Theme change */}
          <NavbarItem className="hidden lg:flex">
            <Button isIconOnly radius="full" variant="light">
              <Icon className="text-primary-foreground/60" icon="solar:sun-linear" width={24} />
            </Button>
          </NavbarItem>
          {/* Settings */}
          <NavbarItem className="hidden lg:flex">
            <Button isIconOnly radius="full" variant="light">
              <Icon
                className="text-primary-foreground/60"
                icon="solar:settings-linear"
                width={24}
              />
            </Button>
          </NavbarItem>
          {/* Notifications */}
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
                    <Icon
                      className="text-primary-foreground/60"
                      icon="solar:bell-linear"
                      width={22}
                    />
                  </Badge>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
                <NotificationsCard className="w-full shadow-none" />
              </PopoverContent>
            </Popover>
          </NavbarItem>
          {/* User Menu */}
          <NavbarItem className="px-2">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <button className="mt-1 h-8 w-8 transition-transform">
                  <Badge
                    classNames={{
                      badge: "border-primary",
                    }}
                    color="success"
                    content=""
                    placement="bottom-right"
                    shape="circle"
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
      <main className="mt-6 flex w-full flex-col items-center">
        <div className="w-full max-w-[1024px] px-4 lg:px-8">
          <header className="mb-6 flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-default-900 text-xl font-bold lg:text-3xl">Dashboard</h1>
              <p className="text-small text-default-400 lg:text-medium">Manage your deployments</p>
            </div>
            <Button
              color="primary"
              startContent={
                <Icon className="flex-none text-current" icon="lucide:plus" width={16} />
              }
            >
              New Deployment
            </Button>
          </header>
          <ScrollShadow
            hideScrollBar
            className="-mx-2 flex w-full justify-between gap-8"
            orientation="horizontal"
          >
            <Tabs
              aria-label="Navigation Tabs"
              classNames={{
                cursor: "bg-default-200 shadow-none",
              }}
              radius="full"
              variant="light"
            >
              <Tab key="dashboard" title="Dashboard" />
              <Tab
                key="deployments"
                title={
                  <div className="flex items-center gap-2">
                    <p>Deployments</p>
                    <Chip size="sm">9</Chip>
                  </div>
                }
              />


              <Tab key="analytics" title="Analytics" />
              <Tab key="team" title="Team" />
              <Tab key="settings" title="Settings" />
            </Tabs>
            <div className="flex items-center gap-4">
              <AvatarGroup max={3} size="sm" total={10}>
                <Tooltip content="John" placement="bottom">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </Tooltip>
                <Tooltip content="Mark" placement="bottom">
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                </Tooltip>
                <Tooltip content="Jane" placement="bottom">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </Tooltip>
              </AvatarGroup>
              <Divider className="h-6" orientation="vertical" />
              <Tooltip content="New deployment" placement="bottom">
                <Button isIconOnly radius="full" size="sm" variant="faded">
                  <Icon className="text-default-500" icon="lucide:plus" width={16} />
                </Button>
              </Tooltip>
            </div>
          </ScrollShadow>
        </div>
      </main>
    </div>
  );
}

