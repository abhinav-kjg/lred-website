// components/ServiceCard.js
import Typography from "@mui/material/Typography";

export default function ServiceCard({ icon, title, description }) {
    return (
        <div className="flex flex-col items-start justify-start p-6 bg-gray-100 rounded-lg shadow-none">
            <div className="text-3xl mb-4">{icon}</div>
            <Typography variant="h6" className="font-semibold mb-2">
                {title}
            </Typography>
            <Typography variant="body2" className="text-gray-700 text-start">
                {description}
            </Typography>
        </div>
    );
}
