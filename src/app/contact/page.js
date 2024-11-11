import BannerPage from "@/Components/CommonBanner";
import bannerImage from "@/public/image2.jpg"; // Import banner image
import ContactFormSection from "@/Components/ContactFormSection";
import ContactForm from "@/Components/Contact";

// ./app/services/page.js
export default function Contact() {
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

    const BannerContactData = {
        image: bannerImage,
        breadCrumbList: BreadCrumbList,
        heading: "Contact Us",
        title: "Contact",
        description: null,
    };

    return (
        <div className="min-h-screen " style={{ backgroundColor: "#54000008" }}>
            <main className="">
                <BannerPage service={BannerContactData} />
                <ContactForm />
            </main>
        </div>
    );
}
