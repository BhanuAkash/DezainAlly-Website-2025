import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/coming-soon.css"; // reuse styles


import ComingSoonBg from "../assets/images/coming-soon-bg.webm";
import Logo from "../assets/images/DezainAlly-logo.png";
import Plan from "../assets/images/paper-plane.png";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T00:00:00"); // 🎯 Set your launch date

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail("");
  };

  return (
    <>
      <div className="hero-container vh-100">
        {/* 🎬 Background Video */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src={ComingSoonBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="overlay"></div>

        {/* 🧭 Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-5 py-3">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="navbar-brand d-flex align-items-center">
              <img src={Logo} alt="Logo" className="me-2 logo" />
            </div>
            <span className="logo-text fs-3 fw-bold">
              THE <br /> HOUSE <br /> OF ALL <br /> BRANDING
            </span>
          </div>
        </nav>

        {/* ✨ Hero Content */}
        <div className="hero-content mt-5 pt-5 text-center text-white">
          <p className="fs-2 fw-semibold mb-4">Something great is on the way</p>
          <h1 className="main-text fw-bold mb-4">COMING SOON</h1>
          <div className="countdown d-flex justify-content-center gap-4 fs-4">
            <div>
              <span className="d-block fw-bold fs-2">{timeLeft.days}</span>Days
            </div>
            <div>
              <span className="d-block fw-bold fs-2">{timeLeft.hours}</span>Hours
            </div>
            <div>
              <span className="d-block fw-bold fs-2">{timeLeft.minutes}</span>
              Minutes
            </div>
            <div>
              <span className="d-block fw-bold fs-2">{timeLeft.seconds}</span>
              Seconds
            </div>
          </div>
        </div>


      </div>

      <div className="comingsoon-container d-flex flex-column min-vh-100 text-light">

        {/* Main */}
        <main className="flex-grow-1 text-center d-flex flex-column align-items-center justify-content-center">
          <h1 className="main-title">Are you ready?</h1>
          <p className="main-desc">
            I'm a paragraph. Click here to add your own text and edit me.
            <br />
            It’s easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>

          <img
            src={Plan}
            alt="paper plane"
            className="plane my-4"
            width="80"
          />

          <h5 className="notify-text mb-3 fw-normal">
            Be the first to hear when we go live
          </h5>

          <form className="notify-form" onSubmit={handleSubmit}>
            <div className="mb-2 text-start">

            </div>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <input
                type="email"
                id="email"
                className="email-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /><br></br>
              <button type="submit" className="btn notify-btn">
                Notify Me
              </button>
            </div>
          </form>
        </main>

        {/* Footer */}
        <footer className="container footer text-center py-4 small d-flex align-items-center justify-content-between">
          <div className="mb-2">
            <a href="tel:+919666265693" className="footer-link">+91 96662 65693</a>
            {/* <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">X</a> */}
          </div>
          <div>
            <a href="mailto:infodw@dezainally.com" className="footer-link">
             infodw@dezainally.com

            </a>
          </div>
        </footer>
      </div>
    </>


  );
};

export default ComingSoon;



