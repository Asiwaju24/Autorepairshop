import React from "react";

export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 ${className}`}>
      {children}
    </span>
  );
}
