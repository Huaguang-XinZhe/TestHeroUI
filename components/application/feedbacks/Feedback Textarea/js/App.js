"use client";


import React from "react";
import {Button, Divider, Link, Textarea} from "@heroui/react";
import {Icon} from "@iconify/react";


import FeedbackRating from "./feedback-rating";


export default function Component() {
  return (
    <form
      className="rounded-medium bg-content1 shadow-small flex w-full max-w-sm flex-col gap-2 p-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <Textarea
        aria-label="Feedback"
        name="feedback"
        placeholder="Ideas or suggestions to improve our product"
        variant="faded"
      />


      <div className="flex w-full items-center justify-end gap-2 px-1">
        <Icon className="text-default-400 dark:text-default-300" icon="la:markdown" width={20} />
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
  );
}

