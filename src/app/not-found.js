"use client";
import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation"; // Using Next.js 14's App Router

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        console.log("Go Home");

        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-2xl text-gray-700">Coming Soon...</p>
                <Button
                    variant="contained"
                    color="primary"
                    className="mt-6"
                    onClick={handleGoHome}
                >
                    Go to Home
                </Button>
            </div>
        </div>
    );
}
