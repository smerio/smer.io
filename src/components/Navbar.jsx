import { Link, NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Docs', path: '/docs' },
        { name: 'GitHub', path: 'https://github.com/smerio/smerio', external: true },
        { name: 'Demo', path: 'https://demo.smer.io', external: true },
    ];

    return (
        <nav className={classes.navbar}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    <img src="/logo.webp" alt="Smerio" height="40" width="auto" />
                </Link>

                {/* Mobile Menu Button */}
                <button className={classes.menuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <FiX size={24} color="#FFF" /> : <FiMenu size={24} color="#FFF" />}
                </button>

                {/* Desktop Menu */}
                <div className={`${classes.menu} ${isOpen ? classes.show : ''}`}>
                    {navLinks.map((link) => (
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.link}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => isActive ? `${classes.link} ${classes.active}` : classes.link}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                    <a
                        href="https://github.com/smerio/smerio/releases"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.cta}
                    >
                        GET LATEST
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
