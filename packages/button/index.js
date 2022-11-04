import React from "react";
const Button = ({ onClick, children, isSelected }) => (
  <button
    style={{
      backgroundColor: isSelected ? "bg-black" : "bg-red-500",
      color: isSelected ? "text-white" : "text-black",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;