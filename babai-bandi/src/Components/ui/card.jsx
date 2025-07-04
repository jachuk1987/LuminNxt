// src/components/ui/card.jsx
import React from "react";
import classNames from "classnames";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={classNames("mb-4 font-semibold text-lg", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={classNames("text-gray-700", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={classNames("mt-4 flex justify-end", className)} {...props}>
      {children}
    </div>
  );
}
