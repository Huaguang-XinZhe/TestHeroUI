"use client";


import React from "react";
import {Link} from "@heroui/react";
import {Icon} from "@iconify/react";


import ProductListItem from "./product-list-item";
import products from "./products";


const popularProducts = products.slice(0, 4).map((product, index) => ({
  ...product,
  isNew: index % 2 === 0,
  isPopular: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, augue eget cursus mattis.",
}));


export default function Component() {
  return (
    <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
      <div className="flex w-full items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Popular</h2>
        <Link className="text-primary-400" href="#">
          <span className="font-medium">See all</span>
          <Icon className="ml-1 [&>path]:stroke-2" icon="solar:arrow-right-linear" width={16} />
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {popularProducts.map((product) => (
          <ProductListItem key={product.id} {...product} className="w-full snap-start" />
        ))}
      </div>
    </div>
  );
}

