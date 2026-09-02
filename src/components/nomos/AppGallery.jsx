import { useState } from 'react';
import classes from './AppGallery.module.css';
import { FiSmartphone, FiChevronLeft, FiChevronRight, FiShield, FiZoomIn } from 'react-icons/fi';

const SCREENSHOTS = [
    {
        id: 'quick-log',
        title: '1-Tap Fast Logging',
        subtitle: 'Capture habits, symptoms, and dynamic attributes with zero modal friction.',
        src: '/nomos/screenshot-1-quick-log.png',
        tag: 'Quick Log',
        accent: '#10B981',
    },
    {
        id: 'discoveries',
        title: 'Automated Causal Discovery',
        subtitle: 'Classifies routine stacks, time-lagged triggers, and confounder warnings.',
        src: '/nomos/screenshot-2-discoveries.png',
        tag: 'Discoveries',
        accent: '#06B6D4',
    },
    {
        id: 'evidence',
        title: '2x2 Contingency Matrices',
        subtitle: 'Rigorous Fisher exact test p-values, odds ratios, and relative risk analysis.',
        src: '/nomos/screenshot-3-evidence.png',
        tag: 'Evidence',
        accent: '#6366F1',
    },
    {
        id: 'trends',
        title: 'Pixela Momentum Heatmaps',
        subtitle: '52-Week activity matrices, period-aware streaks, and multi-scale temporal zoom.',
        src: '/nomos/screenshot-4-trends.png',
        tag: 'Trends',
        accent: '#10B981',
    },
    {
        id: 'composition',
        title: '24-Hour Day Composition',
        subtitle: 'Chronological timeline of all your daily activities, routines, and metrics.',
        src: '/nomos/screenshot-5-composition-day.png',
        tag: 'Timeline',
        accent: '#8B5CF6',
    },
    {
        id: 'trial',
        title: 'N-of-1 Personal Trials',
        subtitle: 'Elimination vs reintroduction protocols with automated statistical verdict.',
        src: '/nomos/screenshot-6-trial.png',
        tag: 'Trials',
        accent: '#F59E0B',
    },
    {
        id: 'history',
        title: 'Time-Bounded Plans & Targets',
        subtitle: 'Flexible habit frequency targets with full historical audit tracking.',
        src: '/nomos/screenshot-7-history.png',
        tag: 'Targets',
        accent: '#F59E0B',
    },
    {
        id: 'privacy',
        title: '100% On-Device Sovereignty',
        subtitle: 'Zero network permissions, AES-256-GCM encryption, and Loop Habits import.',
        src: '/nomos/screenshot-8-privacy.png',
        tag: 'Privacy',
        accent: '#10B981',
    },
];

const AppGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? SCREENSHOTS.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === SCREENSHOTS.length - 1 ? 0 : prev + 1));
    };

    const current = SCREENSHOTS[currentIndex];

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
                        Every screen in Nomos is crafted with modern Material 3 dark aesthetics, smooth Compose animations, and zero-telemetry architecture.
                    </p>
                </div>

                {/* Screenshot Carousel Showcase */}
                <div className={classes.carouselFrame}>
                    <div className={classes.phoneCol}>
                        <div className={classes.mockupShell}>
                            <img
                                src={current.src}
                                alt={current.title}
                                className={classes.screenshotImg}
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className={classes.detailsCol}>
                        <div className={classes.chipList}>
                            {SCREENSHOTS.map((s, idx) => (
                                <button
                                    key={s.id}
                                    className={`${classes.tagChip} ${currentIndex === idx ? classes.tagChipActive : ''}`}
                                    onClick={() => setCurrentIndex(idx)}
                                >
                                    {s.tag}
                                </button>
                            ))}
                        </div>

                        <div className={classes.detailContent}>
                            <span className={classes.detailPill} style={{ color: current.accent, borderColor: `${current.accent}40`, background: `${current.accent}15` }}>
                                SCREEN {currentIndex + 1} OF {SCREENSHOTS.length}
                            </span>
                            <h3 className={classes.detailTitle}>{current.title}</h3>
                            <p className={classes.detailSubtitle}>{current.subtitle}</p>
                        </div>

                        <div className={classes.navRow}>
                            <button className={classes.navBtn} onClick={prevSlide} aria-label="Previous Screenshot">
                                <FiChevronLeft size={20} />
                            </button>
                            <span className={classes.pageIndicator}>
                                {currentIndex + 1} / {SCREENSHOTS.length}
                            </span>
                            <button className={classes.navBtn} onClick={nextSlide} aria-label="Next Screenshot">
                                <FiChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppGallery;
