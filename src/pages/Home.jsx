import React from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold mb-2">GitInsight</h1>
                <p className="text-gray-600 mb-6">
                    Search any GitHub username to inspect profile stats and repositories.
                </p>

                <SearchBar />
            </div>

            <div className="mt-6 text-sm text-gray-500">
                Tip: try <strong>torvalds</strong>, <strong>gaearon</strong>, or your own GitHub username.
            </div>
        </div>
    );
}
