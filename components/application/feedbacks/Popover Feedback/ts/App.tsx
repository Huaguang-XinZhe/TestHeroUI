"use client";


import React from "react";
import {
  Button,
  Divider,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import FeedbackRating from "./feedback-rating";


export default function Component() {
  return (
    <div>
      <Popover shouldBlockScroll={false}>
        <PopoverTrigger>
          <Button variant="bordered">Feedback</Button>
        </PopoverTrigger>
        <PopoverContent className="w-[340px] p-3">
          <form className="flex w-full flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <Textarea
              aria-label="Feedback"
              name="feedback"
              placeholder="Ideas or suggestions to improve our product"
              variant="faded"
            />


            <div className="flex w-full items-center justify-end gap-2 px-1">
              <Icon
                className="text-default-400 dark:text-default-300"
                icon="la:markdown"
                width={20}
              />
              <p className="text-tiny text-default-400 dark:text-default-300">
                <Link
                  className="text-tiny text-default-500"
                  color="foreground"
                  href="https://guides.github.com/features/mastering-markdown/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Markdown
                  <Icon className="[&>path]:stroke-[2px]" icon="solar:arrow-right-up-linear" />
                </Link>
                &nbsp;supported.
              </p>
            </div>


            <Divider className="my-2" />


            <div className="flex w-full items-center justify-between">
              <FeedbackRating name="rating" />
              <Button color="primary" size="sm" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}

