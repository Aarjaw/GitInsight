import React from "react";

export default function ProfileCard({ user }) {
    if (!user) return null;

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm flex gap-6 items-center">
            <img src={user.avatar_url} alt="avatar" className="w-28 h-28 rounded-full" />
            <div>
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold">{user.name || user.login}</h2>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm px-2 py-1 border rounded text-indigo-600"
                    >
                        View on GitHub
                    </a>
                </div>
                {user.bio && <p className="text-gray-600 mt-2">{user.bio}</p>}
                <div className="mt-3 flex gap-4 text-sm text-gray-700">
                    <div>Repos: <span className="font-medium">{user.public_repos}</span></div>
                    <div>Followers: <span className="font-medium">{user.followers}</span></div>
                    <div>Following: <span className="font-medium">{user.following}</span></div>
                </div>
            </div>
        </div>
    );
}
