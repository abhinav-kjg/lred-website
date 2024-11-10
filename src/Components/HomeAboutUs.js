"use client";

import Image from "next/image"; // Import Image component
import ExperienceCard from "./ExperienceCard";
import aboutImage from "@/public/image2.jpg"; // Update the path as needed
import pattern from "@/public/Pattern.png"; // Update the path as needed

export default function AboutUs() {
    return (
        <div className="grid grid-cols-2 pb-10 bg-white">
            <div className="flex flex-col items-start justify-center gap-6 px-32 py-20">
                <h2 className=" p-0.5 px-4 rounded-xl bg-primary-red text-white ">
                    About Us
                </h2>{" "}
                <div className="bg-green-300"></div>
                <p className=" text-black font-semibold text-5xl max-w-md">
                    Know More about Our Company
                </p>
                <p className=" text-black text-lg font-extralight max-w-md">
                    Established in 2010, LRED is a family-owned company that
                    specialises in supporting businesses that operate in
                    Algeria. With a reputation based on trust, transparency and
                    ability; LRED is the partner of choice for multinational
                    companies in Algeria.
                </p>
            </div>
            <div className="relative flex items-center justify-center ">
                <Image
                    src={aboutImage}
                    alt="About Us"
                    width={500}
                    height={400}
                    className="blur-sm z-10"
                />
                <div className="absolute left-16 bottom-8 z-0">
                    <Image
                        src={pattern}
                        alt="Pattern"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="absolute left-24 bottom-40 z-20">
                    <ExperienceCard />
                </div>
            </div>
        </div>
    );
}
