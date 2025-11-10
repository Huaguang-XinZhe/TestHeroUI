import React from "react";


import PriceSlider from "./price-slider";


export default function Component(props) {
  return (
    <div className="my-auto flex flex-col gap-2">
      <h3 className="text-medium text-default-600 leading-8 font-medium">Price Range</h3>
      <PriceSlider
        aria-label="Pricing Filter"
        range={{
          min: 0,
          defaultValue: [100, 500],
          max: 2000,
          step: 1,
        }}
        {...props}
      />
    </div>
  );
}

