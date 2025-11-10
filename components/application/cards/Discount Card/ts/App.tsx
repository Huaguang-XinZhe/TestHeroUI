"use client";


import type {CardProps} from "@heroui/react";


import React from "react";
import {Button, Card, CardBody, CardFooter, Divider, Input, Link, Form, cn} from "@heroui/react";
import {Icon} from "@iconify/react";


export default function Component(props: CardProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    console.log("handleSubmit");
  };


  const content = isOpen ? (
    <div className="h-full w-full items-start justify-center overflow-scroll px-4 pt-20 pb-24">
      <div className="flex flex-col gap-2">
        <Form className="w-full" validationBehavior="native" onSubmit={handleSubmit}>
          <Input
            autoFocus
            fullWidth
            isRequired
            aria-label="Affiliate code"
            classNames={{
              inputWrapper: "group-data-[focus-visible=true]:outline-foreground",
            }}
            label="Enter affiliate code"
            labelPlacement="outside"
            placeholder="E.g. ACME123"
          />
          <Button className="mt-1 w-full" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Divider className="mt-10 mb-8" />
      <ul className="flex flex-col gap-1">
        <li>
          <Link className="text-default-400" href="#" size="sm">
            Where do I find my affiliate code?
          </Link>
        </li>
        <li>
          <Link className="text-default-400" href="#" size="sm">
            How do I become an affiliate?
          </Link>
        </li>
        <li>
          <Link className="text-default-400" href="#" size="sm">
            What are the benefits of being an affiliate?
          </Link>
        </li>
        <li>
          <Link className="text-default-400" href="#" size="sm">
            Contact Acme Support
          </Link>
        </li>
      </ul>
    </div>
  ) : (
    <ul>
      <li className="flex items-center gap-1">
        <Icon className="text-default-600" icon="ci:check" width={24} />
        <p className="text-small text-default-500">New Acme customer</p>
      </li>
      <li className="flex items-center gap-1">
        <Icon className="text-default-600" icon="ci:check" width={24} />
        <p className="text-small text-default-500">Fewer than 10 employees</p>
      </li>
      <li className="flex items-center gap-1">
        <Icon className="text-default-600" icon="ci:check" width={24} />
        <p className="text-small text-default-500">Affiliated with an Acme partner</p>
      </li>
    </ul>
  );


  return (
    <Card {...props} className="relative w-full max-w-[400px] pb-[120px]">
      <Button
        className="absolute top-8 right-4 z-10"
        isIconOnly={isOpen}
        radius="full"
        size="sm"
        onPress={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <Icon icon="ci:close-sm" width={24} /> : "Apply"}
      </Button>
      <CardBody className="from-content1 to-default-100/50 relative min-h-[300px] bg-linear-to-br p-8 before:inset-0 before:h-full before:w-full before:content-['']">
        <h1 className="text-default-400 mb-4">Get up to</h1>
        <h2 className="from-foreground-800 to-foreground-500 dark:to-foreground-200 inline bg-linear-to-br bg-clip-text text-6xl font-semibold tracking-tight text-transparent">
          Four
          <br />
          months
          <br />
          free
        </h2>
      </CardBody>
      <CardFooter
        className={cn(
          "bg-content1 transition-height absolute bottom-0 h-[120px] overflow-visible px-6 duration-300 ease-in-out",
          {
            "h-full": isOpen,
            "border-default-100 border-t-1": !isOpen,
          },
        )}
      >
        {content}
      </CardFooter>
    </Card>
  );
}

