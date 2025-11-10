"use client";


import React from "react";
import {Button, Link, ResizablePanel, Spacer} from "@heroui/react";
import {LazyMotion, domAnimation, AnimatePresence, m} from "framer-motion";
import {cn} from "@heroui/react";


import SwitchCell from "./switch-cell";


const variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};


export default function Component() {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(true);


  const AnimatedWrapper = ({children, className, ...props}) => (
    <m.div
      animate="visible"
      className={cn(
        "rounded-large border-divider bg-background/15 shadow-small pointer-events-auto ml-auto max-w-sm border p-6 backdrop-blur",
        className,
      )}
      exit="hidden"
      initial="hidden"
      transition={{
        opacity: {
          duration: 0.5,
        },
      }}
      variants={variants}
      {...props}
    >
      {children}
    </m.div>
  );


  const cookieSettingsContent = (
    <AnimatedWrapper>
      <h1 className="text-large font-semibold">Your Privacy</h1>
      <p className="text-small text-default-700 font-normal">
        This site uses tracking technologies to improve your experience. You may choose to accept or
        reject these technologies. Check our{" "}
        <Link href="#" size="sm" underline="always">
          Privacy
        </Link>{" "}
        for more information.
      </p>
      <Spacer y={4} />
      <div className="flex flex-col gap-y-2">
        <SwitchCell
          defaultSelected
          classNames={{
            base: "dark:bg-content1",
            label: "text-small",
          }}
          description="To show you relevant content"
          label="Marketing"
        />


        <SwitchCell
          defaultSelected
          classNames={{
            base: "dark:bg-content1",
            label: "text-small",
          }}
          description="Essential for the site to function"
          label="Essential"
        />


        <SwitchCell
          defaultSelected
          classNames={{
            base: "dark:bg-content1",
            label: "text-small",
          }}
          description="To improve the performance of the site"
          label="Performance"
        />


        <SwitchCell
          defaultSelected
          classNames={{
            base: "dark:bg-content1",
            label: "text-small",
          }}
          description="To understand how you use the site"
          label="Analytics"
        />
      </div>
      <Spacer y={4} />
      <div className="flex justify-between gap-x-3">
        <Button
          fullWidth
          radius="lg"
          style={{
            border: "solid 2px transparent",
            backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
          onPress={() => setIsSettingsOpen(false)}
        >
          Accept All
        </Button>
        <Button fullWidth variant="bordered" onPress={() => setIsSettingsOpen(false)}>
          Reject All
        </Button>
      </div>
    </AnimatedWrapper>
  );


  const cookiesAlertContent = (
    <AnimatedWrapper>
      <p className="text-small text-default-700 font-normal">
        We use cookies on our website to give you the most relevant experience by remembering your
        preferences and repeat visits. By clicking&nbsp;
        <b className="font-semibold">&quot;Accept All&quot;</b>, you consent to the use of ALL the
        cookies. However, you may visit&nbsp;
        <span className="font-semibold">&quot;Cookie Settings&quot;</span> to provide a controlled
        consent. For more information, please read our{" "}
        <Link href="#" size="sm" underline="hover">
          Cookie Policy.
        </Link>
      </p>
      <div className="mt-4 space-y-2">
        <Button
          fullWidth
          className="px-4 font-medium"
          radius="lg"
          style={{
            border: "solid 2px transparent",
            backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          Accept All
        </Button>
        <Button
          fullWidth
          className="border-default-200 text-default-foreground font-medium"
          radius="lg"
          variant="bordered"
        >
          Reject All
        </Button>
        <Button
          fullWidth
          className="text-default-foreground font-medium"
          radius="lg"
          variant="light"
          onPress={() => setIsSettingsOpen(true)}
        >
          Cookie Settings
        </Button>
      </div>
    </AnimatedWrapper>
  );


  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <ResizablePanel>
        <AnimatePresence initial={false} mode="wait">
          <LazyMotion features={domAnimation}>
            {isSettingsOpen ? cookieSettingsContent : cookiesAlertContent}
          </LazyMotion>
        </AnimatePresence>
      </ResizablePanel>
    </div>
  );
}

