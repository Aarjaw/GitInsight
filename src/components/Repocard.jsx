import React from "react";

export default function RepoCard({ repo }) {
    return (
        <div className="bg-white p-4 rounded shadow-sm flex justify-between items-start gap-4">
            <div>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 font-medium"
                >
                    {repo.name}
                </a>
                {repo.description && <p className="text-sm text-gray-600 mt-1">{repo.description}</p>}
                <div className="mt-3 text-xs text-gray-600 flex gap-3">
                    {repo.language && <div>● {repo.language}</div>}
                    <div>★ {repo.stargazers_count}</div>
                    <div>Updated: {new Date(repo.updated_at).toLocaleDateString()}</div>
                </div>
            </div>
            <div>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm border px-2 py-1 rounded"
                >
                    View
                </a>
            </div>
        </div>
    );
}
