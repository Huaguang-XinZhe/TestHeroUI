import React from "react";
import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";


import CenteredNavbar from "./centered-navbar";
import ScrollingBanner from "./scrolling-banner";
import AppScreenshotLight from "./app-screenshot-light";
import {Logo1, Logo10, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9} from "./logos";


const logos = [
  {
    key: "logo-1",
    logo: Logo1,
  },
  {
    key: "logo-2",
    logo: Logo2,
  },
  {
    key: "logo-3",
    logo: Logo3,
  },
  {
    key: "logo-4",
    logo: Logo4,
  },
  {
    key: "logo-5",
    logo: Logo5,
  },
  {
    key: "logo-6",
    logo: Logo6,
  },
  {
    key: "logo-7",
    logo: Logo7,
  },
  {
    key: "logo-8",
    logo: Logo8,
  },
  {
    key: "logo-9",
    logo: Logo9,
  },
  {
    key: "logo-10",
    logo: Logo10,
  },
];


export default function Component() {
  return (
    <div className="bg-background relative flex h-screen min-h-dvh w-full flex-col gap-9 overflow-y-auto p-4 md:gap-12 md:px-10 md:py-[34px]">
      {/* 
         NOTE: To use `bg-hero-section-centered-navbar`, you need to add the following to your tailwind config.
         ```
         backgroundImage: {
           "hero-section-centered-navbar":
             "linear-gradient(137deg, #F4F4F5 34.15%, #F8E5EC 46.96%, #FDD0DF 63.99%, #E4D4F4 75.82%, #A9EAF0 98.9%)",
         },
         ```
        */}
      <main className="bg-hero-section-centered-navbar flex flex-col items-center rounded-2xl px-3 md:rounded-3xl md:px-0">
        <section className="my-14 mt-16 flex flex-col items-center justify-center gap-6">
          <CenteredNavbar />
          <Button
            className="bg-background text-default-500 h-9 px-[18px] shadow-[0_2px_15px_0_rgba(0,0,0,0.05)]"
            endContent={
              <Icon
                className="pointer-events-none flex-none outline-hidden [&>path]:stroke-[1.5]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
          >
            New onboarding experience
          </Button>
          <h1 className="text-foreground text-center text-[clamp(2.125rem,1.142rem+3.659vw,4rem)] leading-none font-bold">
            Easiest way to <br /> power global teams.
          </h1>
          <p className="text-default-600 text-center text-base sm:w-[466px] md:text-lg md:leading-6">
            Acme makes running global teams simple. HR, Payroll, International Employment,
            contractor management and more.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Button className="bg-foreground text-background w-[163px] font-medium" radius="full">
              Get Started
            </Button>
            <Button
              className="text-default-foreground w-[163px] border-1 border-white/40 font-medium"
              endContent={
                <span className="bg-background pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full">
                  <Icon
                    className="text-default-500 transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[1.5]"
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
        <div className="mt-auto w-[calc(100%-calc(--spacing(4)*2))] max-w-6xl overflow-hidden rounded-tl-2xl rounded-tr-2xl border-1 border-white/25 bg-white/40 px-2 pt-3 md:px-4 md:pt-6">
          <AppScreenshotLight />
        </div>
      </main>
      <div className="mx-auto w-full max-w-6xl px-3 lg:px-6">
        <ScrollingBanner hideScrollBar shouldPauseOnHover gap="40px" size={40}>
          {logos.map(({key, logo}) => (
            <div key={key} className="text-default-500 flex items-center justify-center">
              {logo}
            </div>
          ))}
        </ScrollingBanner>
      </div>
    </div>
  );
}

