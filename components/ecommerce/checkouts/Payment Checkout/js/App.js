"use client";


import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Avatar,
  Input,
  Autocomplete,
  AutocompleteItem,
  CardFooter,
  Tabs,
  Tab,
  Spacer,
  Form,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import countries from "./countries";
import PaymentForm from "./payment-form";


export default function Component() {
  const handleSubmit = (event) => {
    event.preventDefault();


    const formData = new FormData(event.target);


    console.log(formData);
  };


  return (
    <Card className="w-full max-w-[400px]">
      <CardHeader className="relative flex h-[100px] flex-col justify-end overflow-visible bg-linear-to-br from-pink-300 via-purple-300 to-indigo-400">
        <Avatar
          className="h-20 w-20 translate-y-12"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </CardHeader>
      <CardBody className="p-4">
        <div className="pt-6 pb-4">
          <p className="text-large font-medium">Radify Icons Set</p>
          <p className="text-small text-default-400 max-w-[90%]">
            500+ icons in 6 styles, SVG and Figma files, and more.
          </p>
        </div>
        <Tabs>
          <Tab key="one-time-payment" title="One-time payment" />
          <Tab key="subscription" title="Subscription" />
        </Tabs>
        <Spacer y={2} />
        <Form className="px-2 py-4" validationBehavior="native" onSubmit={handleSubmit}>
          <PaymentForm />
          <fieldset className="mt-4">
            <legend className="text-small mb-3 font-medium">Billing address</legend>
            <Autocomplete
              isRequired
              defaultItems={countries}
              label="Country"
              labelPlacement="outside"
              name="country"
              placeholder="Select country"
              showScrollIndicators={false}
            >
              {(item) => (
                <AutocompleteItem
                  key={item.code}
                  startContent={
                    <Avatar
                      alt="Country Flag"
                      className="h-6 w-6"
                      src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                    />
                  }
                >
                  {item.name}
                </AutocompleteItem>
              )}
            </Autocomplete>
            <Spacer y={2} />
            <div className="flex gap-2">
              <Input isRequired labelPlacement="outside" name="zip-code" placeholder="ZIP Code" />
              <Input isRequired labelPlacement="outside" name="state" placeholder="State" />
            </div>
          </fieldset>
          <Spacer y={4} />
          <Button fullWidth color="secondary" size="lg" type="submit">
            Pay $49.00
          </Button>
        </Form>
      </CardBody>
      <CardFooter className="items-center justify-center gap-1 pb-5">
        <Icon className="text-default-300" icon="solar:shield-check-bold" width={20} />
        <p className="text-small text-default-300">Payments are secure and encrypted.</p>
      </CardFooter>
    </Card>
  );
}

