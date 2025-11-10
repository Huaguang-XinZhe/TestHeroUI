"use client";


import React from "react";
import {Icon} from "@iconify/react";
import {
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  type ModalProps,
  Button,
} from "@heroui/react";


import RatingRadioGroup from "./rating-radio-group";


const ModalReview = React.forwardRef<HTMLDivElement, Omit<ModalProps, "children">>(
  ({isOpen, onClose, onOpenChange, ...props}, ref) => (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...props} ref={ref}>
      <ModalContent>
        <ModalHeader className="flex-col pt-8">
          <h1 className="text-large font-semibold">Write a review</h1>
          <p className="text-small text-default-400 font-normal">
            Share your experience with this product
          </p>
        </ModalHeader>
        <ModalBody className="pb-8">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());


              console.log(data);


              onClose?.();
            }}
          >
            <Input
              label="Name"
              placeholder="Enter your name"
              startContent={<Icon icon="solar:user-bold" />}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              startContent={<Icon icon="solar:letter-bold" />}
            />
            <Divider />
            <RatingRadioGroup
              hideStarsText
              className="flex-col-reverse items-start"
              color="warning"
              label={<span className="text-small">Rating</span>}
            />
            <Input
              label="Title"
              placeholder="Title of your review"
              startContent={<Icon icon="solar:pen-bold" />}
            />
            <Textarea
              disableAutosize
              classNames={{
                input: "h-32 resize-y transition-none!",
              }}
              label="Comment"
              placeholder="Enter your comment"
            />
            <Button color="primary" type="submit">
              Send review
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
);


ModalReview.displayName = "ModalReview";


export default ModalReview;

