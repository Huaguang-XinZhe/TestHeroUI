"use client";


import React from "react";
import {ScrollShadow} from "@heroui/react";


import ProductListItem from "./product-list-item";
import products from "./products";


const productsWithRatingsAndDescription = products.map((product) => ({
  ...product,
  rating: Math.floor(Math.random() * 5) < 4 ? 4 : 5,
  ratingCount: Math.floor(Math.random() * 1000),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, augue eget cursus mattis.",
}));


export default function Component() {
  return (
    <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
      <ScrollShadow
        className="-mx-6 -my-5 flex w-full max-w-full snap-x justify-start gap-6 px-6 py-5"
        orientation="horizontal"
        size={20}
      >
        {productsWithRatingsAndDescription.map((product) => (
          <ProductListItem key={product.id} {...product} className="snap-start" />
        ))}
      </ScrollShadow>
    </div>
  );
}

