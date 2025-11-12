import React, { useState, useMemo } from "react";
import RepoCard from "./RepoCard";

export default function RepoList({ repos }) {
    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState("stars");
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        let list = [...repos];
        if (q) {
            list = list.filter(r => r.name.toLowerCase().includes(q.toLowerCase()));
        }
        if (sort === "stars") list.sort((a, b) => b.stargazers_count - a.stargazers_count);
        else if (sort === "updated") list.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        else list.sort((a, b) => a.name.localeCompare(b.name));
        return list;
    }, [repos, sort, q]);

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
                <div className="flex gap-2">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Filter repos by name..."
                        className="px-3 py-2 border rounded-md"
                    />
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 border rounded-md">
                        <option value="stars">Sort by Stars</option>
                        <option value="updated">Sort by Updated</option>
                        <option value="name">Sort by Name</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Show:</label>
                    <select value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="px-2 py-1 border rounded-md">
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-4">
                {filtered.slice(0, limit).map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>

            {filtered.length === 0 && <div className="text-center text-gray-500">No repositories found.</div>}
        </div>
    );
}
