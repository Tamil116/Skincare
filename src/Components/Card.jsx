import React from "react";

export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-lg border shadow-md p-4 bg-white dark:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
