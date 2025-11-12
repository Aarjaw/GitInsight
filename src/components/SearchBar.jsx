import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ initial = "" }) {
    const [q, setQ] = useState(initial);
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        const trimmed = q.trim();
        if (!trimmed) return;
        navigate(`/profile/${trimmed}`);
    }

    return (
        <form onSubmit={onSubmit} className="flex gap-2">
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                type="text"
                placeholder="Search GitHub username (e.g. torvalds)"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
                Search
            </button>
        </form>
    );
}
