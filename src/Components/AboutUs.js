// components/ServiceCard.js
import Typography from "@mui/material/Typography";
import Image from "next/image";
import image from "@/public/image 20.png";

export default function AboutUs() {
    return (
        <div className="grid grid-cols-2 justify-center my-28 text-black gap-1 mx-auto">
            <div className="flex items-center justify-center ">
                <Image
                    src={image}
                    alt="About Us"
                    width={450}
                    height={450}
                    className="z-10 ml-10"
                />
            </div>
            <div className="flex flex-col gap-3 items-start">
                <Typography
                    variant="overline"
                    className="bg-primary-red w-fit uppercase text-white rounded-2xl p-0.5 px-2 text-sm font-semibold"
                >
                    About Us
                </Typography>
                <Typography variant="h4" className=" font-semibold">
                    Our Company Overview
                </Typography>
                <Typography
                    variant="h6"
                    className="text-gray-700 text-start w-3/4"
                >
                    Established in 2010, LRED is a family-owned business that
                    specialises in supporting businesses that operate in
                    Algeria. Combining our local knowledge and business
                    experience with International best practices, we work in
                    partnership with you to identify the specific needs of your
                    business, and provide a tailored range of efficient and
                    effective support services perfectly fitted for your need.
                </Typography>
            </div>
        </div>
    );
}
