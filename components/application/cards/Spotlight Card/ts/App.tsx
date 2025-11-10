"use client";


import type {CardProps} from "@heroui/react";


import React from "react";
import {Card, CardBody, Image, CardHeader} from "@heroui/react";
import {m, useMotionValue, domAnimation, LazyMotion, useMotionTemplate} from "framer-motion";


export default function Component(props: CardProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);


  const cardRef = React.useRef<HTMLDivElement>(null);


  function onMouseMove({clientX, clientY}: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!cardRef?.current) return;


    let {left, top} = cardRef.current?.getBoundingClientRect();


    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }


  return (
    <Card
      {...props}
      ref={cardRef}
      className="group shadow-large relative w-[420px] bg-neutral-900"
      radius="lg"
      onMouseMove={onMouseMove}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 40, 200, 0.2),
              transparent 80%
            )
          `, // <- Add your own color here
          }}
        />
      </LazyMotion>
      <CardHeader className="relative h-60 p-0">
        <Image
          removeWrapper
          alt="Acme Planner"
          className="h-full object-cover"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        />
      </CardHeader>
      <CardBody className="px-6 pt-4 pb-8">
        <div className="flex flex-col gap-2">
          <p className="text-xl text-neutral-50">Get started with Acme Planner</p>
          <p className="text-small text-neutral-400">
            Outline, monitor, and deliver extensive work elements from inception to completion using
            project management and strategic roadmaps.
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

