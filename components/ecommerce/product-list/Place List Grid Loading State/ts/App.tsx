"use client";


import React from "react";
import {Switch} from "@heroui/react";
import {cn} from "@heroui/react";


import PlaceListItem from "./place-list-item";
import places from "./places";


export default function Component({className}: {className?: string}) {
  const [isLoading, setIsLoading] = React.useState(true);


  return (
    <div className="my-auto flex h-full w-full max-w-7xl flex-col gap-2 p-4">
      <div className="py-4">
        <Switch isSelected={isLoading} onValueChange={setIsLoading}>
          Is loading
        </Switch>
      </div>
      <div
        className={cn(
          "grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
          className,
        )}
      >
        {places.map((place) => (
          <PlaceListItem key={place.id} isLoading={isLoading} {...place} />
        ))}
      </div>
    </div>
  );
}

