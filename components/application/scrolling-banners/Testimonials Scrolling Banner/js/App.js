"use client";


import React from "react";
import {useMediaQuery} from "usehooks-ts";


import ScrollingBanner from "./scrolling-banner";
import UserReview from "./user-review";


const testimonials = [
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "John Doe",
    role: "CEO at Ipsum",
    content:
      "Acme has helped me to scale my agency by being able to make websites in a very efficient and creative way.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    name: "Jane Smith",
    role: "Marketing Director at Lorem",
    content:
      "I used to be a Incflow user. I relied on Incflow for all my freelance projects. However, when Acme was launched, I was amazed by its smooth performance. Typically, it took me around 5 days to complete websites, but with Acme, I did it in just 2 days. @Acme is impressive! 🔥",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260250",
    name: "Alice Johnson",
    role: "Project Manager at Consectetur",
    content: "Acme's project management tools have streamlined our workflow tremendously.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260251",
    name: "Michael Brown",
    role: "Lead Developer at Adipiscing",
    content: "The development features in Acme  are top-notch and have increased our productivity.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260252",
    name: "Linda Davis",
    role: "Creative Director at Elit",
    content:
      "I love the creative freedom that Acme  offers, it's a game changer for our design team.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260253",
    name: "David Wilson",
    role: "CTO at Dolor",
    content:
      "Acme  has helped us to build a strong online presence and generate a lot of leads. Highly recommended!",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260254",
    name: "Richard Miller",
    role: "CEO at Sit",
    content:
      "Acme offers an unparalleled design experience with its seamless integration of design and development. It's user-friendly, efficient, and promotes creativity, making it an essential tool for anyone looking to quickly bring their ideas to life.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260255",
    name: "Susan Wilson",
    role: "Marketing Director at Amet",
    content:
      "The user interface of Acme  is intuitive and easy to navigate, making my job much easier.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260256",
    name: "Maria Jones",
    role: "Project Manager at Consectetur",
    content: "Acme 's project management tools have streamlined our workflow tremendously.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260257",
    name: "Paul Taylor",
    role: "Lead Developer at Adipiscing",
    content:
      "My experience with Acme has been nothing short of exceptional. It has elevated my design process, empowered collaboration, and helped me deliver outstanding results. If you're a designer looking to level up your skills and create stunning interactive designs, I highly recommend giving Acme a try.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260258",
    name: "Karen Wilson",
    role: "Creative Director at Elit",
    content:
      "I love the creative freedom that Acme  offers, it's a game changer for our design team.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260259",
    name: "Mark Davis",
    role: "CTO at Dolor",
    content:
      "Acme  has helped us to build a strong online presence and generate a lot of leads. Highly recommended!",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260260",
    name: "John Doe",
    role: "CEO at Ipsum",
    content:
      "Acme  has helped me to scale my agency by being able to make websites in a very efficient and creative way.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260261",
    name: "Jane Smith",
    role: "Marketing Director at Lorem",
    content:
      "Acme has helped me to create much more functional no-code sites for my customers due to the increased speed and freedom to create the UI.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260262",
    name: "Alice Johnson",
    role: "Project Manager at Consectetur",
    content:
      "Acme has helped me to create much more functional no-code sites for my customers due to the increased speed and freedom to create the UI.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260263",
    name: "Michael Brown",
    role: "Lead Developer at Adipiscing",
    content: "The development features in Acme  are top-notch and have increased our productivity.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260264",
    name: "Linda Davis",
    role: "Creative Director at Elit",
    content:
      "I love the creative freedom that Acme  offers, it's a game changer for our design team.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260265",
    name: "David Wilson",
    role: "CTO at Dolor",
    content:
      "Acme  has helped us to build a strong online presence and generate a lot of leads. Highly recommended!",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260266",
    name: "Richard Miller",
    role: "CEO at Sit",
    content:
      "Acme  has helped me to scale my agency by being able to make websites in a very efficient and creative way.",
  },
];


/**
 *  This example requires installing the `usehooks-ts` package:
 * `npm install usehooks-ts`
 *
 * import {useMediaQuery} from "usehooks-ts";
 */
export default function Component() {
  const testimonials1 = testimonials.slice(0, 4);
  const testimonials2 = testimonials.slice(4, 8);
  const testimonials3 = testimonials.slice(8, 12);
  const testimonials4 = testimonials.slice(12, 16);


  const isMobile = useMediaQuery("(max-width: 768px)");


  const fistColumn = React.useMemo(
    () => (isMobile ? testimonials : testimonials1),
    [isMobile, testimonials1],
  );


  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
        <ScrollingBanner isVertical duration={isMobile ? 200 : 120} shouldPauseOnHover={false}>
          {fistColumn.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
        <ScrollingBanner
          isVertical
          className="hidden sm:flex"
          duration={200}
          shouldPauseOnHover={false}
        >
          {testimonials2.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
        <ScrollingBanner
          isVertical
          className="hidden md:flex"
          duration={200}
          shouldPauseOnHover={false}
        >
          {testimonials3.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
        <ScrollingBanner
          isVertical
          className="hidden lg:flex"
          duration={200}
          shouldPauseOnHover={false}
        >
          {testimonials4.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
      </div>
    </section>
  );
}

