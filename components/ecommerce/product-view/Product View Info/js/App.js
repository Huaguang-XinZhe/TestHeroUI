"use client";


import React from "react";
import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";


import ProductViewInfo from "./product-view-item";


const item = {
  id: "942837-003",
  name: "Nike Air Max 270",
  description:
    "The Nike Air Max 270 delivers an even more adaptive fit than before. Stretch material in the upper moves with your foot, while the tri-star outsole pattern adjusts to your every step for a ride that delivers support and flexibility where you need it.",
  images: [
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/1.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/2.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/3.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/4.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/5.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/6.jpeg",
  ],


  price: 80.97,
  rating: 4.8,
  ratingCount: 669,
  sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "48", "50"],
  isPopular: true,
  availableColors: [
    {name: "Gray", hex: "#808080"},
    {name: "White", hex: "#ffffff"},
    {name: "Black", hex: "#222222"},
  ],


  details: [
    {
      title: "Size & Fit",
      items: [
        "Fits small; we recommend ordering a half size up",
        "Mid-weight, non-stretchy fabric",
        "Designed for a mini length",
      ],
    },
    {
      title: "Shipping & Returns",
      items: [
        "Free shipping & returns",
        "Free, no-hassle returns",
        "Complimentary gift packaging",
        "Ships within 24 hours!",
      ],
    },
    {
      title: "Designer Notes",
      items: [
        "Fits small; we recommend ordering a half size up",
        "Mid-weight, non-stretchy fabric",
        "Designed for a mini length",
      ],
    },
  ],
};


export default function Component() {
  return (
    <div className="max-w-8xl h-full w-full px-2 lg:px-24">
      <nav className="my-4 py-2">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Shoes Category</BreadcrumbItem>
          <BreadcrumbItem>Training Shoes</BreadcrumbItem>
        </Breadcrumbs>
      </nav>
      <ProductViewInfo {...item} />
    </div>
  );
}

