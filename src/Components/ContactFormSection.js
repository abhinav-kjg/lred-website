
"use client";
import { useState } from "react";
import Image from "next/image";
import {
    TextField,
    Button,
    Typography,
    FormControl,
    InputLabel,
    FormLabel,
} from "@mui/material";
import image from "@/public/workTogether.png"; // Replace with the actual path to your image

export default function ContactFormSection() {
    // State to store form data
    const [formData, setFormData] = useState({
        email: "",
        description: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form data submitted:", formData); 
        // You can replace this with an API call to send data to the backend
    };

    return (
        <div className="flex bg-contact-form-background flex-col-reverse md:flex-row">
            {/* Left Section (Form) */}
            <div className="flex flex-col justify-center w-full md:w-2/5 px-16 my-12 mb-20">
                <Typography
                    variant="h4"
                    component="h2"
                    className="text-4xl font-semibold text-gray-900 mb-6"
                >
                    Let Us Work Together
                </Typography>

                <form
                    className="space-y-6 w-full md:w-4/5"
                    onSubmit={handleSubmit}
                >
                    {/* Email Field */}
                    <FormControl
                        fullWidth
                        variant="outlined"
                        required
                        className="space-y-1"
                    >
                        <FormLabel htmlFor="email" className="text-gray-700">
                            Email
                        </FormLabel>
                        <TextField
                            id="email"
                            variant="outlined"
                            placeholder="Enter your email address"
                            className="bg-white rounded"
                            value={formData.email} // Bind value to state
                            onChange={handleChange} // Handle input change
                            required
                        />
                    </FormControl>

                    {/* Description Field */}
                    <FormControl
                        fullWidth
                        variant="outlined"
                        required
                        className="space-y-1"
                    >
                        <FormLabel
                            htmlFor="description"
                            className="text-gray-700"
                        >
                            Tell us how LRED Services can help
                        </FormLabel>
                        <TextField
                            id="description"
                            variant="outlined"
                            placeholder="Enter your message here"
                            multiline
                            rows={3}
                            className="bg-white rounded"
                            value={formData.description} // Bind value to state
                            onChange={handleChange} // Handle input change
                            required
                        />
                    </FormControl>

                    {/* Submit Button */}
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className="bg-primary-red text-white font-semibold py-2 mt-4"
                        type="submit" // Set the type as submit
                    >
                        Submit
                    </Button>
                </form>
            </div>

            {/* Right Section (Image) */}
            <div className="relative w-full md:w-3/5">
                <Image
                    src={image}
                    alt="Construction site"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
