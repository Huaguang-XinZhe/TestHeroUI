"use client";


import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Image,
  Link,
  RadioGroup,
  ScrollShadow,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


import ColorRadioItem from "./color-radio-item";
import RatingRadioGroup from "./rating-radio-group";
import TagGroupRadioItem from "./tag-group-radio-item";


export type ProductViewItemColor = {
  name: string;
  hex: string;
};


export type ProductViewItem = {
  id: string;
  name: string;
  description?: string;
  images: string[];
  price: number;
  rating?: number;
  ratingCount?: number;
  sizes?: string[];
  isPopular?: boolean;
  details?: {
    title: string;
    items: string[];
  }[];
  availableColors?: ProductViewItemColor[];
};


export type ProductViewInfoProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
} & ProductViewItem;


const ProductViewInfo = React.forwardRef<HTMLDivElement, ProductViewInfoProps>(
  (
    {
      name,
      images,
      price,
      sizes,
      details,
      description,
      availableColors,
      rating,
      ratingCount,
      isPopular,
      className,
      ...props
    },
    ref,
  ) => {
    const [isStarred, setIsStarred] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(images[0]);


    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8",
          className,
        )}
        {...props}
      >
        {/* Product Gallery */}
        <div className="relative h-full w-full flex-none">
          {isPopular && (
            <Chip
              className="bg-background/60 text-foreground/90 shadow-medium dark:bg-default-100/50 absolute top-3 left-3 z-20 h-10 gap-1 pr-2 pl-3 backdrop-blur-md backdrop-saturate-150"
              size="lg"
              startContent={<Icon icon="solar:star-bold" />}
            >
              Popular
            </Chip>
          )}
          {/* Main Image */}
          <Image alt={name} className="h-full w-full" radius="lg" src={selectedImage} />
          {/* Image Gallery */}
          <ScrollShadow
            className="-mx-2 mt-4 -mb-4 flex w-full max-w-full gap-4 px-2 pt-2 pb-4"
            orientation="horizontal"
          >
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                className="rounded-medium ring-offset-background data-[selected=true]:ring-focus relative h-24 w-24 flex-none cursor-pointer items-center justify-center transition-shadow data-[selected=true]:ring-2 data-[selected=true]:ring-offset-2 data-[selected=true]:outline-hidden"
                data-selected={image === selectedImage}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  removeWrapper
                  alt={name}
                  classNames={{
                    img: "h-full w-full",
                  }}
                  radius="lg"
                  src={image}
                />
              </button>
            ))}
          </ScrollShadow>
        </div>


        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
          <h2 className="sr-only">Product information</h2>
          <div className="my-2 flex items-center gap-2">
            <RatingRadioGroup hideStarsText size="sm" value={`${rating}`} />
            <p className="text-small text-default-400">
              {ratingCount} {ratingCount === 1 ? "review" : "reviews"}
            </p>
          </div>
          <p className="text-xl font-medium tracking-tight">${price}</p>
          <div className="mt-4">
            <p className="sr-only">Product description</p>
            <p className="text-medium text-default-500 line-clamp-3">{description}</p>
          </div>
          <RadioGroup
            aria-label="Color"
            classNames={{
              base: "ml-1 mt-6",
              wrapper: "gap-2",
            }}
            defaultValue={availableColors?.at(0)?.hex}
            orientation="horizontal"
          >
            {availableColors?.map(({name, hex}) => (
              <ColorRadioItem key={name} color={hex} tooltip={name} value={hex} />
            ))}
          </RadioGroup>
          <div className="mt-6 flex flex-col gap-1">
            <div className="text-default-700 mb-4 flex items-center gap-2">
              <Icon icon="carbon:delivery" width={24} />
              <p className="text-small font-medium">Free shipping and 30 days return</p>
            </div>
            <RadioGroup
              aria-label="Select size"
              className="gap-1"
              defaultValue="39"
              orientation="horizontal"
            >
              {sizes?.map((size) => (
                <TagGroupRadioItem key={size} size="lg" value={size}>
                  {size}
                </TagGroupRadioItem>
              ))}
            </RadioGroup>
            <Link isExternal className="text-default-400 my-2" href="#" size="sm">
              See guide
              <Icon className="[&>path]:stroke-[2px]" icon="solar:arrow-right-up-linear" />
            </Link>
          </div>
          <Accordion
            className="-mx-1 mt-2"
            itemClasses={{
              title: "text-default-400",
              content: "pt-0 pb-6 text-base text-default-500",
            }}
            items={details}
            selectionMode="multiple"
          >
            {details
              ? details.map(({title, items}) => (
                  <AccordionItem key={title} title={title}>
                    <ul className="list-inside list-disc">
                      {items.map((item) => (
                        <li key={item} className="text-default-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))
              : []}
          </Accordion>
          <div className="mt-2 flex gap-2">
            <Button
              fullWidth
              className="text-medium font-medium"
              color="primary"
              size="lg"
              startContent={<Icon icon="solar:cart-large-2-bold" width={24} />}
            >
              Add to cart
            </Button>
            <Button
              isIconOnly
              className="text-default-600"
              size="lg"
              variant="flat"
              onPress={() => setIsStarred(!isStarred)}
            >
              {isStarred ? (
                <Icon icon="solar:heart-bold" width={24} />
              ) : (
                <Icon icon="solar:heart-linear" width={24} />
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);


ProductViewInfo.displayName = "ProductViewInfo";


export default ProductViewInfo;

