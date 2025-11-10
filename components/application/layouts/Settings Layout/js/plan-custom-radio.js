import React from "react";
import {useRadio, VisuallyHidden} from "@heroui/react";
import {cn} from "@heroui/react";


export const PlanCustomRadio = (props) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getControlProps,
  } = useRadio(props);


  const wrapperProps = getWrapperProps();


  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group px-4 py-4",
        "max-w-[300px] cursor-pointer gap-4 rounded-lg border-2 border-transparent",
        "bg-default-100 data-[selected=true]:border-default-foreground flex-1",
      )}
    >
      {/*header*/}
      <section className={"hover:bg-content2 flex flex-row-reverse justify-between"}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span
          {...getWrapperProps()}
          className={cn(
            wrapperProps["className"],
            "border-default border-2",
            "group-data-[selected=true]:border-default-foreground",
          )}
        >
          <span
            {...getControlProps()}
            className={cn(
              "bg-default-foreground text-primary-foreground transition-transform-opacity z-10 h-2 w-2 origin-center scale-0 rounded-full opacity-0 group-data-[selected=true]:scale-100 group-data-[selected=true]:opacity-100 motion-reduce:transition-none",
            )}
          />
        </span>
        <div>{description && <span {...getLabelProps()}>{description}</span>}</div>
      </section>
      {/*  content*/}
      {children && <div>{children}</div>}
    </Component>
  );
};

