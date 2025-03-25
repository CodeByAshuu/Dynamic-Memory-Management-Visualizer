import React from "react";

export function Card({ children, className }) {
    return <div className={`border p-4 rounded-lg shadow-lg bg-white ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
}
