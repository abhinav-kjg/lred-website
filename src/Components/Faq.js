import AccordianSection from "@/Components/Accordion";
import image from "@/public/image 20.png";
import Image from "next/image";

export default function FAQPage() {
    return (
        <div className="flex items-center min-h-screen -my-12 pb-20 ">
            <div className="flex items-start justify-center w-full mx-40">
                <div className="flex-shrink-0 w-1/2 hidden md:block">
                    <div className="relative">
                        <Image
                            src={image}
                            alt="About Us"
                            width={450}
                            height={450}
                        />
                        <div className="absolute right-28 -bottom-14 ">
                            <Image
                                src={image}
                                alt="About Us"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="mb-4">
                        <span className="px-3 py-1 text-sm font-semibold text-white bg-primary-red rounded-full">
                            FAQ'S
                        </span>
                        <h2 className="mt-2 text-4xl font-bold text-gray-900">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-5 shadow-none border-none">
                        <AccordianSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
