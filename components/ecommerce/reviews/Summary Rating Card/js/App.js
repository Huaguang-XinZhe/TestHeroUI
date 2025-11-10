import React from "react";


import SummaryRatingCard from "./summary-rating-card";


const ratings = [
  {
    rating: 5,
    count: 120,
  },
  {
    rating: 4,
    count: 50,
  },
  {
    rating: 3,
    count: 25,
  },
  {
    rating: 2,
    count: 33,
  },
  {
    rating: 1,
    count: 30,
  },
];


export default function Component() {
  return (
    <section className="mx-auto w-full max-w-md sm:py-32 lg:px-8 lg:py-40">
      <div className="flex flex-col gap-4">
        <SummaryRatingCard averageRating={4.4} ratings={ratings} totalRatingCount={139} />
      </div>
    </section>
  );
}

