import React from "react";
import Buna from "/buna.svg";

const Done = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  px-4">
            <div className="bg-white p-8   text-center max-w-md"> 
                <div className="mt-6">
                    <div className="flex items-center justify-center mx-auto bg-green-100 rounded-full h-20 w-20">
                        <svg
                            className="h-12 w-12 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                    Registration Completed!
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    Your account has been successfully created. Welcome aboard!
                </p>
                <div className="mt-8">
                    <a
                        href="/dashboard"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-yellow-800 hover:bg-yellow-700 "
                    >
                        Go to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Done;