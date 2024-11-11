"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AccordionSection() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {/* FAQ Item 1 */}
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className="border-none shadow-none bg-white"
            >
                <AccordionSummary
                    expandIcon={
                        expanded === "panel1" ? <RemoveIcon /> : <AddIcon />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="pl-0"
                >
                    <Typography
                        variant="h6"
                        className={`font-semibold ${expanded !== "panel1" ? "text-black" : "text-red-600"} `}
                    >
                        Lorem Ipsum is simply dummy text of the prin....?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="pl-0.5">
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* FAQ Item 2 */}
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className="border-none shadow-none"
            >
                <AccordionSummary
                    expandIcon={
                        expanded === "panel2" ? <RemoveIcon /> : <AddIcon />
                    }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className="pl-0"
                >
                    <Typography
                        variant="h6"
                        className={`font-semibold ${expanded !== "panel2" ? "text-black" : "text-red-600"} `}
                    >
                        Lorem Ipsum is simply dummy text of the prin....?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="pl-0.5">
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* FAQ Item 3 */}
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                className="border-none shadow-none"
            >
                <AccordionSummary
                    expandIcon={
                        expanded === "panel3" ? <RemoveIcon /> : <AddIcon />
                    }
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className="pl-0"
                >
                    <Typography
                        variant="h6"
                        className={`font-semibold ${expanded !== "panel3" ? "text-black" : "text-red-600"} `}
                    >
                        Lorem Ipsum is simply dummy text of the prin....?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="pl-0.5">
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* FAQ Item 4 */}
            <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                className="border-none shadow-none"
            >
                <AccordionSummary
                    expandIcon={
                        expanded === "panel4" ? <RemoveIcon /> : <AddIcon />
                    }
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className="pl-0"
                >
                    <Typography
                        variant="h6"
                        className={`font-semibold ${expanded !== "panel4" ? "text-black" : "text-red-600"} `}
                    >
                        Lorem Ipsum is simply dummy text of the prin....?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="pl-0.5">
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
