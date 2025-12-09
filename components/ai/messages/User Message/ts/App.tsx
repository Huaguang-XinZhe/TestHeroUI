import React from "react";


import MessageCard from "./message-card";


import {userMessages} from "./messages";


export default function Component() {
  return (
    <MessageCard
      avatar="https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
      message={userMessages[0]}
    />
  );
}

