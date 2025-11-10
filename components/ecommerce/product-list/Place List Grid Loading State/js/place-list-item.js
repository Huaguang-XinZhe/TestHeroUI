"use client";


import React from "react";
import {Button, Image, Skeleton} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


const PlaceListItem = React.forwardRef(
  (
    {name, price, rating, isLoading, description, imageSrc, removeWrapper, className, ...props},
    ref,
  ) => {
    const [isLiked, setIsLiked] = React.useState(false);


    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full flex-none flex-col gap-3",
          {
            "bg-background rounded-none shadow-none": removeWrapper,
          },
          className,
        )}
        {...props}
      >
        <Button
          isIconOnly
          className="bg-background/60 dark:bg-default-100/50 absolute top-3 right-3 z-20 backdrop-blur-md backdrop-saturate-150"
          radius="full"
          size="sm"
          variant="flat"
          onPress={() => setIsLiked(!isLiked)}
        >
          <Icon
            className={cn("text-default-900/50", {
              "text-danger-400": isLiked,
            })}
            icon="solar:heart-bold"
            width={16}
          />
        </Button>
        <Image
          isBlurred
          isZoomed
          alt={name}
          className="aspect-square w-full hover:scale-110"
          isLoading={isLoading}
          src={imageSrc}
        />


        <div className="mt-1 flex flex-col gap-2 px-1">
          {isLoading ? (
            <div className="my-1 flex flex-col gap-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="bg-default-200 h-3 w-3/5 rounded-lg" />
              </Skeleton>
              <Skeleton className="mt-3 w-4/5 rounded-lg">
                <div className="bg-default-200 h-3 w-4/5 rounded-lg" />
              </Skeleton>
              <Skeleton className="mt-4 w-2/5 rounded-lg">
                <div className="bg-default-300 h-3 w-2/5 rounded-lg" />
              </Skeleton>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-1">
                <h3 className="text-small text-default-700 font-medium">{name}</h3>
                {rating !== undefined ? (
                  <div className="flex items-center gap-1">
                    <Icon className="text-default-500" icon="solar:star-bold" width={16} />
                    <span className="text-small text-default-500">{rating}</span>
                  </div>
                ) : null}
              </div>
              {description ? <p className="text-small text-default-500">{description}</p> : null}
              <p className="text-small text-default-500 font-medium">${price}</p>
            </>
          )}
        </div>
      </div>
    );
  },
);


PlaceListItem.displayName = "PlaceListItem";


export default PlaceListItem;

