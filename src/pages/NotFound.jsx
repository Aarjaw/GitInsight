import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">404 — Not Found</h2>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Go to Home</Link>
        </div>
    );
}
