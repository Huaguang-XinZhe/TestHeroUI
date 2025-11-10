"use client";


import type {CardProps} from "@heroui/react";


import React from "react";
import {Card, CardHeader, CardBody, Button, Input, Spacer, Divider, Form} from "@heroui/react";


export default function Component(props: CardProps) {
  const [orgName, setOrgName] = React.useState<string>("HeroUI");
  const errors: string[] = [];


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    console.log("handleSubmit");


    alert("Organization Name: " + orgName);
  };


  if (!orgName) {
    errors.push("Organization name is required");
  }


  if (orgName.length > 50) {
    errors.push("Organization name must be less than 50 characters");
  }


  return (
    <Card className="w-full max-w-[500px]" {...props}>
      <CardHeader className="px-6 pt-6 pb-0">
        <div className="flex flex-col items-start">
          <h4 className="text-large">Organization Name</h4>
          <p className="text-small text-default-500">
            This is your organization visible name to the public.
          </p>
        </div>
      </CardHeader>
      <Spacer y={2} />
      <CardBody className="px-4">
        <Form className="gap-0" validationBehavior="native" onSubmit={handleSubmit}>
          <Input
            isClearable
            isRequired
            errorMessage={() => (
              <ul>
                {errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            )}
            isInvalid={errors.length > 0}
            label="Organization Name"
            maxLength={50}
            name="orgName"
            value={orgName}
            onValueChange={setOrgName}
          />
          <Spacer y={6} />
          <Divider />
          <div className="flex w-full flex-wrap-reverse items-center justify-between gap-2 px-4 pt-4 md:flex-wrap">
            <p className="text-small text-default-400">
              Max. 50 characters. <span className="text-default-500">{orgName.length}/50</span>
            </p>
            <div className="flex items-center gap-2">
              <Button type="reset" variant="bordered">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save Changes
              </Button>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}

