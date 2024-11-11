// components/EthosSection.js
import EthosCard from "./EthosCard";
import Typography from "@mui/material/Typography";
import image_1 from "@/public/ethos 1.png";
import image_2 from "@/public/ethos 2.png";
import image_3 from "@/public/ethos 3.png";
import image_4 from "@/public/ethos 4.png";
import Image from "next/image";

export default function EthossSection() {
    const ethos = [
        {
            icon: <Image src={image_1} alt="icon" className=" w-11 h-11" />,
            title: "Honesty",
            description:
                "We operate with transparency and within the law in all that we do.",
        },
        {
            icon: <Image src={image_2} alt="icon" className=" w-11 h-11" />,
            title: "Integrity",
            description:
                "We understand and respect local traditions and customs and treat everyone with fairness and dignity.",
        },
        {
            icon: <Image src={image_3} alt="icon" className=" w-11 h-11" />,
            title: "Resposibility",
            description:
                "We act responsibly and do not gain or seek favour from undue influence or by illicit means",
        },
        {
            icon: <Image src={image_4} alt="icon" className=" w-11 h-11" />,
            title: "Reliability",
            description: "Podcasting operational change management workflow.",
        },
    ];

    return (
        <section className="grid md:grid-cols-5 bg-white text-[#737373] items-center justify-center px:2 md:pr-20 md:pl:14  py-12  ">
            <div className="col-span-2 mx-auto w-3/5 space-y-4">
                <Typography
                    variant="h3"
                    className="text-black font-bold capitalize"
                >
                    Our Ethos
                </Typography>
                <Typography variant="subtitle1" className="">
                    LRED prides on maintaining the highest standards of ethical
                    behaviour both in the way we do business and in the way we
                    do business and in the way we treat one another
                </Typography>
            </div>

            <div className="col-span-3  grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                {ethos.map((ethos, index) => (
                    <EthosCard
                        key={index}
                        icon={ethos.icon}
                        title={ethos.title}
                        description={ethos.description}
                    />
                ))}
            </div>
        </section>
    );
}
