import React from "react";
import {Icon} from "@iconify/react";


import FeatureCard from "./feature-card";


const featuresCategories = [
  {
    key: "examples",
    title: "Examples",
    icon: <Icon icon="solar:mask-happly-linear" width={40} />,
    descriptions: [
      "Explain quantum computing in simple terms",
      "Got any creative ideas for a 10 year old' birthday?",
      "How do I make an HTTP request in Javascript?",
    ],
  },
  {
    key: "capabilities",
    title: "Capabilities",
    icon: <Icon icon="solar:magic-stick-3-linear" width={40} />,
    descriptions: [
      "Remembers what user said earlier in the conversation",
      "Allows user to provide follow-up corrections",
      "Trained to decline inappropriate requests",
    ],
  },
  {
    key: "limitations",
    title: "Limitations",
    icon: <Icon icon="solar:shield-warning-outline" width={40} />,
    descriptions: [
      "May occasionally generate incorrect information",
      "May occasionally produce harmful instructions or biased information.",
      "Limited knowledge of world and events after April 2023",
    ],
  },
];


export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {featuresCategories.map((category) => (
        <FeatureCard
          key={category.key}
          descriptions={category.descriptions}
          icon={category.icon}
          title={category.title}
        />
      ))}
    </div>
  );
}

