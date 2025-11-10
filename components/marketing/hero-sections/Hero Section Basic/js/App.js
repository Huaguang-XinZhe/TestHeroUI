import React from "react";
import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";


import BasicNavbar from "./basic-navbar";
import FadeInImage from "./fade-in-image";


export default function Component() {
  return (
    <div className="bg-background relative flex h-dvh w-full flex-col overflow-hidden">
      <BasicNavbar />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="border-default-100 bg-default-50 text-small text-default-500 h-9 overflow-hidden border-1 px-[18px] py-2 leading-5 font-normal"
            endContent={
              <Icon
                className="flex-none outline-hidden [&>path]:stroke-2"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            New onboarding experience
          </Button>
          <div className="text-center text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter sm:text-[64px]">
            {/* 
               NOTE: To use `bg-hero-section-title`, you need to add the following to your tailwind config.
               ```
               backgroundImage: {
                 "hero-section-title":
                   "linear-gradient(91deg, #FFF 32.88%, rgba(255, 255, 255, 0.40) 99.12%)",
               },
               ```
              */}
            <div className="bg-hero-section-title bg-clip-text text-transparent">
              Easiest way to <br /> power global teams.
            </div>
          </div>
          <p className="text-default-500 text-center leading-7 font-normal sm:w-[466px] sm:text-[18px]">
            Acme makes running global teams simple. HR, Payroll, International Employment,
            contractor management and more.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="bg-default-foreground text-small text-background h-10 w-[163px] px-[16px] py-[10px] leading-5 font-medium"
              radius="full"
            >
              Get Started
            </Button>
            <Button
              className="border-default-100 text-small h-10 w-[163px] border-1 px-[16px] py-[10px] leading-5 font-medium"
              endContent={
                <span className="bg-default-100 pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              See our plans
            </Button>
          </div>
        </section>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          {/**
           * If using in a nextjs project, use next/image instead of <img> in <FadeInImage>.
           * Also pass the following additional props to <FadeInImage>.
           *
           * ```tsx
           * <FadeInImage
           *   fill
           *   priority
           *   // existing code...
           * />
           * ```
           */}
          <FadeInImage
            alt="Gradient background"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
          />
        </div>
      </main>
    </div>
  );
}

