"use client";


import React from "react";
import {Avatar, Badge, Button, Link, Tooltip} from "@heroui/react";
import {useClipboard} from "@heroui/use-clipboard";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";


const MessageCard = React.forwardRef(
  (
    {
      avatar,
      message,
      showFeedback,
      attempts = 1,
      currentAttempt = 1,
      status,
      onMessageCopy,
      onAttemptChange,
      onFeedback,
      onAttemptFeedback,
      className,
      messageClassName,
      ...props
    },
    ref,
  ) => {
    const [feedback, setFeedback] = React.useState();
    const [attemptFeedback, setAttemptFeedback] = React.useState();


    const messageRef = React.useRef(null);


    const {copied, copy} = useClipboard();


    const failedMessageClassName =
      status === "failed" ? "bg-danger-100/50 border border-danger-100 text-foreground" : "";
    const failedMessage = (
      <p>
        Something went wrong, if the issue persists please contact us through our help center
        at&nbsp;
        <Link href="mailto:support@acmeai.com" size="sm">
          support@acmeai.com
        </Link>
      </p>
    );


    const hasFailed = status === "failed";


    const handleCopy = React.useCallback(() => {
      let stringValue = "";


      if (typeof message === "string") {
        stringValue = message;
      } else if (Array.isArray(message)) {
        message.forEach((child) => {
          // @ts-ignore
          const childString =
            typeof child === "string" ? child : child?.props?.children?.toString();


          if (childString) {
            stringValue += childString + "\n";
          }
        });
      }


      const valueToCopy = stringValue || messageRef.current?.textContent || "";


      copy(valueToCopy);


      onMessageCopy?.(valueToCopy);
    }, [copy, message, onMessageCopy]);


    const handleFeedback = React.useCallback(
      (liked) => {
        setFeedback(liked ? "like" : "dislike");


        onFeedback?.(liked ? "like" : "dislike");
      },
      [onFeedback],
    );


    const handleAttemptFeedback = React.useCallback(
      (feedback) => {
        setAttemptFeedback(feedback);


        onAttemptFeedback?.(feedback);
      },
      [onAttemptFeedback],
    );


    return (
      <div {...props} ref={ref} className={cn("flex gap-3", className)}>
        <div className="relative flex-none">
          <Badge
            isOneChar
            color="danger"
            content={<Icon className="text-background" icon="gravity-ui:circle-exclamation-fill" />}
            isInvisible={!hasFailed}
            placement="bottom-right"
            shape="circle"
          >
            <Avatar src={avatar} />
          </Badge>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div
            className={cn(
              "rounded-medium bg-content2 text-default-600 relative w-full px-4 py-3",
              failedMessageClassName,
              messageClassName,
            )}
          >
            <div ref={messageRef} className={"text-small pr-20"}>
              {hasFailed ? failedMessage : message}
            </div>
            {showFeedback && !hasFailed && (
              <div className="bg-content2 shadow-small absolute top-2 right-2 flex rounded-full">
                <Button isIconOnly radius="full" size="sm" variant="light" onPress={handleCopy}>
                  {copied ? (
                    <Icon className="text-default-600 text-lg" icon="gravity-ui:check" />
                  ) : (
                    <Icon className="text-default-600 text-lg" icon="gravity-ui:copy" />
                  )}
                </Button>
                <Button
                  isIconOnly
                  radius="full"
                  size="sm"
                  variant="light"
                  onPress={() => handleFeedback(true)}
                >
                  {feedback === "like" ? (
                    <Icon className="text-default-600 text-lg" icon="gravity-ui:thumbs-up-fill" />
                  ) : (
                    <Icon className="text-default-600 text-lg" icon="gravity-ui:thumbs-up" />
                  )}
                </Button>
                <Button
                  isIconOnly
                  radius="full"
                  size="sm"
                  variant="light"
                  onPress={() => handleFeedback(false)}
                >
                  {feedback === "dislike" ? (
                    <Icon className="text-default-600 text-lg" icon="gravity-ui:thumbs-down-fill" />
                  ) : (
                    <Icon className="text-default-600 text-lg" icon="gravity-ui:thumbs-down" />
                  )}
                </Button>
              </div>
            )}


            {attempts > 1 && !hasFailed && (
              <div className="flex w-full items-center justify-end">
                <button
                  onClick={() => onAttemptChange?.(currentAttempt > 1 ? currentAttempt - 1 : 1)}
                >
                  <Icon
                    className="text-default-400 hover:text-default-500 cursor-pointer"
                    icon="gravity-ui:circle-arrow-left"
                  />
                </button>
                <button
                  onClick={() =>
                    onAttemptChange?.(currentAttempt < attempts ? currentAttempt + 1 : attempts)
                  }
                >
                  <Icon
                    className="text-default-400 hover:text-default-500 cursor-pointer"
                    icon="gravity-ui:circle-arrow-right"
                  />
                </button>
                <p className="text-tiny text-default-500 px-1 font-medium">
                  {currentAttempt}/{attempts}
                </p>
              </div>
            )}
          </div>
          {showFeedback && attempts > 1 && (
            <div className="rounded-medium border-small border-default-100 shadow-small flex items-center justify-between px-4 py-3">
              <p className="text-small text-default-600">Was this response better or worse?</p>
              <div className="flex gap-1">
                <Tooltip content="Better">
                  <Button
                    isIconOnly
                    radius="full"
                    size="sm"
                    variant="light"
                    onPress={() => handleAttemptFeedback("like")}
                  >
                    {attemptFeedback === "like" ? (
                      <Icon className="text-primary text-lg" icon="gravity-ui:thumbs-up-fill" />
                    ) : (
                      <Icon className="text-default-600 text-lg" icon="gravity-ui:thumbs-up" />
                    )}
                  </Button>
                </Tooltip>
                <Tooltip content="Worse">
                  <Button
                    isIconOnly
                    radius="full"
                    size="sm"
                    variant="light"
                    onPress={() => handleAttemptFeedback("dislike")}
                  >
                    {attemptFeedback === "dislike" ? (
                      <Icon
                        className="text-default-600 text-lg"
                        icon="gravity-ui:thumbs-down-fill"
                      />
                    ) : (
                      <Icon className="text-default-600 text-lg" icon="gravity-ui:thumbs-down" />
                    )}
                  </Button>
                </Tooltip>
                <Tooltip content="Same">
                  <Button
                    isIconOnly
                    radius="full"
                    size="sm"
                    variant="light"
                    onPress={() => handleAttemptFeedback("same")}
                  >
                    {attemptFeedback === "same" ? (
                      <Icon className="text-danger text-lg" icon="gravity-ui:face-sad" />
                    ) : (
                      <Icon className="text-default-600 text-lg" icon="gravity-ui:face-sad" />
                    )}
                  </Button>
                </Tooltip>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
);


export default MessageCard;


MessageCard.displayName = "MessageCard";

