import { useState, useEffect } from 'react';
import classes from './Hero.module.css';
import { FiArrowDown, FiShield, FiMail, FiSun, FiMoon, FiUsers } from 'react-icons/fi';

const Hero = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Calculate current time angle (0 at top / midnight, 180 at bottom / noon)
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const totalMinutes = hours * 60 + minutes + seconds / 60;
    const dayProgress = totalMinutes / 1440; // 0 to 1
    const markerAngle = dayProgress * 360; // 0 to 360 deg, clockwise from top

    const rad = (deg) => ((deg - 90) * Math.PI) / 180;
    const cx = 50;
    const cy = 50;
    const r = 36;
    const mx = cx + r * Math.cos(rad(markerAngle));
    const my = cy + r * Math.sin(rad(markerAngle));

    // Phase description
    let phase = 'Night Arc';
    let isDay = false;
    if (hours >= 5 && hours < 7) {
        phase = 'Civil Dawn & Emergence';
    } else if (hours >= 7 && hours < 12) {
        phase = 'Solar Morning';
        isDay = true;
    } else if (hours >= 12 && hours < 17) {
        phase = 'Peak Solar Afternoon';
        isDay = true;
    } else if (hours >= 17 && hours < 19) {
        phase = 'Golden Hour & Dusk';
    } else if (hours >= 19 && hours < 22) {
        phase = 'Civil Twilight';
    } else {
        phase = 'Deep Fallow Night';
    }

    const formatClock = (d) => {
        const h = String(d.getHours()).padStart(2, '0');
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <header className={classes.hero}>
            <div className={classes.glow} aria-hidden="true" />
            <div className={classes.container}>
                <div className={classes.copy}>
                    <div className={classes.badgeGroup}>
                        <span className={classes.badge}>Ambit · Android App</span>
                        <span className={classes.badgeSub}>Seneca's Rings</span>
                    </div>

                    <h1 className={classes.title}>
                        The circuit of <br />
                        <span className={classes.highlight}>a conscious life.</span>
                    </h1>

                    <p className={classes.quote}>
                        &ldquo;Life is divided into parts, consisting of circles, smaller and larger, with the larger encompassing the smaller... Heraclitus was right: one day is equal to every other day.&rdquo;
                        <span className={classes.author}>— Seneca, <em>12th Moral Letter to Lucilius</em></span>
                    </p>

                    <p className={classes.subtitle}>
                        Time is not a linear conveyor belt of anxiety. Ambit maps your day, your seasonal year, and your lived life into three harmonious concentric rings—with 100% on-device calculations, zero trackers, and no accounts ever.
                    </p>

                    <div className={classes.actions}>
                        <a href="#testing" className={`${classes.btn} ${classes.primary}`}>
                            <FiUsers aria-hidden="true" />
                            Join Alpha Testing
                        </a>
                        <a href="#rings" className={`${classes.btn} ${classes.secondary}`}>
                            <FiArrowDown aria-hidden="true" />
                            Explore the Rings
                        </a>
                        <a href="#privacy" className={`${classes.btn} ${classes.tertiary}`}>
                            <FiShield aria-hidden="true" />
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className={classes.mockupWrap}>
                    <div className={classes.dialCard}>
                        <div className={classes.dialHeader}>
                            <div className={classes.dialTitle}>Live Solar Astrolabe</div>
                            <div className={classes.dialLiveBadge}>
                                <span className={classes.liveDot}></span> Local Time
                            </div>
                        </div>

                        <div className={classes.svgContainer}>
                            <svg className={classes.solarSvg} viewBox="0 0 100 100" fill="none">
                                {/* Base Ring / 24-hour cycle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="36"
                                    stroke="rgba(255, 255, 255, 0.12)"
                                    strokeWidth="1.5"
                                />

                                {/* Cardinal Solar Ticks (Midnight top, Noon bottom, Dawn right, Dusk left) */}
                                <line x1="50" y1="9" x2="50" y2="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                                <line x1="50" y1="87" x2="50" y2="91" stroke="rgba(244,162,97,0.7)" strokeWidth="1.2" />
                                <line x1="87" y1="50" x2="91" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                <line x1="9" y1="50" x2="13" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                                {/* Daylight Arc (Dawn to Dusk) */}
                                <path
                                    d="M 86 50 A 36 36 0 0 1 14 50"
                                    stroke="#F4A261"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />

                                {/* Spent Daylight Arc */}
                                {hours >= 6 && hours <= 18 && (
                                    <path
                                        d={`M 86 50 A 36 36 0 0 1 ${mx} ${my}`}
                                        stroke="#D97736"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                )}

                                {/* Moving Luminary Sun Marker */}
                                <circle
                                    cx={mx}
                                    cy={my}
                                    r="8"
                                    fill="rgba(244, 162, 97, 0.22)"
                                />
                                <circle
                                    cx={mx}
                                    cy={my}
                                    r="4.5"
                                    fill="#FFF6E4"
                                />

                                {/* Inner Tree Rings Preview */}
                                <circle cx="50" cy="50" r="24" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                <circle cx="50" cy="50" r="14" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                <circle cx="50" cy="50" r="3" fill="#F4A261" />
                            </svg>
                        </div>

                        <div className={classes.dialFooter}>
                            <div className={classes.dialPhase}>
                                {isDay ? <FiSun className={classes.sunIcon} /> : <FiMoon className={classes.moonIcon} />}
                                <span>{phase}</span>
                            </div>
                            <div className={classes.dialClock}>{formatClock(time)}</div>
                        </div>

                        <div className={classes.dialNote}>
                            Midnight sits at the top. The daylight arc expands & contracts with your latitude.
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
