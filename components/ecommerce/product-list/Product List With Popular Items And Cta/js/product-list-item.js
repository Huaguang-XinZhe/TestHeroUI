"use client";


import React from "react";
import {Button, Image} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import RatingRadioGroup from "./rating-radio-group";


const ProductListItem = React.forwardRef(
  (
    {
      name,
      price,
      rating,
      ratingCount,
      description,
      imageSrc,
      isNew,
      isPopular,
      availableColors,
      removeWrapper,
      className,
      ...props
    },
    ref,
  ) => {
    const [isStarred, setIsStarred] = React.useState(false);
    const hasColors = availableColors && availableColors?.length > 0;


    return (
      <div
        ref={ref}
        className={cn(
          "rounded-large bg-content1 shadow-medium relative flex w-64 max-w-full flex-none scroll-ml-6 flex-col gap-3 p-4",
          {
            "rounded-none bg-transparent shadow-none": removeWrapper,
          },
          className,
        )}
        {...props}
      >
        {isNew && isPopular ? (
          <span className="text-tiny text-default-400 absolute top-7 right-7 z-20 font-semibold">
            NEW
          </span>
        ) : null}
        <Button
          isIconOnly
          className={cn("absolute top-6 right-6 z-20", {
            hidden: isPopular,
          })}
          radius="full"
          size="sm"
          variant="flat"
          onPress={() => setIsStarred(!isStarred)}
        >
          <Icon
            className={cn("text-default-500", {
              "text-warning": isStarred,
            })}
            icon="solar:star-bold"
            width={16}
          />
        </Button>
        <div
          className={cn(
            "rounded-medium bg-content2 relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible",
            {
              "h-full justify-between": isPopular,
            },
          )}
        >
          <div
            className={cn("flex flex-col gap-2 px-4 pt-6", {
              hidden: !isPopular,
            })}
          >
            <h3 className="text-default-800 text-xl font-semibold tracking-tight">{name}</h3>
            <p className="text-small text-default-500">{description}</p>
          </div>
          <Image
            removeWrapper
            alt={name}
            className={cn(
              "z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110",
              {
                "flex h-56 w-56 items-center": isPopular,
                "mb-2": hasColors,
              },
            )}
            src={imageSrc}
          />


          {hasColors ? (
            <div className="absolute bottom-3">
              <h4 className="sr-only">Available colors</h4>
              <ul className="mt-auto flex items-center justify-center space-x-3 pt-6">
                {availableColors.map((color) => (
                  <li
                    key={color.name}
                    className="border-default-300 border-opacity-10 h-2 w-2 rounded-full border"
                    style={{backgroundColor: color.hex}}
                  >
                    <span className="sr-only">{color.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 px-1">
          <div
            className={cn("flex items-center justify-between", {
              hidden: isPopular,
            })}
          >
            <h3 className="text-medium text-default-700 font-medium">{name}</h3>
            <p className="text-medium text-default-500 font-medium">${price}</p>
          </div>
          {description && !isPopular ? (
            <p className="text-small text-default-500">{description}</p>
          ) : null}
          {rating !== undefined ? (
            <RatingRadioGroup
              hideStarsText
              isReadOnly
              className="gap-1"
              label={<p className="text-small text-default-400">({ratingCount})</p>}
              size="sm"
              value={`${rating}`}
            />
          ) : null}
          <div className="flex gap-2">
            {isPopular ? (
              <Button
                fullWidth
                className="bg-default-300/20 text-default-700 font-medium"
                radius="lg"
                variant="flat"
              >
                Save
              </Button>
            ) : null}
            <Button
              fullWidth
              className="font-medium"
              color="primary"
              radius="lg"
              variant={isPopular ? "flat" : "solid"}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    );
  },
);


ProductListItem.displayName = "ProductListItem";


export default ProductListItem;

