"use client";


import React from "react";
import {
  Button,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@heroui/react";
import {Icon} from "@iconify/react";


import FeedbackRating from "./feedback-rating";


export default function Component() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <section className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
      <Button variant="bordered" onPress={onOpen}>
        Give Feedback
      </Button>
      <Modal isOpen={isOpen} shouldBlockScroll={false} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                <h1 className="text-xl">Help us improve Acme.</h1>
                <p className="text-small text-default-500 font-normal">
                  We value your feedback. If you have any ideas or suggestions to improve our
                  product, let us know.
                </p>
              </ModalHeader>
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                <Textarea
                  aria-label="Feedback"
                  minRows={8}
                  name="feedback"
                  placeholder="Ideas or suggestions to improve our product"
                  variant="faded"
                />


                <div className="mt-1 flex w-full items-center justify-end gap-2 px-1">
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
                <div className="flex w-full items-center justify-between pb-4">
                  <FeedbackRating name="rating" size="lg" />
                  <div className="flex gap-2">
                    <Button color="danger" type="button" variant="flat" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}

