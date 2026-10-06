import { useState } from 'react';
import classes from './AppGallery.module.css';
import { FiSmartphone, FiChevronLeft, FiChevronRight, FiCheckCircle, FiActivity, FiZap, FiBarChart2, FiLayers, FiCalendar } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

// The 3 hero mockups specifically highlighted for mobile & desktop discovery
const SPOTLIGHT_DEVICES = [
    {
        id: 'heatmap',
        title: 'Dark OLED Pixela Heatmap',
        subtitle: 'Multi-scale temporal drilldown (Year > Month > Week), period streaks, and density cells.',
        src: '/nomos/screenshot-4-trends.png',
        tag: 'Pixela Momentum',
        accent: '#10B981',
        icon: <FiActivity size={18} />,
        highlight: 'Yearly, monthly, & weekly drilldown · Period-aware momentum streaks',
    },
    {
        id: 'quick-log',
        title: 'Quick Log & History View',
        subtitle: '1-tap rapid capture cards, numeric attributes with units, and relative timestamps.',
        src: '/nomos/screenshot-1-quick-log.png',
        tag: '1-Tap Fast Log',
        accent: '#06B6D4',
        icon: <FiZap size={18} />,
        highlight: 'Zero modal delay · Relative time selector · Multi-attribute tags',
    },
    {
        id: 'discoveries',
        title: 'Statistical Discoveries & Trials',
        subtitle: 'Automated 2x2 contingency analysis, Odds Ratios, Chi-Square, and N-of-1 elimination experiments.',
        src: '/nomos/screenshot-2-discoveries.png',
        tag: 'Causal Inference',
        accent: '#F59E0B',
        icon: <FiBarChart2 size={18} />,
        highlight: 'Fisher exact test p-values · Time-lagged triggers · N-of-1 protocols',
    },
];

const ALL_SCREENSHOTS = [
    {
        id: 'trends',
        title: 'Dark OLED Pixela Heatmap & Temporal Drilldown',
        subtitle: '52-Week activity matrix with multi-scale zoom (2023 > Jun > W24), period-aware streaks, and zero cloud dependency.',
        src: '/nomos/screenshot-4-trends.png',
        tag: 'Heatmap Drilldown',
        accent: '#10B981',
        icon: <FiActivity size={18} />,
        highlight: 'Dark OLED contrast · 52-week activity matrices · Circadian rhythm view',
    },
    {
        id: 'quick-log',
        title: 'Quick Log & Attribute Cards',
        subtitle: 'Capture habits, symptoms, and dynamic quantitative attributes with zero friction and instant 1-tap feedback.',
        src: '/nomos/screenshot-1-quick-log.png',
        tag: 'Quick Log',
        accent: '#06B6D4',
        icon: <FiZap size={18} />,
        highlight: 'Instant 1-tap capture · Customizable units & ranges · Fast relative logging',
    },
    {
        id: 'discoveries',
        title: 'Statistical Discoveries & Routine Stacks',
        subtitle: 'Uncover hidden correlations between habits, identify routine stacks, and flag potential confounders automatically.',
        src: '/nomos/screenshot-2-discoveries.png',
        tag: 'Discoveries',
        accent: '#F59E0B',
        icon: <FiBarChart2 size={18} />,
        highlight: 'Chi-Square classification · Confounder detection · Routine pairing',
    },
    {
        id: 'evidence',
        title: '2x2 Contingency Matrices & Evidence',
        subtitle: 'Rigorous Fisher exact test p-values, Odds Ratios, and Relative Risk metrics computed entirely on your local CPU.',
        src: '/nomos/screenshot-3-evidence.png',
        tag: 'Evidence',
        accent: '#6366F1',
        icon: <FiBarChart2 size={18} />,
        highlight: 'Mathematical rigor · Transparent statistical tables · Confidence intervals',
    },
    {
        id: 'trial',
        title: 'Structured N-of-1 Personal Trials',
        subtitle: '7-day elimination followed by 7-day reintroduction protocols with definitive statistical verdicts.',
        src: '/nomos/screenshot-6-trial.png',
        tag: 'N-of-1 Trials',
        accent: '#F59E0B',
        icon: <FiActivity size={18} />,
        highlight: 'Single-subject scientific trials · Relative Risk tracking · Definitive verdict',
    },
    {
        id: 'composition',
        title: '24-Hour Day Composition Timeline',
        subtitle: 'Chronological timeline of all your daily activities, routines, and metric logs in a unified stream.',
        src: '/nomos/screenshot-5-composition-day.png',
        tag: 'Day Composition',
        accent: '#8B5CF6',
        icon: <FiCalendar size={18} />,
        highlight: 'Daily chronological sequence · Sleep and waking habits · Multi-tag streams',
    },
    {
        id: 'history',
        title: 'Flexible Frequency Targets & History',
        subtitle: 'Time-bounded plans (e.g. 3x/week, 10x/month) with full historical compliance and audit logging.',
        src: '/nomos/screenshot-7-history.png',
        tag: 'History & Targets',
        accent: '#34D399',
        icon: <FiLayers size={18} />,
        highlight: 'Target frequency quotas · Full historical audit · Complete data log',
    },
    {
        id: 'privacy',
        title: '100% On-Device Sovereignty & Portability',
        subtitle: 'Zero network permissions requested, hardware-backed AES-256-GCM encryption, and one-tap Loop Habits import.',
        src: '/nomos/screenshot-8-privacy.png',
        tag: 'Privacy Settings',
        accent: '#10B981',
        icon: <FiCheckCircle size={18} />,
        highlight: 'No internet permissions · Local encrypted snapshots · Loop tracker import',
    },
];

const AppGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? ALL_SCREENSHOTS.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === ALL_SCREENSHOTS.length - 1 ? 0 : prev + 1));
    };

    const current = ALL_SCREENSHOTS[activeIndex];

    return (
        <section className={classes.section} id="gallery">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>
                        <FiSmartphone className={classes.badgeIcon} />
                        <span>Jetpack Compose UI</span>
                    </div>
                    <h2 className={classes.title}>Designed for Speed, Clarity, & Privacy</h2>
                    <p className={classes.subtitle}>
                        Experience authentic Material 3 dark aesthetics, smooth Compose animations, and complete offline autonomy before downloading.
                    </p>
                </div>

                {/* 3-Device Showcase Grid (Top Priority Request) */}
                <div className={classes.trioGrid}>
                    {SPOTLIGHT_DEVICES.map((item) => (
                        <div key={item.id} className={classes.trioCard} style={{ '--trio-accent': item.accent }}>
                            <div className={classes.trioMockupWrap}>
                                <div className={classes.trioDeviceBezel}>
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className={classes.trioImg}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className={classes.trioContent}>
                                <div className={classes.trioTag} style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}15` }}>
                                    {item.icon}
                                    <span>{item.tag}</span>
                                </div>
                                <h3 className={classes.trioTitle}>{item.title}</h3>
                                <p className={classes.trioSubtitle}>{item.subtitle}</p>
                                <span className={classes.trioHighlight}>{item.highlight}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Deep Interactive Carousel for All Screens */}
                <div className={classes.carouselFrame}>
                    <div className={classes.deviceContainer}>
                        <div className={classes.deviceBezel}>
                            <div className={classes.screenGlass}>
                                <img
                                    key={current.id}
                                    src={current.src}
                                    alt={current.title}
                                    className={classes.screenshotImg}
                                    loading="lazy"
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
                                {activeIndex + 1} / {ALL_SCREENSHOTS.length}
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
                            {ALL_SCREENSHOTS.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`${classes.thumbBtn} ${idx === activeIndex ? classes.thumbActive : ''}`}
                                    aria-label={`View ${item.title}`}
                                >
                                    <img src={item.src} alt={item.tag} className={classes.thumbImg} loading="lazy" />
                                </button>
                            ))}
                        </div>

                        <div className={classes.ctaRow}>
                            <a
                                href="https://play.google.com/store/apps/details?id=io.smer.nomos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.ctaBtn}
                            >
                                <FaGooglePlay size={18} />
                                <span>Get Smerio Nomos on Google Play</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppGallery;

