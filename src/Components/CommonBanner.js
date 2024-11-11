"use client";

import Image from "next/image"; // Import Image component
import { Button, Breadcrumbs, Link } from "@mui/material"; // Import material-ui components
import { IoIosSquare } from "react-icons/io"; // Import react-icons
import PropTypes from "prop-types";

export default function BannerPage({ service }) {
    return (
        <div className="relative w-full h-[25rem] border-x-0">
            {/* Banner Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src={service.image}
                    alt="Consultancy Team"
                    layout="fill" // Makes the image fill the container
                    objectFit="cover" // Ensures the image covers the entire area
                    className="z-0 blur-sm " // Ensures image stays behind the text
                />
            </div>

            {/* Text Content */}
            <div className="relative w-5/12 z-10 flex flex-col items-start gap-16 pt-5 h-full bg-black bg-opacity-80 px-32">
                {/* Breadcrumb */}
                <Breadcrumbs
                    aria-label="breadcrumb"
                    className="text-white text-sm"
                    separator=">"
                >
                    {service.breadCrumbList.map((breadcrumb, index) => (
                        <Link
                            key={index}
                            underline="hover"
                            color="inherit"
                            href={breadcrumb.href}
                        >
                            {breadcrumb.label}
                        </Link>
                    ))}
                </Breadcrumbs>

                {/* Left Section */}
                <div className="text-white space-y-3">
                    {/* Heading */}
                    <p className="text-sm flex gap-1 items-center">
                        <IoIosSquare className="text-secondary-red" />
                        {service?.heading}
                    </p>
                    {/* Title */}
                    <h1 className="text-5xl font-bold leading-tight uppercase">
                        {service?.title}
                    </h1>
                    {/* Description */}
                    <p className="text-secondary-text-gray">
                        {service?.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Define PropTypes for type checking
BannerPage.propTypes = {
    service: PropTypes.shape({
        image: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        breadcrumbs: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};
