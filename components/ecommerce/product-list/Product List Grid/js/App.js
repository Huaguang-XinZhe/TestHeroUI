import React from "react";
import {cn} from "@heroui/react";


import ProductsGrid from "./products-grid";


export default function Component({className}) {
  return (
    <div className={cn("my-auto flex w-full max-w-7xl flex-col items-start gap-2", className)}>
      <ProductsGrid />
    </div>
  );
}

