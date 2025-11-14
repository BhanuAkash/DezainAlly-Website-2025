// import React, { useState } from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";
//import figure from "../assets/images/figure-black.gif";
import Logo from "../assets/images/DezainAlly-logo.png";
import "../styles/ComingSoon.css";

import brandingIcon from "../assets/images/design.png";
import Brochure from "../assets/images/DezainAlly Ad Agency Profile.pdf";
import arrowImg from "../assets/images/arrow-black.png";
import facebookIcon from "../assets/images/facebook.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import instagramIcon from "../assets/images/insta.png";
import linkedinIcon from "../assets/images/linkedin.png";
import ScrollIcon from "../assets/images/scroll-icon-black.gif";

import FormPopup from "./FormPage";

import { useRef } from "react";
import lottie from "lottie-web";
import WexLogoAnimation from "./WexLogoAnimation";

const ComingSoon = () => {
    // const [showButton, setShowButton] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 7000); // 6 seconds delay
        return () => clearTimeout(timer);
    }, []);

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // ✅ Delay sidebar appearance by 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => setSidebarVisible(true), 7000);
        return () => clearTimeout(timer);
    }, []);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const services = [
        {
            id: 1,
            title: "Signages & Outdoor Branding",
            icon: brandingIcon,
            description: [
                "From large-scale building signage to creative outdoor branding solutions — we design, fabricate, and install ACP boards, SS & acrylic letters, LED channel letters, pylons, unipoles, and wayfinding systems.We ensure high - quality materials, perfect illumination, and flawless finishing that strengthens your brand visibility.",
            ],
        },
        {
            id: 2,
            title: "Branding & Creative Design",
            icon: brandingIcon,
            description: [
                "We craft unique brand identities that connect emotionally and visually.Our team creates logos, brand manuals, corporate stationery, marketing collaterals, packaging, and visual campaigns that define your brand language and establish strong recall.",
            ],
        },
        {
            id: 3,
            title: "Web Design & Development",
            icon: brandingIcon,
            description: [
                "We design and develop modern, responsive, and SEO-optimized websites that deliver engaging digital experiences.Our capabilities include corporate sites, e-commerce platforms, CMS integration, landing pages, and micro-sites, built to perform across all devices.",
            ],
        },
        {
            id: 4,
            title: "Digital Experiences",
            icon: brandingIcon,
            description: [
                "We blend technology and creativity to deliver seamless digital journeys.Our focus lies in UI/UX design, motion graphics, interactive presentations, digital displays, and AR/VR-ready visuals that elevate brand storytelling and customer engagement.",
            ],
        },
        {
            id: 5,
            title: "Digital Marketing & Communication",
            icon: brandingIcon,
            description: [
                "We help brands grow through strategic digital campaigns — combining creativity with performance.Our services include social media marketing, Google & Meta ads, content creation, influencer campaigns, SEO, email marketing, and analytics-based lead generation.",
            ],
        },
        {
            id: 6,
            title: "Print Media",
            icon: brandingIcon,
            description: [
                "We offer end-to-end print production services, from concept to delivery.Our expertise covers brochures, catalogs, corporate diaries, flyers, packaging, outdoor prints, large-format banners, and UV/foil printing, ensuring consistency and quality in every detail.",
            ],
        },
        {
            id: 7,
            title: "Photography & Product / Corporate Films",
            icon: brandingIcon,
            description: [
                "We produce high-quality visual content that tells your brand story with impact.Our services include product photography, corporate shoots, industrial coverage, promo films, ad films, and social media video content — designed to engage and inspire.",
            ],
        },
        {
            id: 8,
            title: "Interior Design & Space Branding",
            icon: brandingIcon,
            description: [
                "We transform spaces into brand experiences through creative interior design, environmental graphics, and corporate décor solutions.Our scope includes office branding, wall graphics, reception designs, wayfinding, and 3D space visualization, combining aesthetics with brand storytelling.",
            ],
        },
        {
            id: 9,
            title: "Events & Experiential Marketing",
            icon: brandingIcon,
            description: [
                "We manage corporate events, expos, product launches, inaugurations, and brand activations with precision and creativity.From concept planning, stage design, and event branding to complete execution and logistics, we bring brands to life through immersive experiences.",
            ],
        },
    ];

    return (
        <div
            className="main-container d-flex w-100 overflow-hidden container-fluid m-0 p-0 gap-0"
            style={{
                backgroundColor: "#000 !important",
            }}
        >
            {/* === Sidebar === */}
            <AnimatePresence>
                {sidebarVisible && (
                    <motion.div
                        className="sidebar vh-100 d-flex flex-column text-white"
                        id="sidebar"
                        initial={{ width: "0%", opacity: 0, padding: "0rem" }}
                        animate={{ width: "18%", opacity: 1, padding: "1rem" }}
                        exit={{ width: 0, opacity: 0, padding: "0rem" }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        style={{
                            backgroundColor: "#000",
                            overflowY: "auto",
                            flexShrink: 0, // prevent resizing
                        }}
                    >
                        {/* Animation container */}
                        <motion.div
                            className="d-flex flex-column h-100 justify-content-between"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.3 },
                                },
                            }}
                        >
                            {/* === Logo + Tagline === */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: 2,
                                }}
                                className="d-flex justify-content-between align-items-end mb-4"
                            >
                                <img src={Logo} alt="Logo" className="me-2 logo" />
                                <span className="logo-text fw-bold fs-7">
                                    THE <br /> HOUSE <br /> OF ALL <br /> BRANDING
                                </span>
                            </motion.div>

                            {/* === Our Services Section === */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: 2.5,
                                }}
                                className="d-flex align-items-center justify-content-between my-3"
                            >
                                <p className="text-white mb-0 fs-7">Our Services</p>
                                <a
                                    href={Brochure}
                                    download="DezainAlly_Brochure.pdf"
                                    className="brochure-btn text-decoration-none fs-7 border-0"
                                >
                                    Company Profile
                                </a>
                            </motion.div>

                            {/* === Service Dropdowns === */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: 3,
                                }}
                                className="flex-grow-1"
                            >
                                {services.map((service) => (
                                    <div key={service.id} className="mb-2">
                                        {/* Dropdown Header */}
                                        <motion.div
                                            className="d-flex justify-content-between align-items-center py-0 px-3 bg-white shadow-sm text-black"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => toggleDropdown(service.id)}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 250 }}
                                        >
                                            <span className="fw-semibold d-flex align-items-center gap-2 fs-7">
                                                {service.title}
                                            </span>

                                            <motion.div
                                                animate={{
                                                    rotate: openDropdown === service.id ? 90 : 0,
                                                    backgroundColor:
                                                        openDropdown === service.id
                                                            ? "#000"
                                                            : "transparent",
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    padding:
                                                        openDropdown === service.id ? "1px 2px" : "0px",
                                                    borderRadius:
                                                        openDropdown === service.id ? "50%" : "0%",
                                                    width: "25px",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                <span
                                                    className={`arrow-icon ${openDropdown === service.id ? "active" : ""
                                                        }`}
                                                    style={{
                                                        color:
                                                            openDropdown === service.id ? "#fff" : "#000",
                                                    }}
                                                >
                                                    ➤
                                                </span>
                                            </motion.div>
                                        </motion.div>

                                        {/* Dropdown Description */}
                                        <AnimatePresence>
                                            {openDropdown === service.id && (
                                                <motion.div
                                                    className="mt-2 text-white px-3 py-1"
                                                    initial={{ opacity: 0, y: -15, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: "auto" }}
                                                    exit={{ opacity: 0, y: -15, height: 0 }}
                                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <p className="fs-7 mb-0">{service.description}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </motion.div>

                            {/* === Contact Details === */}
                            {/* <motion.div
                                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: 4
                                }}
                                className="contact-details d-lg-flex d-none flex-column"
                            >
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="tel:+919100579997" className="text-white text-decoration-none">
                                            +91 91005 79997
                                        </a>
                                    </p>
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="tel:+919666265693" className="text-white text-decoration-none">
                                            +91 96662 65693
                                        </a>
                                    </p>
                                </div>

                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="mailto:infodw@dezainally.com" className="text-white text-decoration-none">
                                            infodw@dezainally.com
                                        </a>
                                    </p>
                                    <p className="brochure-btn text-decoration-none fs-7">
                                        <a href="mailto:adi@dezainally.com" className="text-white text-decoration-none">
                                            adi@dezainally.com
                                        </a>
                                    </p>
                                </div>
                            </motion.div> */}

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: 4,
                                }}
                                className="contact-details mb-5"
                            >
                                <div className="d-flex align-items-center mb-2 flex-column justify-content-between flex-wrap ">
                                    <p
                                        className="brochure-btn mb-1 text-decoration-none"
                                        style={{ fontSize: "20px" }}
                                    >
                                        <a
                                            href="tel:+919100579997"
                                            className="text-green futura-bold text-decoration-none"
                                        >
                                            +91 91005 79997
                                        </a>
                                    </p>
                                    <p
                                        className="brochure-btn mb-1 text-decoration-none"
                                        style={{ fontSize: "20px" }}
                                    >
                                        <a
                                            href="tel:+919666265693"
                                            className="text-green futura-bold text-decoration-none"
                                        >
                                            +91 96662 65693
                                        </a>
                                    </p>
                                </div>

                                <div
                                    className="w-100 mb-3"
                                    style={{ background: "white", height: "1px" }}
                                ></div>

                                <div className="d-flex align-items-center flex-column justify-content-between flex-wrap">
                                    <p
                                        className="brochure-btn mb-0 text-decoration-none futura-bold"
                                        style={{ fontSize: "14px" }}
                                    >
                                        <a
                                            href="mailto:adi@dezainally.com"
                                            className="text-green text-decoration-none"
                                        >
                                            adi@dezainally.com
                                        </a>
                                    </p>
                                    <p
                                        className="brochure-btn mb-0 text-decoration-none futura-bold"
                                        style={{ fontSize: "14px" }}
                                    >
                                        <a
                                            href="mailto:infodw@dezainally.com"
                                            className="text-green text-decoration-none"
                                        >
                                            infodw@dezainally.com
                                        </a>
                                    </p>
                                </div>
                            </motion.div>

                            {/* === Mobile Screen Contact Details === */}

                            {/* === Mobile Screen Social Icons === */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: 3.5,
                                }}
                                className="social-icons d-none align-items-center justify-content-center my-4"
                            >
                                <a
                                    href="https://wa.me/919666265693"
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
                            </motion.div>

                            {/* </motion.div> */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === Main Content === */}
            <motion.div
                className="main-display d-flex align-items-center justify-content-center flex-column position-relative"
                animate={{ width: sidebarVisible ? "82%" : "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{
                    height: "100vh",
                    overflow: "hidden",
                    transition: "width 1.4s ease-in-out",
                }}
            >
                {/* Image with delay and fade-in animation */}
                {/* <motion.div
                    className="d-flex align-items-center justify-content-center"
                    initial={{ opacity: 0 }}                // start invisible
                    animate={{ opacity: 1 }}                // fade in
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1, // 👈 wait 2 seconds before appearing
                    }}
                >
                    <img className="img-fluid w-50" src={figure} alt="Main Visual" />
                </motion.div> */}

                <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    style={{
                    }}
                >
                    <WexLogoAnimation /> {/* ✅ This replaces the div with ref */}
                </motion.div>

                {/* Heading animation */}
                {/* <motion.div
                    initial={{ y: 260, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 4,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 2, // 👈 comes after image
                    }}
                >
                    <h1 className="display- fw-bold text-uppercase text-black mt-3 main-heading">
                        We’re building something extraordinary
                    </h1>
                </motion.div> */}

                {/* TEXT PART  */}

                {/* <motion.h6
          className="futura-font first-line text-green"
          initial={{ y: 260, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 2, 
          }}
        >
          <span className="futura-bold fw-bolder">IMAGINATION</span>{" "}
          <span className="fw-normal">
            IS OUR RAW MATERI<span className="futura-bold fw-bolder">AL.</span>
          </span>
        </motion.h6>

        <motion.h1
          className="fw-bolder second-line futura-font  text-green"
          initial={{ y: 260, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 2.5, 
          }}
        >
          CREATIVITY{" "}
          <span
            className="fw-normal"
            initial={{ y: 260, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 3,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 3, 
            }}
          >
            IS OUR CR<span className="fw-bolder futura-bold">AFT.</span>
          </span>
        </motion.h1>

        <motion.h6
          className="fw-medium third-line futura-regular  mb-1 text-green"
          initial={{ y: 260, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 3.5, 
          }}
        >
          We’re shaping a new world of design and ideas.
        </motion.h6>

        <motion.h5
          className="futura-regular fourth-line  text-green"
          initial={{ y: 260, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 4, 
          }}
        >
          C O M I N G &nbsp; S O O N .
        </motion.h5> */}

                <motion.h1
                    className="fw-bold mb-4 second-line futura-font text-uppercase  text-green"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 3,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 2.5,
                    }}
                >
                    We are coming soon{" "}

                </motion.h1>

                <motion.h6
                    className="fw-medium third-line futura-regular  mb-1 text-green"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 3,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 3.5,
                    }}
                >
                    Stay Tuned for Something Remarkable.
                </motion.h6>

                {/* Tablet-only GIF with fade + upward motion */}
                <motion.div
                    className=" mt-5 p-5"
                    initial={{ opacity: 0, y: 40 }} // starts hidden and slightly lower
                    animate={{ opacity: 1, y: 0 }} // fades in and moves up
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        delay: 6, // appears after heading animation
                    }}
                >
                    <a
                        className="d-flex align-items-center justify-content-center"
                        href="#sidebar"
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.getElementById("sidebar");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                        }}
                    >
                        <img
                            src={ScrollIcon}
                            alt="Building Animation"
                            className="img-fluid w-15 d-lg-none"
                            style={{ cursor: "pointer" }}
                        />
                    </a>
                </motion.div>

                {/* === Social Icons === */}
                <motion.div
                    className="social-icons position-absolute d-lg-flex flex-column align-items-center justify-content-center"
                    initial={{ x: 100, opacity: 0 }} // starts off-screen (right side)
                    animate={{ x: 0, opacity: 1 }} // slides into view
                    exit={{ x: 100, opacity: 0 }} // slides out when hidden
                    transition={{ duration: 3, delay: 10, ease: "easeInOut" }} // smooth timing
                >
                    <a
                        href="https://wa.me/919666265693"
                        className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="img-fluid" src={whatsappIcon} alt="Facebook" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61581045336327"
                        className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="img-fluid" src={facebookIcon} alt="Facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/dezainallyofficial/"
                        className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="img-fluid" src={instagramIcon} alt="Instagram" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/dezainally/"
                        className="d-flex align-items-center justify-content-center rounded-circle bg-black p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="img-fluid" src={linkedinIcon} alt="Linkedin" />
                    </a>
                </motion.div>

                {/* SCROLL BUTTON  */}
                <motion.div
                    className={`scroll-btn position-absolute d-flex align-items-center justify-content-center ${showButton ? "show" : "hidden"
                        }`}
                    onClick={() => setShowPopup(true)}
                    initial={{ x: 100, opacity: 0 }} // starts off-screen (right side)
                    animate={{ x: 0, opacity: 1 }} // slides into view
                    exit={{ x: 100, opacity: 0 }} // slides out when hidden
                    transition={{ duration: 3, delay: 10, ease: "easeInOut" }} // smooth timing
                >
                    <div className="scroll-wrapper text-white d-flex align-items-center justify-content-center">
                        <div className="scroll-content text-black">
                            <div className="item me-2">
                                <img src={arrowImg} alt="arrow" />
                                <span className="fs-7">Chat with us</span>
                            </div>
                            <div className="item me-2">
                                <img src={arrowImg} alt="arrow" />
                                <span className="fs-7">Talk with us</span>
                            </div>
                            <div className="item me-2">
                                <img src={arrowImg} alt="arrow" />
                                <span className="fs-7">Email to us</span>
                            </div>
                            <div className="item me-2">
                                <img src={arrowImg} alt="arrow" />
                                <span className="fs-7">Chat with us</span>
                            </div>
                            <div className="item me-2">
                                <img src={arrowImg} alt="arrow" />
                                <span className="fs-7">Talk with us</span>
                            </div>
                            <div className="item me-2">
                                <img src={arrowImg} alt="arrow" />
                                <span className="fs-7">Email to us</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        className="formpop-container position-fixed row align-items-center justify-content-center"
                        initial={{ opacity: 0 }} // start invisible
                        animate={{ opacity: 1 }} // fade in
                        exit={{ opacity: 0 }} // fade out when closed
                        transition={{ duration: 1, ease: "easeInOut" }} // smooth timing
                    >
                        <motion.div className="col-lg- position-relative">
                            <FormPopup show={showPopup} onClose={() => setShowPopup(false)} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ComingSoon;
