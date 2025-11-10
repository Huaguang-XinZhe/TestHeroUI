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
  Divider,
  cn,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import {AcmeIcon} from "./social";


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


const BasicNavbar = React.forwardRef(({classNames = {}, ...props}, ref) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar
      ref={ref}
      {...props}
      classNames={{
        base: cn("border-default-100 bg-transparent", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
        ...classNames,
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <div className="bg-default-foreground text-background rounded-full">
          <AcmeIcon size={34} />
        </div>
        <span className="text-small text-default-foreground ml-2 font-medium">ACME</span>
      </NavbarBrand>


      {/* Center Content */}
      <NavbarContent justify="center">
        <NavbarItem isActive className="data-[active='true']:font-medium[date-active='true']">
          <Link aria-current="page" className="text-default-foreground" href="#" size="sm">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
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
      </NavbarContent>


      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 flex! gap-2">
          <Button className="text-default-500" radius="full" variant="light">
            Login
          </Button>
          <Button
            className="bg-default-foreground text-background font-medium"
            color="secondary"
            endContent={<Icon icon="solar:alt-arrow-right-linear" />}
            radius="full"
            variant="flat"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenuToggle className="text-default-400 md:hidden" />


      <NavbarMenu
        className="bg-default-200/50 shadow-medium dark:bg-default-100/50 top-[calc(var(--navbar-height)-1px)] max-h-fit pt-6 pb-6 backdrop-blur-md backdrop-saturate-150"
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
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="text-default-500 mb-2 w-full" href="#" size="md">
              {item}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
});


BasicNavbar.displayName = "BasicNavbar";


export default BasicNavbar;

