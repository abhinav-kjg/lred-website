// app/components/AchievementSection.js

"use client";

import { Box, Typography, Divider } from "@mui/material";
import React from "react";

export default function AchievementSection() {
    return (
        <div className="bg-primary-red text-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Title */}
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    className="text-white"
                >
                    Some count that matters
                </Typography>

                {/* Subtitle */}
                <Typography variant="body1" className="text-gray-300 mb-8">
                    Our achievement in the journey depicted in numbers
                </Typography>

                {/* Stats Container */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-4">
                    {/* Each Stat */}
                    <StatItem
                        number="2010"
                        description="Opened Offices In Algeria And The UK"
                    />
                    <Divider
                        orientation="vertical"
                        flexItem
                        className="hidden sm:block bg-gray-500"
                    />
                    <StatItem
                        number="300+"
                        description="Consultants & Employees"
                    />
                    <Divider
                        orientation="vertical"
                        flexItem
                        className="hidden sm:block bg-gray-500"
                    />
                    <StatItem
                        number="26+"
                        description="Multinational Companies Supported"
                    />
                    <Divider
                        orientation="vertical"
                        flexItem
                        className="hidden sm:block bg-gray-500"
                    />
                    <StatItem
                        number="500+"
                        description="Visas Provided Per Year"
                    />
                </div>
            </div>
        </div>
    );
}

// Helper component for each stat item
const StatItem = ({ number, description }) => (
    <Box className="flex flex-col items-center text-center px-4">
        <Typography variant="h4" fontWeight="bold" className="text-white">
            {number}
        </Typography>
        <Typography variant="body2" className="text-white">
            {description}
        </Typography>
    </Box>
);
