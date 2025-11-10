"use client";


import React from "react";
import {Button, Input, Link, Divider, User, Checkbox, Form} from "@heroui/react";
import {Icon} from "@iconify/react";


import {AcmeIcon} from "./acme";


export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);


  const toggleVisibility = () => setIsVisible(!isVisible);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
  };


  return (
    <div className="relative flex h-full min-h-192 w-full">
      {/* Brand Logo */}
      <div className="absolute top-5 left-2 lg:left-5">
        <div className="flex items-center">
          <AcmeIcon size={40} />
          <p className="font-medium">ACME</p>
        </div>
      </div>


      {/* Login Form */}
      <div className="bg-background flex w-full items-center justify-center lg:w-1/2">
        <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
          <div className="w-full text-left">
            <p className="pb-2 text-xl font-medium">Welcome Back</p>
            <p className="text-small text-default-500">Log in to your account to continue</p>
          </div>


          <div className="flex w-full flex-col gap-2">
            <Button
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
            >
              Continue with Google
            </Button>
            <Button
              startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
              variant="bordered"
            >
              Continue with Github
            </Button>
          </div>


          <div className="flex w-full items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="text-tiny text-default-500 shrink-0">OR</p>
            <Divider className="flex-1" />
          </div>


          <Form
            className="flex w-full flex-col gap-3"
            validationBehavior="native"
            onSubmit={handleSubmit}
          >
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
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="underlined"
            />


            <div className="flex w-full items-center justify-between px-1 py-2">
              <Checkbox name="remember" size="sm">
                Remember for 15 days
              </Checkbox>
              <Link className="text-default-500" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" color="primary" type="submit">
              Log In
            </Button>
          </Form>


          <p className="text-small text-center">
            Need to create an account?&nbsp;
            <Link href="#" size="sm">
              Sign Up
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

