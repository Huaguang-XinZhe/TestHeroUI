"use client";


import React from "react";
import {Card, CardHeader, CardBody, RadioGroup, CardFooter, Button} from "@heroui/react";


import PaymentMethodRadio from "./payment-method-radio";


import {VisaIcon, MasterCardIcon, PayPalIcon} from "./providers";


export default function Component(props) {
  return (
    <Card className="w-[420px]" {...props}>
      <CardHeader className="flex flex-col items-start px-6 pt-5 pb-0">
        <h4 className="text-large font-medium">Payment method</h4>
        <p className="text-tiny text-default-400">
          Select your preferred payment method for future payments.
        </p>
      </CardHeader>
      <CardBody>
        <RadioGroup aria-label="Plans" classNames={{wrapper: "gap-3"}}>
          <PaymentMethodRadio
            description="Expires on 02/2025"
            icon={<VisaIcon height={30} width={30} />}
            label="Visa ending in 1234"
            value="1234"
          />


          <PaymentMethodRadio
            description="Expires on 12/2024"
            icon={<VisaIcon height={30} width={30} />}
            label="Visa ending in 4229"
            value="4229"
          />


          <PaymentMethodRadio
            description="Expires on 02/2025"
            icon={<MasterCardIcon height={30} width={30} />}
            label="MasterCard ending in 8888"
            value="8888"
          />


          <PaymentMethodRadio
            isExpired
            description="Expires on 01/2023"
            icon={<MasterCardIcon height={30} width={30} />}
            label="MasterCard ending in 6745"
            value="6745"
          />


          <PaymentMethodRadio
            description="Select this option to pay with PayPal"
            icon={<PayPalIcon height={30} width={30} />}
            label="PayPal"
            value="paypal"
          />
        </RadioGroup>
        <p className="text-tiny text-default-400 pt-4 pl-1">
          Selected payment method can be changed at any time.
        </p>
      </CardBody>
      <CardFooter className="justify-end gap-2 px-4">
        <Button fullWidth variant="flat">
          Cancel
        </Button>
        <Button fullWidth color="primary">
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
}

