"use client";


import React from "react";
import {cn} from "@heroui/react";


import ProductListItem from "./product-list-item";


import products from "./products";


const ProductsGrid = React.forwardRef(({itemClassName, className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
      {...props}
    >
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          removeWrapper
          {...product}
          className={cn("w-full snap-start", itemClassName)}
        />
      ))}
    </div>
  );
});


ProductsGrid.displayName = "ProductsGrid";


export default ProductsGrid;

