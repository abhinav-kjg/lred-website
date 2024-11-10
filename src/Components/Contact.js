"use client";
import { useState } from "react";
import { TextField, Button, Typography, FormControl } from "@mui/material";
import { LocationOnOutlined, EmailOutlined } from "@mui/icons-material";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "" || null,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted");
        // You can replace this with an API call to send data to the backend
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="flex flex-col md:flex-row gap-36 max-w-6xl">
                {/* Left section */}
                <div className="flex-1 md:mr-10 mb-6 md:mb-0 text-blue-text space-y-6  px-2 md:px-0">
                    <Typography
                        variant="h4"
                        className=" font-bold capitalize text-center md:text-start text-blue-text"
                    >
                        Let's talk with us
                    </Typography>
                    <p className="mb-4 w-full md:w-[87%] text-blue-text">
                        Questions, comments, or suggestions? Simply fill in the
                        form and we’ll be in touch shortly.
                    </p>
                    <div className="mb-4 flex items-start">
                        <LocationOnOutlined className="mr-2 text-[#9734A6] " />

                        <div className="space-y-3">
                            <div>
                                <p className="font-bold text-lg">UK</p>
                                <p className=" font-medium w-full md:w-3/4">
                                    Brightwell Grange, Britwell Road, Burnham,
                                    Bucks, SL1 8DF
                                </p>
                            </div>
                            <div>
                                <p className="font-bold mt-2 text-lg ">
                                    Algeria Headquarters
                                </p>
                                <p className=" font-medium w-full md:w-3/4">
                                    18, Rue Hadj ahmed Mahamed, Hydra, 16035,
                                    Algeria
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <EmailOutlined className=" mr-2 text-[#9734A6] " />
                        <div className="space-y-2">
                            <p className="text-blue-text">
                                <span className="font-semibold">Algeria :</span>{" "}
                                +213 (0) 29 745 799
                            </p>
                            <p className="text-blue-text">
                                <span className="font-semibold">UK :</span> +44
                                (0) 1491 636 297
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right section (Form) */}
                <div className="flex-1 shadow-xl p-12 bg-white rounded-2xl border ">
                    <form
                        className="flex flex-col space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex space-x-4">
                            <FormControl fullWidth>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    InputLabelProps={{ required: true }}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    InputLabelProps={{ required: true }}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                        </div>
                        <FormControl fullWidth>
                            <TextField
                                label="Email"
                                variant="outlined"
                                InputLabelProps={{ required: true }}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                InputLabelProps={{ required: true }}
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                label="Your message..."
                                variant="outlined"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            className="text-white py-2 px-4 mt-4 rounded-md bg-primary-red"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
