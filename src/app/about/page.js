import BannerPage from "@/Components/CommonBanner";
import bannerImage from "@/public/image2.jpg"; // Import banner image
import ContactFormSection from "@/Components/ContactFormSection";
import AchievementSection from "@/Components/Achievement";
import FAQPage from "@/Components/Faq";
import AboutUs from "@/Components/AboutUs";
import AboutSection from "@/Components/Card";

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
        heading: "Contact Us",
        title: "About Us",
        description: null,
    };

    return (
        <div className="min-h-screen bg-white">
            <main className="">
                <BannerPage service={ServicesData} />
                <AboutUs />
                <AboutSection />
                <div className=" pt-20">
                    <AchievementSection />
                </div>
                <FAQPage />
                <ContactFormSection />
            </main>
        </div>
    );
}
