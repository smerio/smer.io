import { useState } from 'react';
import classes from './AppGallery.module.css';
import { FiSmartphone, FiChevronLeft, FiChevronRight, FiCheckCircle, FiActivity, FiZap, FiBarChart2, FiLayers, FiCalendar } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

// The 3 hero mockups specifically highlighted for mobile & desktop discovery
const SPOTLIGHT_DEVICES = [
    {
        id: 'what-affects-mood',
        title: 'Find out what affects your mood',
        subtitle: 'Compares your mood on days you did an activity versus days you didn\'t, on the same day and the day after.',
        src: '/nomos/01-what-affects-your-mood.png',
        alt: 'The "What affects your mood" table: Alcohol, Exercise and Slept badly marked Likely, others No clear effect',
        tag: 'Honest Statistics',
        accent: '#10B981',
        icon: <FiActivity size={18} />,
        highlight: 'Same-day & next-day links · False-discovery control · Clear effect labels',
    },
    {
        id: 'daily-check-in',
        title: 'One check-in a day',
        subtitle: 'Rate your mood with five faces and tick your activities in seconds. Answer from notifications or the widget.',
        src: '/nomos/02-daily-check-in.png',
        alt: 'Daily check-in: five mood faces and activity chips',
        tag: 'Daily Check-in',
        accent: '#06B6D4',
        icon: <FiZap size={18} />,
        highlight: 'Five mood faces · One-tap activity chips · Home-screen widget',
    },
    {
        id: 'discoveries',
        title: 'Statistical Discoveries & Trials',
        subtitle: 'Automated contingency analysis, Chi-Square tests, and N-of-1 elimination experiments.',
        src: '/nomos/06-honest-results.png',
        alt: 'Trackers marked No clear effect, with "Still a correlation, not proof of cause"',
        tag: 'Statistical Discoveries',
        accent: '#F59E0B',
        icon: <FiBarChart2 size={18} />,
        highlight: 'Chi-square tests · Time-lagged triggers · N-of-1 protocols',
    },
];

const ALL_SCREENSHOTS = [
    {
        id: 'what-affects-mood',
        title: 'Find out what affects your mood',
        subtitle: 'Compares the days you did an activity with the days you didn\'t, on the same day and the day after.',
        src: '/nomos/01-what-affects-your-mood.png',
        alt: 'The "What affects your mood" table: Alcohol, Exercise and Slept badly marked Likely, others No clear effect',
        tag: 'Mood & Habits',
        accent: '#10B981',
        icon: <FiActivity size={18} />,
        highlight: 'Same-day and next-day links · Clear effect labels · False-discovery control',
    },
    {
        id: 'daily-check-in',
        title: 'One check-in a day',
        subtitle: 'Rate your mood with five faces and tick what happened: sleep, exercise, coffee, friends.',
        src: '/nomos/02-daily-check-in.png',
        alt: 'Daily check-in: five mood faces and activity chips',
        tag: 'Daily Check-in',
        accent: '#06B6D4',
        icon: <FiZap size={18} />,
        highlight: 'Five faces Awful to Great · One-tap activity chips · Notification logging',
    },
    {
        id: 'yesterday-counts',
        title: 'Yesterday counts too',
        subtitle: 'Uncovers time-lagged associations like last night\'s drinks shaping today\'s morning and afternoon mood.',
        src: '/nomos/03-yesterday-counts.png',
        alt: '"Alcohol → Mood" card: mood averages 2.5 the day after vs 3.6',
        tag: 'Next-Day Links',
        accent: '#F59E0B',
        icon: <FiActivity size={18} />,
        highlight: 'Time-lagged impact · Controlled averages · Real sample sizes',
    },
    {
        id: 'mood-over-time',
        title: 'Your mood, month by month',
        subtitle: 'Comprehensive calendar views with monthly averages and weekday breakdowns to reveal weekly rhythms.',
        src: '/nomos/04-mood-over-time.png',
        alt: 'Mood calendar and average mood by month and weekday',
        tag: 'Mood Calendar',
        accent: '#8B5CF6',
        icon: <FiCalendar size={18} />,
        highlight: 'Monthly calendar · Average mood by weekday · 5-point rating scale',
    },
    {
        id: 'home-screen-widget',
        title: 'Rate it from your home screen',
        subtitle: 'Dedicated 4x1 Android home-screen widget to log your mood check-in with a single touch.',
        src: '/nomos/05-home-screen-widget.png',
        alt: 'Mood widget with five faces',
        tag: 'Home Widget',
        accent: '#EC4899',
        icon: <FiSmartphone size={18} />,
        highlight: '4x1 home widget · Instant 1-touch logging · Zero app opening required',
    },
    {
        id: 'honest-results',
        title: 'Honest about what it finds',
        subtitle: 'Reports "No clear effect" instead of inventing links, with full transparency on correlations.',
        src: '/nomos/06-honest-results.png',
        alt: 'Trackers marked No clear effect, with "Still a correlation, not proof of cause"',
        tag: 'Honest Statistics',
        accent: '#3B82F6',
        icon: <FiBarChart2 size={18} />,
        highlight: 'Transparent sample sizes · No false promises · Honest correlation markers',
    },
    {
        id: 'one-tap-logging',
        title: 'Log anything in one tap',
        subtitle: 'Quick Log with mood faces and one-tap Log buttons for habits, symptoms, and amounts.',
        src: '/nomos/07-one-tap-logging.png',
        alt: 'Quick Log with mood faces and one-tap Log buttons',
        tag: 'Quick Log',
        accent: '#10B981',
        icon: <FiZap size={18} />,
        highlight: '1-tap defaults · Instant habit recording · Relative time adjustments',
    },
    {
        id: 'stays-on-your-phone',
        title: 'Nothing leaves your phone',
        subtitle: 'Zero internet permissions, password-protected AES-256-GCM backups, and complete data ownership.',
        src: '/nomos/08-stays-on-your-phone.png',
        alt: 'Data & backup: 0 network permissions, encrypted backup, import from Loop and Daylio',
        tag: 'Privacy & Backup',
        accent: '#06B6D4',
        icon: <FiCheckCircle size={18} />,
        highlight: '0 network permissions · Local AES-256 backup · Loop and Daylio import',
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
                                        alt={item.alt || item.title}
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
                                    alt={current.alt || current.title}
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

