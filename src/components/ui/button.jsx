import React from "react";

export function Button({ children, className, ...props }) {
    return (
    <button
        className={`bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 ${className}`}
        {...props}
    >
        {children}
    </button>
    );
}
