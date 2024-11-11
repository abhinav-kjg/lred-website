import Image from "next/image";
import BannerPage from "@/Components/HomeBanner";
import AboutUs from "@/Components/HomeAboutUs";
import AchievementSection from "@/Components/Achievement";
import Banner from "@/Components/AchievementBanner";
import ServicesSection from "@/Components/HomeServicesSection";
import EthossSection from "@/Components/EthosSection";
import ContactFormSection from "@/Components/ContactFormSection";
import TestimonialSection from "@/Components/Testimonials";

export default function Home() {
    return (
        <div className="min-h-screen bg-green-400">
            <main className="">
                <BannerPage />
                <AboutUs />
                <AchievementSection />
                <ServicesSection />
                <Banner />
                <EthossSection />
                <TestimonialSection />
                <ContactFormSection />
            </main>
        </div>
    );
}
