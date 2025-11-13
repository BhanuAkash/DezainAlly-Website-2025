import React, { useState } from "react";
import "../styles/coming-soon.css";

const Text = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you! We'll notify you at ${email}`);
        setEmail("");
    };

    return (
        <div className="comingsoon-container d-flex flex-column min-vh-100 text-light">
            {/* Header */}
            <header className="d-flex justify-content-between align-items-center px-5 pt-4">
                <h5 className="fw-normal logo"> PMX</h5>
                <span className="say-hello">Say Hello</span>
            </header>

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
                    src="/images/logo.png"
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
                    <a href="#" className="footer-link">Facebook</a>
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">X</a>
                </div>
                <div>info@mysite.com</div>
                <div>© 2035 by PMX. Powered and secured by Wix</div>
            </footer>
        </div>
    );
};

export default Text;