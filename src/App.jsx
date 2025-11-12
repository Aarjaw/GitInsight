import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="container mx-auto px-4 py-8 flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer className="text-center py-4 text-sm text-gray-500">
                Built with ❤️ · GitInsight
            </footer>
        </div>
    );
}
