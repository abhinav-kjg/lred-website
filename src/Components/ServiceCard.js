// components/ServiceCard.js
import Typography from "@mui/material/Typography";
import Image from "next/image";
import pattern from "@/public/Pattern.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ index, image, title, description }) {
    const isImageFirst = index % 2 !== 0;

    return (
        <div
            className={`flex ${isImageFirst ? "flex-row-reverse" : "flex-row"} justify-between items-center gap-64 `}
        >
            <div className="text-start flex flex-col gap-3">
                <div className="flex flex-col gap-7 items-start mr-24">
                    <Typography
                        variant="h4"
                        className="font-semibold text-3xl text-primary-red "
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        className="text-gray-700 text-start w-96"
                    >
                        {description}
                    </Typography>
                </div>
                <Link
                    href="/services"
                    className="flex items-center gap-2 text-[#4E6FAF] font-semibold"
                >
                    Learn More <FaArrowRight />
                </Link>
            </div>
            <div className="relative flex items-center justify-center ">
                <Image
                    src={image}
                    alt="About Us"
                    width={450}
                    height={450}
                    className="z-10 ml-10"
                />
                <div className="absolute -left-0 -bottom-9 z-0">
                    <Image
                        src={pattern}
                        alt="Pattern"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
}
