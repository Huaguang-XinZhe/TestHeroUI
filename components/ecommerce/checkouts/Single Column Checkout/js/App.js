"use client";


import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";


import CheckoutForm from "./checkout-form";


export default function Component() {
  return (
    <section className="flex w-full max-w-2xl py-8">
      <div className="w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Shopping Cart</h1>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Shoes Category</BreadcrumbItem>
            <BreadcrumbItem>My Shopping Cart</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <CheckoutForm />
      </div>
    </section>
  );
}

