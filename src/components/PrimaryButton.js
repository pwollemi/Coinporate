import React from "react";

function PrimaryButton({ className = "", children, ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}

export default PrimaryButton;
