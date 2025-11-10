"use client";


import React from "react";
import {Card, CardHeader, CardBody, Button, Avatar} from "@heroui/react";


import CellValue from "./cell-value";


export default function Component() {
  return (
    <Card className="w-full max-w-lg p-2">
      <CardHeader className="justify-between px-4">
        <div className="flex flex-col items-start">
          <p className="text-large">Personal Details</p>
          <p className="text-small text-default-500">Manage your personal details</p>
        </div>
        <Button color="primary">Edit</Button>
      </CardHeader>
      <CardBody className="space-y-2 px-6">
        {/* First Name */}
        <CellValue label="Full Name" value="John Doe" />
        {/* Birthday */}
        <CellValue label="Birthday" value="January 1, 2000" />
        {/* Country */}
        <CellValue
          label="Country"
          value={
            <div className="flex gap-2">
              <p>United Kingdom</p>
              <Avatar alt="United Kingdom" className="h-6 w-6" src="https://flagcdn.com/gb.svg" />
            </div>
          }
        />
        {/* State */}
        <CellValue label="State" value="London" />
        {/* Address */}
        <CellValue label="Address" value="123 Street" />
        {/* Zip Code */}
        <CellValue label="Zip Code" value="123456" />
        {/* Phone Number */}
        <CellValue label="Phone Number" value="+1 123 456 7890" />
        {/* Email */}
        <CellValue label="Email" value="john.doe@mail.com" />
        {/* Passport */}
        <CellValue label="Passport / ID" value="1234567890" />
        {/* SSN */}
        <CellValue label="SSN" value="1234567890" />
        {/* Legal Status */}
        <CellValue label="Legal Status" value="Citizen" />
        {/* Role */}
        <CellValue label="Role" value="Software Engineer" />
      </CardBody>
    </Card>
  );
}

