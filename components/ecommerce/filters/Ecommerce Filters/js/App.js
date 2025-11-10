import React from "react";


import FiltersWrapper from "./filters-wrapper";
import ecommerceItems from "./ecommerce-items";


export default function Component() {
  return <FiltersWrapper items={ecommerceItems} showActions={false} title="Shoes" />;
}

