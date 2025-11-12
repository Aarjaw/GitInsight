import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-indigo-600">GitInsight</Link>
                <div className="text-sm text-gray-600">React · Recharts · Tailwind</div>
            </div>
        </nav>
    );
}
