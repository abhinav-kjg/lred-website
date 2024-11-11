"use client";
import { Card, Box, Typography } from "@mui/material";
import CustomizedProgressBars from "@/Components/CircularProgressBar";

export default function ExperienceCard() {
    return (
        <Card className="absolute p-4 shadow-lg flex gap-3 items-center rounded-2xl bg-white">
            {/* Circular Icon */}
            <CustomizedProgressBars />
            {/* Text */}
            <Box>
                <Typography variant="h6" component="p" fontWeight="bold">
                    Market Experiences
                </Typography>
            </Box>
        </Card>
    );
}
