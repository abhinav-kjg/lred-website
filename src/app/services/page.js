import BannerPage from "@/Components/CommonBanner";
import bannerImage from "@/public/image2.jpg"; // Import banner image
import ContactFormSection from "@/Components/ContactFormSection";
import ServicesSection from "@/Components/ServicesSection";

// ./app/services/page.js
export default function Services() {
    const BreadCrumbList = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Services",
            href: "/services",
        },
    ];

    const ServicesData = {
        image: bannerImage,
        breadCrumbList: BreadCrumbList,
        heading: "Our Services",
        title: "LRED Services",
        description:
            "We providee a wide range of services to cater to your needs.",
    };

    return (
        <div className="min-h-screen text-black">
            <main className="">
                <BannerPage service={ServicesData} />
                <ServicesSection />
                <ContactFormSection />
            </main>
        </div>
    );
}
