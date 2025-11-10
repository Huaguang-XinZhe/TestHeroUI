"use client";


import * as React from "react";
import {Button, Card, CardBody, Divider, Input, Select, SelectItem, Spacer} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import TeamManageTable from "./team-manage-table";


const roleOptions = [
  {label: "Member", value: "member", description: "team member"},
  {label: "Admin", value: "admin", description: "team admin"},
  {label: "Owner", value: "owner", description: "team owner"},
];


const TeamSetting = React.forwardRef(({className, ...rest}, ref) => (
  <div {...rest} ref={ref} className={cn("p-2", className)}>
    {/* Title */}
    <p className="text-default-700 text-base font-medium">Team</p>
    <p className="text-default-400 mt-1 text-sm font-normal">Manage and invite Team Members.</p>
    {/* Invite */}
    <Card className="bg-default-100 mt-4" shadow="none">
      <CardBody className="px-4">
        <div className="flex items-start justify-between pb-3">
          <p className="text-default-700 mt-1.5 text-sm font-medium">
            Invite new members by email address
          </p>
          <Button
            className="bg-default-foreground text-background"
            endContent={<Icon className="h-3 w-3" icon="solar:link-linear" />}
            radius="md"
            size="sm"
          >
            Invite Link
          </Button>
        </div>
        <Divider />
        <Spacer y={3} />
        <div className="py-2">
          {/* Email Address */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-default-500 text-sm font-normal">Email Address</p>
              <Input
                className="mt-2"
                classNames={{
                  inputWrapper: "bg-default-200",
                }}
                placeholder="e.g kate.moore@acme.com"
              />
            </div>
            <div className="flex-1">
              <p className="text-default-500 text-sm font-normal">Role</p>
              <Select
                className="mt-2"
                classNames={{
                  trigger: "bg-default-200",
                }}
                defaultSelectedKeys={["member"]}
              >
                {roleOptions.map((roleOption) => (
                  <SelectItem key={roleOption.value}>{roleOption.label}</SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <Button
            className="bg-default-200 text-default-700 mt-3"
            endContent={<Icon className="h-[18px] w-[18px]" icon="solar:add-circle-linear" />}
            radius="md"
            size="sm"
          >
            Add more
          </Button>
        </div>
        <Spacer y={3} />
        <Divider />
        <div>
          <div className="flex items-end justify-between pt-3">
            <p className="text-default-500 relative mb-2 text-xs">
              Learn more about <span className="text-default-foreground">Team Members</span>
              <Icon
                className={
                  "text-default-foreground absolute top-0 right-0 h-2.5 w-2.5 translate-x-[8px] translate-y-[-2px]"
                }
                icon="material-symbols-light:arrow-outward-rounded"
              />
            </p>
            <Button className="bg-default-foreground text-background" radius="md" size="sm">
              Send Invite
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
    <Spacer y={4} />
    {/* Team management table */}
    <TeamManageTable />
  </div>
));


TeamSetting.displayName = "TeamSetting";


export default TeamSetting;

