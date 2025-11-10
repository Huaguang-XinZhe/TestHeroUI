import type {Frequency, Tier} from "./pricing-types";


import {FrequencyEnum, TiersEnum} from "./pricing-types";


export const frequencies: Array<Frequency> = [
  {key: FrequencyEnum.Yearly, label: "Pay Yearly", priceSuffix: "per year"},
  {key: FrequencyEnum.Quarterly, label: "Pay Quarterly", priceSuffix: "per quarter"},
];


export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free",
    price: "Free",
    href: "#",
    featured: false,
    mostPopular: false,
    description: "For starters and hobbyists that want to try out.",
    features: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
    buttonText: "Continue with Free",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Pro,
    title: "Pro",
    description: "For small teams that have less that 10 members.",
    href: "#",
    mostPopular: true,
    price: {
      yearly: "$72",
      quarterly: "$24",
    },
    featured: false,
    features: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Team,
    title: "Team",
    href: "#",
    featured: true,
    mostPopular: false,
    description: "For large teams that have more than 10 members.",
    price: {
      yearly: "$90",
      quarterly: "$120",
    },
    priceSuffix: "per user",
    features: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

