import React from "react";

export const Button = ({ children, variant = "solid", className = "", ...props }) => {
  const baseStyle = "px-4 py-2 font-medium rounded transition-colors duration-200";
  const styles = {
    solid: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
