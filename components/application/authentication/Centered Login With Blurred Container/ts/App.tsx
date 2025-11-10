"use client";


import type {InputProps} from "@heroui/react";


import React from "react";
import {Button, Input, Checkbox, Link, Divider, Form} from "@heroui/react";
import {Icon} from "@iconify/react";


export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);


  const toggleVisibility = () => setIsVisible(!isVisible);


  const inputClasses: InputProps["classNames"] = {
    inputWrapper:
      "border-transparent bg-default-50/40 dark:bg-default-50/20 group-data-[focus=true]:border-primary data-[hover=true]:border-foreground/20",
  };


  const buttonClasses = "w-full bg-foreground/10 dark:bg-foreground/20";


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    console.log("handleSubmit");
  };


  return (
    <div className="flex min-h-192 w-full items-center justify-center bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-2 sm:p-4 lg:p-8">
      <div className="rounded-large bg-background/60 shadow-small dark:bg-default-100/50 flex w-full max-w-sm flex-col gap-4 px-8 pt-6 pb-10 backdrop-blur-md backdrop-saturate-150">
        <p className="pb-2 text-xl font-medium">Log In</p>
        <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
          <Input
            isRequired
            classNames={inputClasses}
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            classNames={inputClasses}
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="text-foreground/50 pointer-events-none text-2xl"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="text-foreground/50 pointer-events-none text-2xl"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox
              classNames={{
                wrapper: "before:border-foreground/50",
              }}
              name="remember"
              size="sm"
            >
              Remember me
            </Checkbox>
            <Link className="text-foreground/50" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
          <Button className={buttonClasses} type="submit">
            Log In
          </Button>
        </Form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button className={buttonClasses} startContent={<Icon icon="fe:google" width={24} />}>
            Continue with Google
          </Button>
          <Button className={buttonClasses} startContent={<Icon icon="fe:github" width={24} />}>
            Continue with Github
          </Button>
        </div>
        <p className="text-small text-foreground/50 text-center">
          Need to create an account?&nbsp;
          <Link color="foreground" href="#" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

