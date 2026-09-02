import { useState } from 'react';
import classes from './Hero.module.css';
import { FiCheck, FiChevronRight, FiClock, FiShield, FiExternalLink, FiAward } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

const DEFAULT_HABITS = [
    { id: 'water', name: 'Water Intake', icon: '💧', color: '#10B981', defaultVal: '1000 ml', unit: 'ml', count: 184, streak: '24d', logged: false },
    { id: 'focus', name: 'Deep Work', icon: '⚡', color: '#F59E0B', defaultVal: '90 mins', unit: 'mins', count: 96, streak: '12d', logged: false },
    { id: 'training', name: 'Body Training', icon: '🏋️', color: '#6366F1', defaultVal: '45 mins', unit: 'mins', count: 62, streak: '5d', logged: false },
    { id: 'meditation', name: 'Mindfulness', icon: '🧘', color: '#8B5CF6', defaultVal: '15 mins', unit: 'mins', count: 142, streak: '18d', logged: false },
];

const Hero = () => {
    const [habits, setHabits] = useState(DEFAULT_HABITS);
    const [lastLogged, setLastLogged] = useState(null);
    const [timeMode, setTimeMode] = useState('Now');

    const handleLog = (id) => {
        setHabits((prev) =>
            prev.map((h) => {
                if (h.id === id) {
                    return { ...h, logged: true, count: h.count + 1 };
                }
                return h;
            })
        );
        const habit = habits.find((h) => h.id === id);
        setLastLogged({ name: habit.name, time: timeMode, val: habit.defaultVal });
        setTimeout(() => setLastLogged(null), 3500);
    };

    const resetLogs = () => {
        setHabits(DEFAULT_HABITS);
        setLastLogged(null);
    };

    return (
        <header className={classes.hero}>
            <div className={classes.glowEmerald} aria-hidden="true" />
            <div className={classes.glowCyan} aria-hidden="true" />

            <div className={classes.container}>
                <div className={classes.copyCol}>
                    <div className={classes.badge}>
                        <span className={classes.badgeDot} />
                        <span className={classes.badgeText}>Smerio Nomos • Android App</span>
                        <span className={classes.badgePill}>Local-First</span>
                    </div>

                    <h1 className={classes.title}>
                        Life & Habit Tracking, <br />
                        <span className={classes.titleGradient}>Rooted in Truth.</span>
                    </h1>

                    <p className={classes.lead}>
                        A privacy-first personal tracker built around three core pillars: 
                        <strong> 1-tap rapid logging</strong>, <strong>visual momentum heatmaps</strong>, and <strong>on-device statistical causal discovery</strong>. 
                        Zero accounts. Zero internet permissions. 100% on your phone.
                    </p>

                    <div className={classes.ctaRow}>
                        <a
                            href="#testing"
                            className={classes.primaryBtn}
                        >
                            <FaGooglePlay className={classes.btnIcon} />
                            <span>Join Closed Beta</span>
                            <FiChevronRight className={classes.btnArrow} />
                        </a>

                        <a href="#principles" className={classes.secondaryBtn}>
                            <span>Explore Architecture</span>
                            <FiChevronRight className={classes.btnArrow} />
                        </a>
                    </div>

                    <div className={classes.guaranteeRow}>
                        <div className={classes.guaranteeItem}>
                            <FiShield className={classes.gIconEmerald} />
                            <span>0 Network Permissions</span>
                        </div>
                        <div className={classes.guaranteeItem}>
                            <FiCheck className={classes.gIconCyan} />
                            <span>AES-256-GCM Backups</span>
                        </div>
                        <div className={classes.guaranteeItem}>
                            <FiAward className={classes.gIconGold} />
                            <span>N-of-1 Personal Trials</span>
                        </div>
                    </div>
                </div>

                {/* Interactive Simulator Column */}
                <div className={classes.simCol}>
                    <div className={classes.phoneFrame}>
                        <div className={classes.phoneHeader}>
                            <div className={classes.appBrand}>
                                <div className={classes.tallyIconMini}>
                                    <svg width="22" height="22" viewBox="0 0 100 100" fill="none" stroke="url(#heroGradMini)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                                        <defs>
                                            <linearGradient id="heroGradMini" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#22D3EE" />
                                                <stop offset="100%" stopColor="#34D399" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M22 30v40M41 30v40M60 30v40M79 30v40M22 69L79 31" />
                                        <circle cx="14" cy="74" r="9" />
                                        <circle cx="87" cy="26" r="9" />
                                    </svg>
                                </div>
                                <div>
                                    <div className={classes.appName}>Nomos</div>
                                    <div className={classes.appSub}>Interactive 1-Tap Sandbox</div>
                                </div>
                            </div>
                            <div className={classes.statusPill}>100% Offline</div>
                        </div>

                        {/* Relative Time Selector */}
                        <div className={classes.timeBar}>
                            <span className={classes.timeLabel}><FiClock size={12} /> Time:</span>
                            {['Now', '1h ago', 'Last Night', 'Yesterday'].map((mode) => (
                                <button
                                    key={mode}
                                    className={`${classes.timeChip} ${timeMode === mode ? classes.timeChipActive : ''}`}
                                    onClick={() => setTimeMode(mode)}
                                >
                                    {mode}
                                </button>
                            ))}
                        </div>

                        {/* Habit Cards */}
                        <div className={classes.cardsList}>
                            {habits.map((h) => (
                                <div
                                    key={h.id}
                                    className={`${classes.habitCard} ${h.logged ? classes.habitCardLogged : ''}`}
                                >
                                    <div className={classes.habitIcon} style={{ background: `${h.color}24`, color: h.color }}>
                                        {h.icon}
                                    </div>
                                    <div className={classes.habitInfo}>
                                        <div className={classes.habitName}>{h.name}</div>
                                        <div className={classes.habitMeta}>
                                            <span className={classes.habitDefault}>⚡ {h.defaultVal}</span>
                                            <span className={classes.habitDot}>•</span>
                                            <span className={classes.habitStreak}>{h.streak} streak</span>
                                        </div>
                                    </div>
                                    <button
                                        className={`${classes.logBtn} ${h.logged ? classes.logBtnLogged : ''}`}
                                        onClick={() => handleLog(h.id)}
                                        disabled={h.logged}
                                        style={{ '--accent-color': h.color }}
                                    >
                                        {h.logged ? (
                                            <>
                                                <FiCheck size={14} /> Logged
                                            </>
                                        ) : (
                                            <>⚡ 1-Tap</>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Toast Feedback */}
                        {lastLogged && (
                            <div className={classes.simToast}>
                                <FiCheck className={classes.toastIcon} />
                                <span>Logged <strong>{lastLogged.name}</strong> ({lastLogged.val}) for <em>{lastLogged.time}</em></span>
                            </div>
                        )}

                        <div className={classes.simFooter}>
                            <button className={classes.resetBtn} onClick={resetLogs}>
                                Reset Demo
                            </button>
                            <span className={classes.simNote}>Tap any habit to test 1-tap logging</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
