"use client";


import React from "react";
import {Button, Input, Checkbox, Link, Divider, Form} from "@heroui/react";
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
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center pb-6">
        <AcmeIcon size={60} />
        <p className="text-xl font-medium">Welcome Back</p>
        <p className="text-small text-default-500">Log in to your account to continue</p>
      </div>
      <div className="rounded-large bg-content1 shadow-small mt-2 flex w-full max-w-sm flex-col gap-4 px-8 py-6">
        <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
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
            variant="bordered"
          />


          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox name="remember" size="sm">
              Remember me
            </Checkbox>
            <Link className="text-default-500" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full" color="primary" type="submit">
            Log In
          </Button>
        </Form>
        <div className="flex items-center gap-4">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
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
        <p className="text-small text-center">
          Need to create an account?&nbsp;
          <Link href="#" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

