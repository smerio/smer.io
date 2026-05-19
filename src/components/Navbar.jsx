import { Link, NavLink, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { getSubNavItems } from './subNavConfig';

const mainLinks = [
    { name: 'Smerio', path: '/' },
    { name: 'Ledgent', path: '/ledgent' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const close = () => setIsOpen(false);

    const subItems = getSubNavItems(pathname);

    return (
        <nav className={classes.navbar}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo} onClick={close}>
                    <img src="/logo.webp" alt="Smerio" height="40" width="auto" />
                </Link>

                <button
                    className={classes.menuBtn}
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FiX size={24} color="#FFF" /> : <FiMenu size={24} color="#FFF" />}
                </button>

                <div className={`${classes.menu} ${isOpen ? classes.show : ''}`}>
                    {mainLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            end={link.path === '/'}
                            className={({ isActive }) =>
                                isActive ? `${classes.link} ${classes.active}` : classes.link
                            }
                            onClick={close}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {subItems.length > 0 && (
                        <div className={classes.mobileSubGroup}>
                            <div className={classes.mobileDivider} aria-hidden="true" />
                            {subItems.map((item) => (
                                item.external ? (
                                    <a
                                        key={item.name}
                                        href={item.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={item.cta ? classes.mobileCta : classes.mobileSubLink}
                                        onClick={close}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? `${classes.mobileSubLink} ${classes.mobileSubActive}`
                                                : classes.mobileSubLink
                                        }
                                        onClick={close}
                                    >
                                        {item.name}
                                    </NavLink>
                                )
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
