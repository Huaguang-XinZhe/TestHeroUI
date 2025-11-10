import React from "react";


import MessageCard from "./message-card";


import {userMessages, assistantMessages} from "./messages";


export default function Component() {
  const messages: Array<{
    role: "user" | "assistant";
    message: React.ReactNode;
    status?: "success" | "failed";
  }> = [
    {
      role: "user",
      message: userMessages[0],
      status: "success",
    },
    {
      role: "assistant",
      message: assistantMessages[1],
      status: "success",
    },
    {
      role: "user",
      message: userMessages[1],
      status: "success",
    },
    {
      role: "assistant",
      message: assistantMessages[0],
      status: "failed",
    },
  ];


  return (
    <div className="flex flex-col gap-4 px-1">
      {messages.map(({role, message, status}, index) => (
        <MessageCard
          key={index}
          attempts={index === 1 ? 2 : 1}
          avatar={
            role === "assistant"
              ? "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
              : "https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
          }
          currentAttempt={index === 1 ? 2 : 1}
          message={message}
          messageClassName={role === "user" ? "bg-content3 text-content3-foreground" : ""}
          showFeedback={role === "assistant"}
          status={status}
        />
      ))}
    </div>
  );
}

