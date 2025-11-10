"use client";


import React from "react";
import {cn} from "@heroui/react";


import places from "./places";
import PlaceListItem from "./place-list-item";


export default function Component({className}) {
  return (
    <div
      className={cn(
        "my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className,
      )}
    >
      {places.map((place) => (
        <PlaceListItem key={place.id} {...place} />
      ))}
    </div>
  );
}

