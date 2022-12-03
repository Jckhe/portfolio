import React from "react";

export const Contact = React.forwardRef((_props, ref) => {
  return (
    <div className="contactContainer" ref={ref as React.RefObject<HTMLDivElement>}>
      Contacts
    </div>
  )
})

