import React from "react";
import { useParams } from "react-router-dom";
import useGitHubAPI from "../hooks/useGitHubAPI";
import Loader from "../components/Loader";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";
import LanguageChart from "../components/LanguageChart";
import SearchBar from "../components/SearchBar";

export default function Profile() {
    const { username } = useParams();
    const { user, repos, loading, error } = useGitHubAPI(username);

    if (loading) return <Loader text="Fetching GitHub data..." />;

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                    <div className="mb-4">
                        <SearchBar initial={username} />
                    </div>

                    {error && <div className="text-red-500">{error}</div>}

                    {user && <ProfileCard user={user} />}
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Repositories</h3>
                    <RepoList repos={repos} />
                </div>
            </div>

            <aside className="space-y-4">
                <LanguageChart repos={repos} />
                <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="font-medium mb-2">Quick Stats</h3>
                    {user ? (
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Public Repos: {user.public_repos}</li>
                            <li>Followers: {user.followers}</li>
                            <li>Following: {user.following}</li>
                            <li>Location: {user.location || "N/A"}</li>
                            <li>Joined: {new Date(user.created_at).toLocaleDateString()}</li>
                        </ul>
                    ) : (
                        <div className="text-gray-500">No stats available</div>
                    )}
                </div>
            </aside>
        </div>
    );
}
