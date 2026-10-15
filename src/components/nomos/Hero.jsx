import { useState } from 'react';
import classes from './Hero.module.css';
import { FiCheck, FiChevronRight, FiClock, FiShield, FiExternalLink, FiAward, FiSmile } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

const MOOD_OPTIONS = [
    { value: 1, label: 'Awful', emoji: '😖', color: '#EF4444' },
    { value: 2, label: 'Bad', emoji: '🙁', color: '#F97316' },
    { value: 3, label: 'Okay', emoji: '😐', color: '#F59E0B' },
    { value: 4, label: 'Good', emoji: '🙂', color: '#10B981' },
    { value: 5, label: 'Great', emoji: '😄', color: '#06B6D4' },
];

const DEFAULT_ACTIVITIES = [
    { id: 'exercise', label: 'Exercise', icon: '🏃' },
    { id: 'friends', label: 'Friends', icon: '👥' },
    { id: 'slept-badly', label: 'Slept badly', icon: '😴' },
    { id: 'alcohol', label: 'Alcohol', icon: '🍷' },
    { id: 'coffee', label: 'Coffee', icon: '☕' },
    { id: 'deep-work', label: 'Deep Work', icon: '⚡' },
];

const Hero = () => {
    const [selectedMood, setSelectedMood] = useState(4); // default Good
    const [selectedActivities, setSelectedActivities] = useState(['exercise', 'coffee']);
    const [timeMode, setTimeMode] = useState('Now');
    const [savedState, setSavedState] = useState(null);

    const toggleActivity = (id) => {
        setSelectedActivities((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleSave = () => {
        const moodObj = MOOD_OPTIONS.find((m) => m.value === selectedMood);
        const activityLabels = selectedActivities
            .map((id) => DEFAULT_ACTIVITIES.find((a) => a.id === id)?.label)
            .filter(Boolean);

        setSavedState({
            mood: moodObj?.label || 'Recorded',
            emoji: moodObj?.emoji || '✓',
            activities: activityLabels.length > 0 ? activityLabels.join(', ') : 'No activities',
            time: timeMode,
        });

        setTimeout(() => setSavedState(null), 4000);
    };

    const resetDemo = () => {
        setSelectedMood(4);
        setSelectedActivities(['exercise', 'coffee']);
        setSavedState(null);
    };

    const fillRoutine = () => {
        setSelectedMood(4);
        setSelectedActivities(['exercise', 'friends', 'coffee']);
        setSavedState(null);
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
                        Find out what <br />
                        <span className={classes.titleGradient}>really affects your mood.</span>
                    </h1>

                    <p className={classes.lead}>
                        Check in once a day: rate your mood and tick what happened. Nomos compares your better and worse days with honest statistics and shows what goes with each. Zero accounts. Zero internet permissions. 100% on your phone.
                    </p>

                    <div className={classes.daylioLinkRow}>
                        <a href="#daylio-import" className={classes.daylioLink}>
                            Coming from Daylio? Import your history &rarr;
                        </a>
                    </div>

                    <div className={classes.ctaRow}>
                        <a
                            href="https://play.google.com/store/apps/details?id=io.smer.nomos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.primaryBtn}
                        >
                            <FaGooglePlay className={classes.btnIcon} />
                            <span>Get it on Google Play</span>
                            <FiExternalLink className={classes.btnArrow} />
                        </a>

                        <a href="#gallery" className={classes.secondaryBtn}>
                            <span>View Screenshots</span>
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
                            <span>Daily mood check-in</span>
                        </div>
                        <div className={classes.guaranteeItem}>
                            <FiAward className={classes.gIconGold} />
                            <span>Honest statistics</span>
                        </div>
                    </div>
                </div>

                {/* Interactive Check-in Simulator Column */}
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
                                    <div className={classes.appSub}>Daily Mood Check-in</div>
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

                        {/* Mood Faces Row */}
                        <div className={classes.moodSection}>
                            <div className={classes.moodSectionLabel}>
                                <FiSmile size={13} />
                                <span>Rate your mood today</span>
                            </div>
                            <div className={classes.moodFacesRow}>
                                {MOOD_OPTIONS.map((m) => {
                                    const isSelected = selectedMood === m.value;
                                    return (
                                        <button
                                            key={m.value}
                                            className={`${classes.moodFaceBtn} ${isSelected ? classes.moodFaceSelected : ''}`}
                                            onClick={() => setSelectedMood(m.value)}
                                            style={{ '--mood-color': m.color }}
                                            type="button"
                                            aria-label={`${m.label} mood`}
                                        >
                                            <span className={classes.moodEmoji}>{m.emoji}</span>
                                            <span className={classes.moodFaceLabel}>{m.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Activity Chips Grid */}
                        <div className={classes.activitySection}>
                            <div className={classes.activitySectionHeader}>
                                <span className={classes.activitySectionLabel}>Tick what happened</span>
                                <button type="button" className={classes.routineLink} onClick={fillRoutine}>
                                    Same as the day before
                                </button>
                            </div>
                            <div className={classes.chipsGrid}>
                                {DEFAULT_ACTIVITIES.map((a) => {
                                    const isChecked = selectedActivities.includes(a.id);
                                    return (
                                        <button
                                            key={a.id}
                                            type="button"
                                            className={`${classes.activityChip} ${isChecked ? classes.activityChipChecked : ''}`}
                                            onClick={() => toggleActivity(a.id)}
                                        >
                                            <span className={classes.activityIcon}>{a.icon}</span>
                                            <span className={classes.activityName}>{a.label}</span>
                                            {isChecked && <FiCheck className={classes.activityCheck} />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Save Check-in Button */}
                        <div className={classes.actionRow}>
                            <button
                                type="button"
                                className={classes.saveCheckinBtn}
                                onClick={handleSave}
                            >
                                <FiCheck size={16} />
                                <span>Save Check-in</span>
                            </button>
                        </div>

                        {/* Toast Feedback */}
                        {savedState && (
                            <div className={classes.simToast}>
                                <span className={classes.toastEmoji}>{savedState.emoji}</span>
                                <div className={classes.toastText}>
                                    <div><strong>{savedState.mood}</strong> saved for <em>{savedState.time}</em></div>
                                    <div className={classes.toastSub}>{savedState.activities} · 0 data uploaded</div>
                                </div>
                            </div>
                        )}

                        <div className={classes.simFooter}>
                            <button className={classes.resetBtn} onClick={resetDemo}>
                                Reset Demo
                            </button>
                            <span className={classes.simNote}>Tap faces & activities to test check-in</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;

