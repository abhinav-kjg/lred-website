/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                playfair: ["Playfair Display", "serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "primary-red": "#540000",
                "secondary-red": "#B5121B",
                "background-gray": "#37393FE8",
                "secondary-text-gray": "#B9B9B9",
                "contact-form-background": "rgba(179, 155, 136, 0.22)",
                "blue-text": "#011334",
                "secondary-text-light-gray": "#F9F9F9",
                white: "#ffffff",
                "yellow-400": "#FFD700",
            },
        },
    },
    plugins: [],
};
