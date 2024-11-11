"use client";

import Link from "next/link";
import { Button } from "@mui/material"; // Material UI Button
import { useRouter } from "next/navigation"; // to highlight active link
import logo from "@/public/logo.png"; // Logo Image
import Image from "next/image"; // Next.js Image Component

// Navbar Component
const Navbar = () => {
    const router = useRouter();
    const pathname = router.pathname;

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "JOB", href: "/job" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "LRED Portal", href: "/portal" },
        { label: "Request Document", href: "/document" },
    ];

    return (
        <nav className="bg-white text-black py-4">
            <div className="max-w-screen-xl mx-auto ml-20 px-4 flex items-center justify-start gap-20">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/" className="text-white">
                        <Image src={logo} alt="Logo" width={140} height={100} />
                    </Link>
                </div>

                {/* Navbar Links */}
                <ul className="flex justify-start gap-4">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Button
                                href={item.href}
                                className={`text-base capitalize text-black text-nowrap ${
                                    pathname === item.href
                                        ? "text-secondary-red underline"
                                        : "hover:text-secondary-red"
                                }`}
                            >
                                {item.label}
                            </Button>
                        </li>
                    ))}
                </ul>

                {/* Material UI Button for LRED Portal (Example) */}
                {/* <Button
                    href="/lred-portal"
                    variant="contained"
                    color="primary"
                    className="ml-4"
                >
                    LRED Portal
                </Button> */}
            </div>
        </nav>
    );
};

export default Navbar;
