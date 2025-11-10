"use client";


import React from "react";
import {Button, Input, Link, Divider, ResizablePanel, Form} from "@heroui/react";
import {AnimatePresence, m, domAnimation, LazyMotion} from "framer-motion";
import {Icon} from "@iconify/react";


export default function Component() {
  const [isFormVisible, setIsFormVisible] = React.useState(false);


  const variants = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 10},
  };


  const orDivider = (
    <div className="flex items-center gap-4 py-2">
      <Divider className="flex-1" />
      <p className="text-tiny text-default-500 shrink-0">OR</p>
      <Divider className="flex-1" />
    </div>
  );


  const handleSubmit = (event) => {
    event.preventDefault();


    console.log("handleSubmit");
  };


  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="rounded-large bg-content1 shadow-small flex w-full max-w-sm flex-col gap-4 px-8 pt-6 pb-10">
        <ResizablePanel>
          <h1 className="mb-4 text-xl font-medium">Log In</h1>
          <AnimatePresence initial={false} mode="popLayout">
            <LazyMotion features={domAnimation}>
              {isFormVisible ? (
                <m.div
                  animate="visible"
                  className="flex flex-col gap-y-3"
                  exit="hidden"
                  initial="hidden"
                  variants={variants}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Form validationBehavior="native" onSubmit={handleSubmit}>
                    <Input
                      autoFocus
                      isRequired
                      label="Email Address"
                      name="email"
                      type="email"
                      variant="bordered"
                    />


                    <Input
                      isRequired
                      label="Password"
                      name="password"
                      type="password"
                      variant="bordered"
                    />


                    <Button className="w-full" color="primary" type="submit">
                      Log In
                    </Button>
                  </Form>
                  {orDivider}
                  <Button
                    fullWidth
                    startContent={
                      <Icon
                        className="text-default-500"
                        icon="solar:arrow-left-linear"
                        width={18}
                      />
                    }
                    variant="flat"
                    onPress={() => setIsFormVisible(false)}
                  >
                    Other Login options
                  </Button>
                </m.div>
              ) : (
                <>
                  <Button
                    fullWidth
                    color="primary"
                    startContent={
                      <Icon className="pointer-events-none text-2xl" icon="solar:letter-bold" />
                    }
                    type="button"
                    onPress={() => setIsFormVisible(true)}
                  >
                    Continue with Email
                  </Button>
                  {orDivider}
                  <m.div
                    animate="visible"
                    className="flex flex-col gap-y-2"
                    exit="hidden"
                    initial="hidden"
                    variants={variants}
                  >
                    <div className="flex flex-col gap-2">
                      <Button
                        fullWidth
                        startContent={<Icon icon="flat-color-icons:google" width={24} />}
                        variant="flat"
                      >
                        Continue with Google
                      </Button>
                      <Button
                        fullWidth
                        startContent={
                          <Icon className="text-default-500" icon="fe:github" width={24} />
                        }
                        variant="flat"
                      >
                        Continue with Github
                      </Button>
                    </div>
                    <p className="text-small mt-3 text-center">
                      Need to create an account?&nbsp;
                      <Link href="#" size="sm">
                        Sign Up
                      </Link>
                    </p>
                  </m.div>
                </>
              )}
            </LazyMotion>
          </AnimatePresence>
        </ResizablePanel>
      </div>
    </div>
  );
}

