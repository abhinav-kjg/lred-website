import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: "relative" }}>
            <CircularProgress
                variant="determinate"
                sx={(theme) => ({
                    color: theme.palette.grey[200],
                    ...theme.applyStyles("dark", {
                        color: theme.palette.grey[800],
                    }),
                })}
                size={50}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="determinate"
                sx={(theme) => ({
                    color: "#4EAF4E",
                    position: "absolute",
                    left: 0,
                    ...theme.applyStyles("dark", {
                        color: "#4EAF4E",
                    }),
                })}
                size={50}
                thickness={4}
                {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    className="text-sm ml-1 mb-2 select-none"
                >
                    {`${Math.round(props.value)}+`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState(51);
    const [buffer, setBuffer] = React.useState(100);

    return <CircularProgressWithLabel value={progress} valueBuffer={buffer} />;
}
