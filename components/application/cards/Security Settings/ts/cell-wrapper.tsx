import React from "react";
import {cn} from "@heroui/react";


const CellWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({children, className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-medium bg-content2 flex items-center justify-between gap-2 p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);


CellWrapper.displayName = "CellWrapper";


export default CellWrapper;

