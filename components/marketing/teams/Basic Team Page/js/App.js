"use client";


import {Button, Spacer} from "@heroui/react";


import TeamMemberCard from "./team-member-card";


const teamMembers = [
  {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    role: "CEO",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@john-doe",
      linkedin: "john-doe",
      github: "@john-doe",
    },
  },
  {
    name: "Jane Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
    role: "CTO",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@jane-doe",
      linkedin: "jane-doe",
      github: "@jane-doe",
    },
  },
  {
    name: "Robert Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29066708c",
    role: "Principal Designer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@robert-doe",
      linkedin: "robert-doe",
      github: "@robert-doe",
    },
  },
  {
    name: "Mark Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
    role: "Principal Engineer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@mark-doe",
      linkedin: "mark-doe",
      github: "@mark-doe",
    },
  },
  {
    name: "Frank Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29526708c",
    role: "Frontend Engineer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@frank-doe",
      linkedin: "frank-doe",
      github: "@frank-doe",
    },
  },
  {
    name: "Zoe Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29926708c",
    role: "Backend Engineer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@zoe-doe",
      linkedin: "zoe-doe",
      github: "@zoe-doe",
    },
  },
  {
    name: "Bob Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29b26708c",
    role: "Product Manager",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@bob-doe",
      linkedin: "bob-doe",
      github: "@bob-doe",
    },
  },
  {
    name: "Francis Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258b14e29326708c",
    role: "Product Designer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@francis-doe",
      linkedin: "francis-doe",
      github: "@francis-doe",
    },
  },
  {
    name: "Milan Doe",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29326708c",
    role: "Customer Support",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    social: {
      twitter: "@milan-doe",
      linkedin: "milan-doe",
      github: "@milan-doe",
    },
  },
];


export default function Component() {
  return (
    <section className="flex max-w-4xl flex-col items-center py-24">
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="text-secondary font-medium">We&apos;re hiring!</h2>
        <h1 className="text-4xl font-medium tracking-tight">Meet our team.</h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Our philosophy is to build a great team and then empower them to do great things.
        </h2>
        <Spacer y={4} />
        <div className="flex w-full justify-center gap-2">
          <Button variant="ghost">About us</Button>
          <Button color="secondary">Open positions</Button>
        </div>
      </div>
      <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

