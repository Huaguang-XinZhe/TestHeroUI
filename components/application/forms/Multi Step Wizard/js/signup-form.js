"use client";


import React from "react";
import {Input, Checkbox, Link} from "@heroui/react";
import {cn} from "@heroui/react";


const SignUpForm = React.forwardRef(({className, ...props}, ref) => {
  const inputProps = {
    labelPlacement: "outside",
    classNames: {
      label:
        "text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700",
    },
  };


  return (
    <>
      <div className="text-default-foreground text-3xl leading-9 font-bold">Welcome to Acme 👋</div>
      <div className="text-medium text-default-500 py-2">
        Already have an account?
        <Link className="text-secondary ml-2 underline" href="#" size="md">
          Sign In
        </Link>
      </div>
      <form
        ref={ref}
        {...props}
        className={cn("flex grid grid-cols-12 flex-col gap-4 py-8", className)}
      >
        <Input
          className="col-span-12 md:col-span-6"
          label="First Name"
          name="first-name"
          placeholder="Type your first name here"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Last Name"
          name="last-name"
          placeholder="Type your last name here"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Email"
          name="email"
          placeholder="john.doe@gmail.com"
          type="email"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Confirm Email"
          name="confirm-email"
          placeholder="john.doe@gmail.com"
          type="email"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Password"
          name="password"
          placeholder="*********"
          type="password"
          {...inputProps}
        />


        <Input
          className="col-span-12 md:col-span-6"
          label="Confirm Password"
          name="confirm-password"
          placeholder="*********"
          type="password"
          {...inputProps}
        />


        <Checkbox
          defaultSelected
          className="col-span-12 m-0 p-2 text-left"
          color="secondary"
          name="terms-and-privacy-agreement"
          size="md"
        >
          I read and agree with the
          <Link className="text-secondary mx-1 underline" href="#" size="md">
            Terms
          </Link>
          <span>and</span>
          <Link className="text-secondary ml-1 underline" href="#" size="md">
            Privacy Policy
          </Link>
          .
        </Checkbox>
      </form>
    </>
  );
});


SignUpForm.displayName = "SignUpForm";


export default SignUpForm;

