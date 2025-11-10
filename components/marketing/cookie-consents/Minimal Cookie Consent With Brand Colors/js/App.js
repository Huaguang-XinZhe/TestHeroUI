import React from "react";
import {Button, Link} from "@heroui/react";


import {Icon} from "./icon";


export default function Component() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0">
      <div className="border-divider bg-primary shadow-small pointer-events-auto flex w-full items-center justify-between gap-x-20 border px-6 py-4">
        <p className="text-small text-primary-foreground font-normal">
          We use cookies to provide the best experience. By continuing to use our site, you agree to
          our&nbsp;
          <Link
            className="text-primary-foreground font-medium"
            href="#"
            size="sm"
            underline="always"
          >
            Cookie Policy.
          </Link>
          <Icon className="text-primary-200 ml-2 inline-block h-6 w-6" icon="lucide:cookie" />
        </p>
        <div className="flex items-center gap-2">
          <Button className="bg-primary-foreground text-primary font-medium" radius="lg">
            Accept
          </Button>
          <Button className="text-primary-foreground font-medium" radius="lg" variant="light">
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}

