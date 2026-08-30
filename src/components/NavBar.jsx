import React, { useEffect, useState } from 'react'
import { navLinks } from "../Constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    // Close the mobile menu whenever the viewport grows back to desktop width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMenuOpen(false);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
                <div className="inner">
                    <a className="logo-block" href="#hero" onClick={() => setMenuOpen(false)}>
                        <span className="logo">Dylan Martin</span>
                        <span className="logo-tag">Software Engineer</span>
                    </a>

                    <nav className="desktop">
                        <ul>
                            {navLinks.map(({ link, name }, index) =>
                                <li key={name} className="group">
                                    <a href={link}>
                                        <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="label">{name}</span>
                                        <span className="underline" />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>

                    <a className="contact-btn group" href="#contact">
                        <div className="inner">
                            <span>Contact Me</span>
                        </div>
                    </a>

                    <button
                        type="button"
                        className="menu-btn"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                                <path d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                                <path d="M3 6h18M3 12h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="mobile-menu">
                    {navLinks.map(({ link, name }, index) => (
                        <a
                            key={name}
                            href={link}
                            className="mobile-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
                            <span className="label">{name}</span>
                        </a>
                    ))}
                    <a href="#contact" className="mobile-contact" onClick={() => setMenuOpen(false)}>
                        Contact Me
                    </a>
                </div>
            )}
        </>
    )
}
export default NavBar
