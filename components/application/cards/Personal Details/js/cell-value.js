import React from "react";


const CellValue = React.forwardRef(({label, value, children, ...props}, ref) => (
  <div ref={ref} className="flex items-center justify-between py-2" {...props}>
    <div className="text-small text-default-500">{label}</div>
    <div className="text-small font-medium">{value || children}</div>
  </div>
));


CellValue.displayName = "CellValue";


export default CellValue;

