import React from "react";
import {Button, Link} from "@heroui/react";


export default function Component() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="rounded-large border-divider bg-background/15 shadow-small pointer-events-auto ml-auto max-w-sm border p-6 backdrop-blur">
        <p className="text-small text-default-700 font-normal">
          We use cookies on our website to give you the most relevant experience by remembering your
          preferences and repeat visits. By clicking&nbsp;
          <b className="font-semibold">&quot;Accept All&quot;</b>, you consent to the use of ALL the
          cookies. However, you may visit&nbsp;
          <span className="font-semibold">&quot;Cookie Settings&quot;</span> to provide a controlled
          consent. For more information, please read our{" "}
          <Link href="#" size="sm" underline="hover">
            Cookie Policy.
          </Link>
        </p>
        <div className="mt-4 space-y-2">
          <Button
            fullWidth
            className="px-4 font-medium"
            radius="lg"
            style={{
              border: "solid 2px transparent",
              backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            Accept All
          </Button>
          <Button
            fullWidth
            className="border-default-200 text-default-foreground font-medium"
            radius="lg"
            variant="bordered"
          >
            Reject All
          </Button>
          <Button
            fullWidth
            className="text-default-foreground font-medium"
            radius="lg"
            variant="light"
          >
            Cookie Settings
          </Button>
        </div>
      </div>
    </div>
  );
}

