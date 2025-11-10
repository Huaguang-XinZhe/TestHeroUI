"use client";


import React from "react";
import {RadioGroup} from "@heroui/react";
import {cn} from "@heroui/react";


import PaymentMethodRadio from "./payment-method-radio";


import {VisaIcon, MasterCardIcon, PayPalIcon} from "./providers";


const PaymentMethodRadioGroup = React.forwardRef(({className, classNames, ...props}, ref) => {
  return (
    <RadioGroup
      {...props}
      ref={ref}
      classNames={{
        base: cn("mt-4", classNames?.base, className),
        wrapper: cn("lg:flex-nowrap gap-3", classNames?.wrapper),
      }}
      defaultValue="1234"
      label="Payment Method"
      orientation="horizontal"
    >
      <PaymentMethodRadio
        className="bg-content2 dark:bg-content1"
        description="Exp. on 02/2025"
        icon={<VisaIcon height={30} width={30} />}
        label="1234 ****"
        value="1234"
      />


      <PaymentMethodRadio
        className="bg-content2 dark:bg-content1"
        description="Exp. on 02/2025"
        icon={<MasterCardIcon height={30} width={30} />}
        label="8888 ****"
        value="8888"
      />


      <PaymentMethodRadio
        className="bg-content2 dark:bg-content1"
        description="Pay with PayPal"
        icon={<PayPalIcon height={30} width={30} />}
        label="PayPal"
        value="paypal"
      />
    </RadioGroup>
  );
});


PaymentMethodRadioGroup.displayName = "PaymentMethodRadioGroup";


export default PaymentMethodRadioGroup;

