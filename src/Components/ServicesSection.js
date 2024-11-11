import Typography from "@mui/material/Typography";
import ServiceCard from "./ServiceCard";
import serviceImage from "@/public/image2.jpg";

export default function ServicesSection() {
    const services = [
        {
            image: serviceImage,
            title: "Visas and Work Permits",
            description:
                "Business Visas, Work Permits and Temporary Work Permits.",
        },
        {
            image: serviceImage,
            title: "Enterprise Risk Management",
            description:
                "Any Algerian business start up or ongoing venture must consider the implementation of an Enterprise Risk Management (ERM) system",
        },
        {
            image: serviceImage,
            title: "Legal Translations",
            description:
                "We provide a comprehensive translation service as required..",
        },
        {
            image: serviceImage,
            title: "In-Country Enablement",
            description:
                "We empower Algeria’s business heroes - from single-person startups to large enterprises.",
        },
        {
            image: serviceImage,
            title: "In-House Expertise",
            description:
                "Well Planning, Well Engineering, Well Operations, Reservoir and Production Engineering, and Facility Design",
        },
    ];

    return (
        <section className="px-4 py-12 my-10 mb-20 flex flex-col justify-center items-center text-center gap-14">
            <div className="flex items-center flex-col">
                <Typography
                    variant="overline"
                    className="bg-primary-red w-fit text-white rounded-2xl p-0.5 px-2 text-lg font-semibold"
                >
                    SERVICES
                </Typography>
                <Typography variant="h4" className="font-bold my-5">
                    LRED specialise in supporting businesses that operate
                    <div className="">in Algeria, Tunisia and Libya.</div>
                </Typography>
            </div>

            <div className="flex flex-col gap-36">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        index={index}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                    />
                ))}
            </div>
        </section>
    );
}
