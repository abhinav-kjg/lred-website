// components/Footer.js
import { Typography } from "@mui/material";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaWordpress,
} from "react-icons/fa";
import Logo from "@/public/logo.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white py-16 pt-20 px-6">
            <div className="mx-6 md:mx-20 flex flex-col md:flex-row justify-between items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-start mb-6 md:mb-0">
                    <Image src={Logo} alt="Logo" height={100} width={200} />
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-gray-600">
                    <div className="flex flex-col gap-3">
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                        <div>Lorem</div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-6 md:mt-0 mr-32 flex flex-col items-start gap-2">
                    <Typography
                        variant="subtitle1"
                        className="font-bold mb-2 text-black"
                    >
                        Social
                    </Typography>
                    <div className="flex gap-5 text-gray-700">
                        <FaFacebookF className="text-xl hover:text-blue-600 transition-all" />
                        <FaInstagram className="text-xl hover:text-pink-500 transition-all" />
                        <FaTwitter className="text-xl hover:text-blue-400 transition-all" />
                        <FaYoutube className="text-xl hover:text-red-600 transition-all" />
                        <FaWordpress className="text-xl hover:text-blue-700 transition-all" />
                    </div>
                </div>
            </div>

            {/* Divider and Footer Bottom */}
            <div className="border-t border-gray-200 mt-10 pt-6">
                <Typography
                    variant="body2"
                    className="text-center text-gray-500"
                >
                    Lorem Lorem Lorem Lorem Lorem Lorem
                </Typography>
            </div>
        </footer>
    );
}
