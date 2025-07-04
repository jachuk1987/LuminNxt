// src/components/ui/button.jsx
import React from "react";
import classNames from "classnames";

const Button = ({ children, className, variant = "default", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      className={classNames(baseStyles, variants[variant], className, "px-4 py-2")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;