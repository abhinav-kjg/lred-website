// components/WhyChooseUs.js
import { Typography } from "@mui/material";
import { Card, CardContent, Avatar } from "@mui/material";
import image from "@/public/Vector.png";
import Image from "next/image";

export default function WhyChooseUs() {
    const features = [
        {
            icon: image,
            title: "Lorem Ipsum",
            description:
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
        {
            icon: image,
            title: "Lorem Ipsum",
            description:
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
        {
            icon: image,
            title: "Lorem Ipsum",
            description:
                "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
    ];

    //rgba(84, 0, 0, 0.03)
    // #54000008
    return (
        <section className="bg-[#54000008] py-16">
            <div className="text-center mb-10">
                <Typography
                    variant="overline"
                    className=" text-white bg-primary-red rounded-xl p-2 text-base py-1"
                >
                    ABOUT US
                </Typography>
                <Typography variant="h4" className="text-black font-bold mt-2">
                    Why Choose Us?
                </Typography>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
                {features.map((feature, index) => (
                    <Card key={index} className="shadow-none">
                        <CardContent className="flex flex-col items-center text-center p-6 py-10 gap-6 bg-white">
                            <div className="border bg-white p-2 rounded-xl">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    className=" w-14 h-14"
                                />
                            </div>
                            <Typography
                                variant="h6"
                                className="font-semibold text-primary-red"
                            >
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="text-gray-500 mx-6"
                            >
                                {feature.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
