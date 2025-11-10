"use client";


import React from "react";
import {Button, useDisclosure} from "@heroui/react";
import {Icon} from "@iconify/react";


import CardReview from "./card-review";
import reviews from "./reviews";
import ModalReview from "./modal-review";


export default function Component() {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();


  return (
    <section className="mx-auto w-full max-w-6xl px-2 md:px-6 lg:px-8">
      <header className="mb-8 flex flex-wrap justify-between gap-4 md:px-2">
        <div className="flex items-center gap-2">
          <h1 className="text-medium md:text-large font-semibold">Reviews</h1>
          <div className="flex items-center gap-1">
            <Icon className="text-warning-500" icon="solar:star-bold" width={20} />
            <span className="text-medium md:text-large font-semibold">4.4</span>
            <span className="text-small text-default-500 lg:text-medium text-right">
              (Based on {reviews.length} reviews)
            </span>
          </div>
        </div>
        <Button endContent={<Icon icon="solar:pen-linear" />} variant="bordered" onPress={onOpen}>
          Write a review
        </Button>
      </header>
      <div className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <CardReview key={index} {...review} />
        ))}
      </div>
      <ModalReview isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </section>
  );
}

