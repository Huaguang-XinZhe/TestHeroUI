"use client";


import React from "react";
import {Button, Input, Link, Divider, User, Checkbox} from "@heroui/react";
import {Icon} from "@iconify/react";


import {AcmeIcon} from "./acme";


export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);


  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
    <div className="relative flex h-full min-h-192 w-full">
      {/* Brand Logo */}
      <div className="absolute top-5 left-2 lg:left-5">
        <div className="flex items-center">
          <AcmeIcon size={40} />
          <p className="font-medium">ACME</p>
        </div>
      </div>


      {/* Sign Up Form */}
      <div className="bg-background flex w-full items-center justify-center lg:w-1/2">
        <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
          <div className="w-full text-left">
            <p className="pb-2 text-xl font-medium">Create Account</p>
            <p className="text-small text-default-500">Sign up for a new account to get started</p>
          </div>


          <div className="flex w-full flex-col gap-2">
            <Button
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
            >
              Sign Up with Google
            </Button>
            <Button
              startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
              variant="bordered"
            >
              Sign Up with Github
            </Button>
          </div>


          <div className="flex w-full items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="text-tiny text-default-500 shrink-0">OR</p>
            <Divider className="flex-1" />
          </div>


          <form className="flex w-full flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              isRequired
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="underlined"
            />


            <Input
              isRequired
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Create a password"
              type={isVisible ? "text" : "password"}
              variant="underlined"
            />


            <Input
              isRequired
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type={isVisible ? "text" : "password"}
              variant="underlined"
            />


            <Checkbox isRequired className="py-4" size="sm">
              I agree with the&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Terms
              </Link>
              &nbsp; and&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Privacy Policy
              </Link>
            </Checkbox>
            <Button color="primary" type="submit">
              Sign Up
            </Button>
          </form>


          <p className="text-small text-center">
            Already have an account?&nbsp;
            <Link href="#" size="sm">
              Log In
            </Link>
          </p>
        </div>
      </div>


      {/* Right side */}
      <div
        className="rounded-medium shadow-small relative hidden w-1/2 flex-col-reverse p-10 lg:flex"
        style={{
          backgroundImage:
            "url(https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/white-building.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-end gap-4">
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            }}
            classNames={{
              base: "flex flex-row-reverse",
              name: "w-full text-right text-black",
              description: "text-black/80",
            }}
            description="Founder & CEO at ACME"
            name="Bruno Reichert"
          />


          <p className="w-full text-right text-2xl text-black/60">
            <span className="font-medium">“</span>
            <span className="font-normal italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa
              volutpat aliquet.
            </span>
            <span className="font-medium">”</span>
          </p>
        </div>
      </div>
    </div>
  );
}

