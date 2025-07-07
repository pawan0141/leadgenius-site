"use client";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-sky-700 text-white hover:bg-sky-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
