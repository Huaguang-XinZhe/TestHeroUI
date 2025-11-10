"use client";


import * as React from "react";
import {Icon} from "@iconify/react";
import {Avatar, Button, Badge, Card, CardBody, cn, Input, Spacer, Textarea} from "@heroui/react";


interface ProfileSettingCardProps {
  className?: string;
}


const ProfileSetting = React.forwardRef<HTMLDivElement, ProfileSettingCardProps>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn("p-2", className)} {...props}>
      {/* Profile */}
      <div>
        <p className="text-default-700 text-base font-medium">Profile</p>
        <p className="text-default-400 mt-1 text-sm font-normal">
          This displays your public profile on the site.
        </p>
        <Card className="bg-default-100 mt-4" shadow="none">
          <CardBody>
            <div className="flex items-center gap-4">
              <Badge
                showOutline
                classNames={{
                  badge: "w-5 h-5",
                }}
                content={
                  <Button
                    isIconOnly
                    className="bg-background text-default-500 h-5 w-5 min-w-5 p-0"
                    radius="full"
                    size="sm"
                    variant="bordered"
                  >
                    <Icon className="h-[9px] w-[9px]" icon="solar:pen-linear" />
                  </Button>
                }
                placement="bottom-right"
                shape="circle"
              >
                <Avatar
                  className="h-16 w-16"
                  src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg"
                />
              </Badge>
              <div>
                <p className="text-default-600 text-sm font-medium">Kate Moore</p>
                <p className="text-default-400 text-xs">Customer Support</p>
                <p className="text-default-400 mt-1 text-xs">kate.moore@acme.com</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Spacer y={4} />
      {/* Title */}
      <div>
        <p className="text-default-700 text-base font-medium">Title</p>
        <p className="text-default-400 mt-1 text-sm font-normal">Set your current role.</p>
        <Input className="mt-2" placeholder="e.g Customer Support" />
      </div>
      <Spacer y={2} />
      {/* Location */}
      <div>
        <p className="text-default-700 text-base font-medium">Location</p>
        <p className="text-default-400 mt-1 text-sm font-normal">Set your current location.</p>
        <Input className="mt-2" placeholder="e.g Buenos Aires, Argentina" />
      </div>
      <Spacer y={4} />
      {/* Biography */}
      <div>
        <p className="text-default-700 text-base font-medium">Biography</p>
        <p className="text-default-400 mt-1 text-sm font-normal">
          Specify your present whereabouts.
        </p>
        <Textarea
          className="mt-2"
          classNames={{
            input: cn("min-h-[115px]"),
          }}
          placeholder="e.g., 'Kate Moore - Acme.com Support Specialist. Passionate about solving tech issues, loves hiking and volunteering."
        />
      </div>
      <Button className="bg-default-foreground text-background mt-4" size="sm">
        Update Profile
      </Button>
    </div>
  ),
);


ProfileSetting.displayName = "ProfileSetting";


export default ProfileSetting;

