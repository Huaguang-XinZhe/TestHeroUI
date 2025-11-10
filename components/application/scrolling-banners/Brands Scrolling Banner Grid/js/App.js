import React from "react";


import ScrollingBanner from "./scrolling-banner";


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
  const GridItem = ({children}) => (
    <div className="rounded-small bg-default-200/50 text-foreground dark:bg-default-50/50 flex h-28 w-60 items-center justify-center">
      {children}
    </div>
  );


  const reversedLogos = logos.slice().reverse();


  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <div className="flex w-full flex-wrap items-center justify-center gap-1.5">
        <ScrollingBanner isVertical duration={70} gap="6px" shouldPauseOnHover={false}>
          {logos.map(({key, logo}) => (
            <GridItem key={key}>{logo}</GridItem>
          ))}
        </ScrollingBanner>
        <ScrollingBanner isVertical duration={70} gap="6px" shouldPauseOnHover={false}>
          {reversedLogos.map(({key, logo}) => (
            <GridItem key={key}>{logo}</GridItem>
          ))}
        </ScrollingBanner>
      </div>
    </section>
  );
}

