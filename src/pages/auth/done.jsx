import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

const Done = () => {
    return (
        <>
            <header className="flex h-16   items-center gap-2 px-4">
                <ModeToggle />
            </header>
            <div className="flex flex-col items-center justify-center min-h-screen  px-4">
                <div className="bg-white dark:bg-transparent p-8   text-center max-w-md">
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
                    <h2 className="mt-6 text-2xl font-bold  text-gray-900 dark:text-gray-100">
                        Registration Completed!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
                        Your account has been successfully created. Welcome aboard!
                    </p>
                    <div className="mt-8">
                        <a
                            href="/user/dashboard"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm bg-yellow-800 dark:bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go to Your Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Done;