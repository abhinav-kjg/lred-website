// components/Banner.js
import Typography from "@mui/material/Typography";

export default function Banner() {
    return (
        <div className="flex items-center justify-center bg-primary-red py-2">
            <Typography
                variant="h4"
                align="center"
                className="text-white font-bold py-8 px-[18%] leading-tight font-playfair"
            >
                Fuelling informed decisions we are transforming the partnership
                & consulting experience for major energy client
            </Typography>
        </div>
    );
}
