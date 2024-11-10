"use client";

import Image from "next/image"; // Import Image component
import { Button } from "@mui/material"; // Import material-ui components
import bannerImage from "@/public/banner2.jpg"; // Import banner image
import { IoIosSquare } from "react-icons/io"; // Import react-icons

export default function BannerPage() {
    return (
        <div className="relative w-full h-[30rem] border-x-0">
            {/* Banner Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src={bannerImage}
                    alt="Consultancy Team"
                    layout="fill" // Makes the image fill the container
                    objectFit="cover" // Ensures the image covers the entire area
                    className="z-0 blur-sm " // Ensures image stays behind the text
                />
            </div>

            {/* Text Content */}
            <div className="relative w-5/12 z-10 flex flex-col items-start pt-16 h-full bg-black bg-opacity-80 px-32">
                {/* Left Section */}
                <div className="text-white space-y-3">
                    <p className="text-sm flex gap-1 items-center">
                        <IoIosSquare className="text-secondary-red" />
                        Welcome to LRED
                    </p>
                    <h1 className="text-5xl font-bold leading-tight">
                        Technical & Consultancy Services
                    </h1>
                    <p className="text-secondary-text-gray">
                        We have a long history of working in{" "}
                        <span className="uppercase">Algeria</span>
                    </p>
                    <Button className="text-white py-3 px-6 text-base my-20 capitalize bg-primary-red hover:bg-[#702525] hover:border-[#702525] border-none">
                        Get Consulting
                    </Button>
                </div>
            </div>
        </div>
    );
}
