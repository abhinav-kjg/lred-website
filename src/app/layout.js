import "./globals.css";
import Navbar from "@/Components/Navbar";
import { CssBaseline } from "@mui/material";
import Footer from "@/Components/Footer";

export const metadata = {
    title: "Lred",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-poppins">
                <CssBaseline />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
