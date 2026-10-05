import { useState } from 'react';
import classes from './AppGallery.module.css';
import { FiSmartphone, FiChevronLeft, FiChevronRight, FiGrid, FiSun, FiCalendar, FiClock, FiHeart, FiShield, FiFolder } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

const SCREENSHOTS = [
    {
        id: 'widget',
        title: '4x2 Luminous Glance Widget',
        subtitle: 'Live solar position, current ring arc, and twilight progression right on your Android home screen.',
        src: '/ambit/screenshot_6_widget.png',
        tag: 'Home Widget',
        accent: '#F4A261',
        icon: <FiGrid size={18} />,
        highlight: 'Pure Glance bitmap · Updates calmly every 15 min · Zero battery drain',
    },
    {
        id: 'day',
        title: 'The Solar Day Dial',
        subtitle: 'Astronomical sunrise, solar noon, and dusk computed on-device to the minute for your exact horizon.',
        src: '/ambit/screenshot_1_day.png',
        tag: 'Ring 01 · Day',
        accent: '#F4A261',
        icon: <FiSun size={18} />,
        highlight: 'Midnight at top · Luminous sun marker · Lit arc represents light already spent',
    },
    {
        id: 'year',
        title: 'The Seasonal Year Cycle',
        subtitle: 'The whole year as one continuous ring. Solstices and equinoxes mark organic natural seasons.',
        src: '/ambit/screenshot_2_year.png',
        tag: 'Ring 02 · Year',
        accent: '#E9C46A',
        icon: <FiCalendar size={18} />,
        highlight: '365 day dots · Dynamic daylight arc expansion · Solstice to solstice',
    },
    {
        id: 'life',
        title: 'The Lived Life Macrocosm',
        subtitle: 'One concentric ring for every lived year growing outward. Mark the milestones and turns that mattered.',
        src: '/ambit/screenshot_3_life.png',
        tag: 'Ring 03 · Life',
        accent: '#D97736',
        icon: <FiClock size={18} />,
        highlight: 'Open active ring · Dendrochronology orbits · No death count anxiety',
    },
    {
        id: 'seal',
        title: 'Seal the Day Ritual',
        subtitle: 'At dusk, Ambit asks one question and gives you one line to answer it. Hold to seal.',
        src: '/ambit/screenshot_4_seal.png',
        tag: 'Evening Ritual',
        accent: '#E76F51',
        icon: <FiHeart size={18} />,
        highlight: 'Mindful hold gesture · Settles the day into the year · Zero streak pressure',
    },
    {
        id: 'archive',
        title: 'The Evening Archive',
        subtitle: 'A quiet chronological log worth reading back years later, preserved entirely offline.',
        src: '/ambit/screenshot_5_archive.png',
        tag: 'Reflection Archive',
        accent: '#F4A261',
        icon: <FiFolder size={18} />,
        highlight: 'Local database storage · Plain text JSON export · Complete sovereignty',
    },
    {
        id: 'location',
        title: 'Zero-Permission Location Mode',
        subtitle: 'Select your city offline from a local database or grant location for automatic GPS astronomical calculation.',
        src: '/ambit/screenshot_7_location.png',
        tag: 'Astronomical Math',
        accent: '#2A9D8F',
        icon: <FiShield size={18} />,
        highlight: 'Coordinates processed strictly in memory · Never transmitted anywhere',
    },
];

const AppGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? SCREENSHOTS.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === SCREENSHOTS.length - 1 ? 0 : prev + 1));
    };

    const current = SCREENSHOTS[activeIndex];

    return (
        <section className={classes.section} id="screens">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>
                        <FiSmartphone className={classes.badgeIcon} />
                        <span>Jetpack Compose & Glance</span>
                    </div>
                    <h2 className={classes.title}>
                        Crafted with Luminous Typography. <br />
                        <span className={classes.highlight}>See Ambit in Motion.</span>
                    </h2>
                    <p className={classes.subtitle}>
                        Every screen balances classical editorial elegance (Newsreader serif typography) with real-time astronomical physics.
                    </p>
                </div>

                {/* Screenshot Carousel Showcase */}
                <div className={classes.carouselFrame}>
                    <div className={classes.deviceContainer}>
                        <div className={classes.deviceBezel}>
                            <div className={classes.screenGlass}>
                                <img
                                    key={current.id}
                                    src={current.src}
                                    alt={current.title}
                                    className={classes.screenshotImg}
                                />
                            </div>
                        </div>

                        {/* Navigation Overlay Controls */}
                        <div className={classes.navRow}>
                            <button
                                onClick={prevSlide}
                                className={classes.navBtn}
                                aria-label="Previous screenshot"
                            >
                                <FiChevronLeft size={22} />
                            </button>
                            <span className={classes.counter}>
                                {activeIndex + 1} / {SCREENSHOTS.length}
                            </span>
                            <button
                                onClick={nextSlide}
                                className={classes.navBtn}
                                aria-label="Next screenshot"
                            >
                                <FiChevronRight size={22} />
                            </button>
                        </div>
                    </div>

                    <div className={classes.detailsPane}>
                        <div className={classes.tagPill} style={{ '--tag-color': current.accent }}>
                            {current.icon}
                            <span>{current.tag}</span>
                        </div>

                        <h3 className={classes.screenTitle}>{current.title}</h3>
                        <p className={classes.screenDesc}>{current.subtitle}</p>

                        <div className={classes.highlightBox}>
                            <span className={classes.highlightDot} style={{ background: current.accent }} />
                            <span className={classes.highlightText}>{current.highlight}</span>
                        </div>

                        {/* Thumbnails Row */}
                        <div className={classes.thumbRow}>
                            {SCREENSHOTS.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`${classes.thumbBtn} ${idx === activeIndex ? classes.thumbActive : ''}`}
                                    aria-label={`View ${item.title}`}
                                >
                                    <img src={item.src} alt={item.tag} className={classes.thumbImg} />
                                </button>
                            ))}
                        </div>

                        <div className={classes.ctaRow}>
                            <a
                                href="https://play.google.com/store/apps/details?id=io.smer.ambit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.ctaBtn}
                            >
                                <FaGooglePlay size={16} />
                                <span>Get Ambit on Google Play</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppGallery;
