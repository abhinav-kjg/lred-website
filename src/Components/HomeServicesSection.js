// components/ServicesSection.js
import ServiceCard from "./HomeServiceCard";
import Typography from "@mui/material/Typography";
import image_1 from "@/public/service 1.png";
import image_2 from "@/public/service 2.png";
import image_3 from "@/public/service 3.png";
import image_4 from "@/public/service 4.png";
import Image from "next/image";

export default function ServicesSection() {
    const services = [
        {
            icon: (
                <div className="relative">
                    <Image
                        src={image_1}
                        alt="icon"
                        className="w-16 h-16 relative z-10"
                    />
                    <div className="w-9 h-9 -z-0 rounded-full absolute -left-1 bottom-0 bg-gray-300"></div>
                </div>
            ),
            title: "Visas and Work Permits",
            description:
                "We ensure that all documentation is complete and correct before personally presenting it at the embassy. Our involvement normally helps individuals to expedite the process and quickly gain the right to visit or work in Algeria in full compliance with Algerian legislation.",
        },
        {
            icon: (
                <div className="relative">
                    <Image
                        src={image_2}
                        alt="icon"
                        className="w-16 h-16 relative z-10"
                    />
                    <div className="w-10 h-10 -z-0 rounded-full absolute -left-2 -bottom-1 bg-gray-300"></div>
                </div>
            ),
            title: "In-Country Enablement",
            description:
                "Algeria is a complex environment; for businesses of all sizes looking to enter this attractive and rewarding market, there is a lack of publicly available and consistent information on employment laws, taxation, and permits required to operate legally and establish yourselves in Algeria.",
        },
        {
            icon: (
                <div className="relative">
                    <Image
                        src={image_3}
                        alt="icon"
                        className="w-16 h-16 relative z-10"
                    />
                    <div className="w-10 h-10 -z-0 rounded-full absolute -left-4 -bottom-2 bg-gray-300"></div>
                </div>
            ),
            title: "Payroll Services",
            description:
                "We can provide these services for both local and expat employees, ensuring that all personnel are paid on time and in accordance with their contractual entitlements.",
        },
        {
            icon: (
                <div className="relative">
                    <Image
                        src={image_4}
                        alt="icon"
                        className="w-16 h-16 relative z-10"
                    />
                    <div className="w-10 h-10 -z-0 rounded-full absolute -left-4 -bottom-1 bg-gray-300"></div>
                </div>
            ),
            title: "Transport & Equipment",
            description:
                "Whether you are an established business, or just starting out, we provide a range of transportation services to help you operate effectively in Algeria.",
        },
    ];

    return (
        <section className="px-4 py-12 max-w-5xl mx-auto text-center text-black bg-white">
            <Typography
                variant="overline"
                className="bg-primary-red text-white rounded-2xl p-0.5 px-2 text-sm font-semibold"
            >
                SERVICES
            </Typography>
            <Typography variant="h4" className="font-bold my-5">
                LRED specialise in supporting businesses that operate in
                Algeria, Tunisia and Libya.
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}
