import React from "react";

export default function Loader({ text = "Loading..." }) {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
                <div className="mt-3 text-gray-600">{text}</div>
            </div>
        </div>
    );
}
