// import React, { useState } from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";
import figure from "../assets/images/figure.gif";
import Logo from "../assets/images/DezainAlly-logo.png";
import "../styles/ComingSoon.css";

import brandingIcon from "../assets/images/design.png";
import Brochure from "../assets/images/DezainAlly Ad Agency Profile.pdf";
import Arrow from "../assets/images/arrow.png";
import facebookIcon from "../assets/images/facebook.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import instagramIcon from "../assets/images/insta.png";
import linkedinIcon from "../assets/images/linkedin.png";

const ComingSoon = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
    });
    const [openDropdown, setOpenDropdown] = useState(null);

    // Show sidebar after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShowSidebar(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const services = [
        {
            id: 1,
            title: "Branding & Creative Design",
            icon: brandingIcon,
            items: [
                "Brand Identity & Product Launch",
                "Graphic Design",
                "Marketing Collateral Design",
                "Usability & UI/UX Design",
                "Corporate Photo & Calendar Shoots",
            ],
        },
        {
            id: 2,
            title: "Digital Media & Online Presence",
            icon: brandingIcon,
            items: [
                "Website Design & Development",
                "Web Design & E-Versions",
                "Mobile App Development",
                "Digital & Social Media Marketing",
                "Lead Generation & Appointment Setting",
            ],
        },
        {
            id: 3,
            title: "Advertising & Print Media",
            icon: brandingIcon,
            items: [
                "Outdoor & Indoor Signage",
                "Printing Solutions",
                "Media Buying – Print & Electronic",
                "Marketing Communication",
                "Events & Experiential Marketing",
            ],
        },
        {
            id: 4,
            title: "Events & Experiential Marketing",
            icon: brandingIcon,
            items: [
                "Events, Expos & Exhibitions",
                "Corporate Events & Brand Launches",
                "Product Launches & Promotional Campaigns",
            ],
        },
    ];


    return (
        // <div className="d-flex align-items-center justify-content-center  flex-column flex-md-row vh-100">
        <div
            className="d-flex vh-100"
            style={{
                width: "100vw",
                overflow: "hidden",
                backgroundColor: "#f5f5f5",
            }}
        >


            {/* 🧭 Sidebar — appears after 4s */}
            <AnimatePresence>
                {showSidebar && (
                    <motion.div
                        className="sidebar-wrapper col-md-3 p-0"
                        initial={{ rotateY: 90, x: -200, opacity: 0 }}
                        animate={{ rotateY: 0, x: 0, opacity: 1 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        style={{
                            transformOrigin: "left center",
                        }}
                    >
                        {/* Sidebar */}
                        <motion.div className="sidebar p-4 d-flex flex-column position-relative"
                            initial={{ rotateY: 100, x: -200, opacity: 0 }}
                            animate={{ rotateY: 0, x: 0, opacity: 1 }}
                            transition={{
                                duration: 1.6,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}>


                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <img src={Logo} alt="Logo" className="me-2 logo" />



                                <span className="logo-text fw-bold">
                                    THE <br /> HOUSE <br /> OF ALL <br /> BRANDING
                                </span>

                            </div>

                            {/* Our Services Section */}

                            <div className="d-flex align-items-center justify-content-between my-3">
                                <p className=" text-white mb-0 fs-7">Our Services</p>
                                <a
                                    href={Brochure}
                                    download="DezainAlly_Brochure.pdf"
                                    className="brochure-btn text-decoration-none fs-7"
                                >
                                    Download Brochure
                                </a>

                            </div>

                            <div className="flex-grow-1">
                                {services.map((service) => (
                                    <div key={service.id} className="mb-2">
                                        {/* Service Title */}


                                        <motion.div
                                            className="d-flex justify-content-between align-items-center py-2 px-3 bg-white shadow-sm text-black"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => toggleDropdown(service.id)}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 250 }}
                                        >
                                            <span className="fw-semibol d-flex align-items-center gap-2">

                                                {service.title}
                                            </span>

                                     

                                            <motion.div
                                                animate={{
                                                    rotate: openDropdown === service.id ? 90 : 0,
                                                    backgroundColor: openDropdown === service.id ? "#000" : "transparent",
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    padding: openDropdown === service.id ? "2px 5px" : "0px",
                                                    borderRadius: openDropdown === service.id ? "50%" : "0%",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                <span
                                                    className={`arrow-icon ${openDropdown === service.id ? "active" : ""}`}
                                                    style={{ color: openDropdown === service.id ? "#fff" : "#000" }}
                                                >
                                                    ➤
                                                </span>
                                            </motion.div>



                                        </motion.div>


                                        {/* Dropdown Items */}
                                        <AnimatePresence>
                                            {openDropdown === service.id && (
                                                <motion.ul
                                                    className="list-unstyled ps-3 mt-2 text-white"
                                                    initial={{ opacity: 0, y: -10, rotateX: -90 }}
                                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                    exit={{ opacity: 0, y: -10, rotateX: 90 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {service.items.map((item, idx) => (


                                                        <motion.li
                                                            key={idx}
                                                            className="py-1 small list-item"
                                                            whileHover={{ scale: 1.02, x: 5 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            {item}
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media  */}

                            <div className="social-icons d-flex align-items-center justify-content-center">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61581045336327"
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="img-fluid"
                                        src={whatsappIcon}
                                        alt="Facebook"
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61581045336327"
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="img-fluid"
                                        src={facebookIcon}
                                        alt="Facebook"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/dezainallyofficial/"
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="img-fluid"
                                        src={instagramIcon}
                                        alt="Instagram"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/dezainally/"
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="img-fluid"
                                        src={linkedinIcon}
                                        alt="Linkedin"
                                    />
                                </a>
                            </div>

                            {/* Talk Button */}
                            <div className="d-flex align-items-center justify-content-end mb-4">
                                <div
                                    className="talk-btn d-inline-flex align-items-center justify-content-center rounded-pill px-3 py-1 shadow-sm"
                                    style={{
                                        backgroundColor: "#d7d7d7c9",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                    }}
                                    onClick={() => setShowForm(true)}
                                >
                                    <span className="mx-2" style={{ fontSize: "15px" }}>
                                        Talk with us
                                    </span>
                                    <div
                                        className="arrow-container rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: "30px" }}
                                    >
                                        {" "}
                                        <img
                                            src={Arrow}
                                            alt="dezainally-arrow"
                                            className="arrow-icon img-fluid"
                                        />{" "}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="contact-details">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="tel:+919100579997" className="text-white text-decoration-none">+91 91005 79997</a>
                                    </p>
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="tel:+919666265693" className="text-white text-decoration-none">+91 96662 65693</a>
                                    </p>
                                </div>

                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="mailto:infodw@dezainally.com" className="text-white text-decoration-none">infodw@dezainally.com</a>
                                    </p>
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="mailto:adi@dezainally.com" className="text-white text-decoration-none">adi@dezainally.com</a>
                                    </p>
                                </div>

                            </div>





                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>


            {/* 🌟 Main Display (comes first) */}
            {/* 🌟 Main Content */}
            <motion.div
                className="main-display d-flex align-items-center justify-content-center flex-column position-relative"
                animate={{ width: showSidebar ? "75%" : "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                style={{
                    height: "100vh",
                    overflow: "hidden",
                    transition: "width 1.4s ease-in-out",
                }}
            >
                <motion.div
                    className="main-image d-flex align-items-center justify-content-center"
                    initial={{ scale: 0, rotateY: -90 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    {/* <video
                        src={figure}
                        className="img-fluid border-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                    /> */}

                    <img className="img-fluid w-50" src={figure} alt="" />

                </motion.div>
                <div className="col-8">
                    <motion.h1
                        className="display-5 text-uppercase text-black text-center mt-3"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 1, // wait until main image loads
                        }}
                    >
                        {/* Unfolding a new era of creative power */}
                        We’re building something extraordinary
                    </motion.h1>
                </div>

                {/* Animated Form */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            className="contact-sidebar"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="contact-form-box bg-black text-white p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="mb-0">Contact Us</h5>
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="btn-close btn-close-white"
                                    ></button>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group d-flex align-items-center justify-content-end">
                                        <label className="text-white me-3">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-3 d-flex align-items-center justify-content-end">
                                        <label className="text-white me-3">Email ID</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-3 d-flex align-items-center justify-content-end">
                                        <label className="text-white me-3">Contact No</label>
                                        <input
                                            type="text"
                                            name="contact"
                                            value={formData.contact}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-3 d-flex align-items-center justify-content-end">
                                        <label className="mb-0 text-white me-3">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="3"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="brochure-btn text-decoration-none fs-7 border-0 mt-3"
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

        </div >
    );
};





export default ComingSoon;
