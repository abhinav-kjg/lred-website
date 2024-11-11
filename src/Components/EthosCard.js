// components/EthosCard.js
import Typography from "@mui/material/Typography";

export default function EthosCard({ icon, title, description }) {
    return (
        <div className=" flex flex-col items-start justify-start p-7 py-8 pb-9 bg-[#FAFAFA] border border-gray-200 shadow-none rounded-2xl ">
            <div className="text-3xl mb-4 rounded-full p-2 bg-white border border-gray-500">
                {icon}
            </div>
            <Typography variant="h6" className="font-semibold mb-2">
                {title}
            </Typography>
            <Typography variant="body2" className="text-gray-700 text-start">
                {description}
            </Typography>
        </div>
    );
}
