// app/TestimonialSection.js

import { Box, Typography } from "@mui/material";

export default function TestimonialSection() {
    return (
        <div className="bg-white flex justify-start flex-col py-14 text-black">
            <Typography
                variant="subtitle2"
                className="bg-primary-red mx-32 text-white rounded-2xl p-0.5 px-3 font-bold w-fit uppercase"
            >
                Testimonials
            </Typography>
            <div className="flex flex-col md:flex-row justify-start mx-28 gap-10 items-start bg-white ">
                {/* Left Section */}
                <div className="md:w-[25%] px-5">
                    <Typography variant="h3" className="font-bold mb-4 text-black">
                        What Our Client Say&apos;s
                    </Typography>
                    <Typography className="text-gray-600">
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </Typography>
                </div>

                {/* Right Section - Testimonials */}
                <div className=" flex justify-start gap-10">
                    <Box className="w-72 bg-primary-red p-6 text-white ">
                        <Typography variant="body1" className="italic mb-4">
                            “ Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum
                            Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem
                            Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
                            Lorem Ipsum Lorem.
                        </Typography>
                        <Typography variant="h6" className="font-bold">
                            Anika Malein
                        </Typography>
                        <Typography variant="body2" className="text-gray-300">
                            Lorem Ipsum
                        </Typography>
                    </Box>
                    <Box className="w-72 bg-primary-red p-6 text-white ">
                        <Typography variant="body1" className="italic mb-4">
                            “ Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum
                            Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem
                            Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
                            Lorem Ipsum Lorem.
                        </Typography>
                        <Typography variant="h6" className="font-bold">
                            Anika Malein
                        </Typography>
                        <Typography variant="body2" className="text-gray-300">
                            Lorem Ipsum
                        </Typography>
                    </Box>
                    <Box className="w-72 bg-primary-red p-6 text-white ">
                        <Typography variant="body1" className="italic mb-4">
                            “ Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum
                            Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem
                            Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
                            Lorem Ipsum Lorem.
                        </Typography>
                        <Typography variant="h6" className="font-bold">
                            Anika Malein
                        </Typography>
                        <Typography variant="body2" className="text-gray-300">
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
}
