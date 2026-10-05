import classes from './Feedback.module.css';
import { FiMail, FiUsers, FiExternalLink, FiInfo, FiMessageSquare, FiCheckCircle, FiCheck } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

const BETA_STEPS = [
    {
        num: '1',
        title: 'Join Beta Group',
        desc: 'Join the official Smerio Ambit Google Group to authorize your account for beta tracks.',
        btnText: 'Join Google Group',
        url: 'https://groups.google.com/g/smerio-ambit',
        accent: '#F4A261',
    },
    {
        num: '2',
        title: 'Opt-in on Play Store',
        desc: 'Open Google Play testing opt-in and click "Become a tester" with one click.',
        btnText: 'Opt-in on Play Store',
        url: 'https://play.google.com/apps/testing/io.smer.ambit',
        accent: '#08D9D6',
    },
    {
        num: '3',
        title: 'Get Beta Builds',
        desc: 'Install or update Ambit from Google Play to automatically receive upcoming pre-release features.',
        btnText: 'Open in Play Store',
        url: 'https://play.google.com/store/apps/details?id=io.smer.ambit',
        accent: '#E9C46A',
    },
];

const Feedback = () => {
    return (
        <section className={classes.section} id="download">
            <div id="testing" className={classes.anchorTarget} aria-hidden="true" />
            <div id="beta" className={classes.anchorTarget} aria-hidden="true" />

            <div className={classes.container}>
                <div className={classes.card}>
                    <div className={classes.badge}>Download Ambit · Android</div>
                    <h2 className={classes.title}>Install Ambit on Android</h2>
                    <p className={classes.desc}>
                        Ambit is available now on the Google Play Store. Free, local-first, zero trackers, and no user accounts. Choose the direct public installation below, or optionally join our Beta program for upcoming builds.
                    </p>

                    {/* Direct Public Download Card (No Testing Required) */}
                    <div className={classes.directCard}>
                        <div className={classes.directHeader}>
                            <div className={classes.directBadge}>
                                <FiCheckCircle className={classes.badgeIcon} />
                                <span>Official Public Release · Stable</span>
                            </div>
                            <span className={classes.freeLabel}>No Testing Required</span>
                        </div>

                        <div className={classes.directBody}>
                            <div className={classes.directText}>
                                <h3 className={classes.directTitle}>Install Directly from Google Play</h3>
                                <p className={classes.directDesc}>
                                    Download the stable release immediately to your Android device. No Google Groups, waitlists, or testing programs required. Pure cyclical, distraction-free time awareness.
                                </p>
                                <div className={classes.perksList}>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> Direct 1-Tap Install</span>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> No Account or Sign-up</span>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> 100% On-Device & Offline</span>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> Zero Trackers or Ads</span>
                                </div>
                            </div>

                            <div className={classes.directAction}>
                                <a
                                    href="https://play.google.com/store/apps/details?id=io.smer.ambit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.installBtn}
                                >
                                    <FaGooglePlay size={22} />
                                    <div className={classes.btnTextWrap}>
                                        <span className={classes.btnSub}>GET IT ON</span>
                                        <span className={classes.btnMain}>Google Play</span>
                                    </div>
                                    <FiExternalLink size={16} />
                                </a>
                                <span className={classes.actionHint}>Android 8.0+ · Sandboxed Local DB</span>
                            </div>
                        </div>
                    </div>

                    {/* De-emphasized Collapsed Beta Channel Footnote */}
                    <details className={classes.betaDetails}>
                        <summary className={classes.betaSummary}>
                            <span className={classes.betaSummaryText}>
                                <FiUsers size={16} />
                                <strong>Interested in upcoming experimental builds?</strong> Join the optional Beta channel
                            </span>
                            <span className={classes.betaToggleLabel}>Details ▾</span>
                        </summary>

                        <div className={classes.betaDropdownContent}>
                            <p className={classes.betaDesc}>
                                We test experimental astronomical dials, new widgets, and astrolabe performance updates with early testers before rolling them out to the public Google Play release.
                            </p>

                            <div className={classes.stepsGrid}>
                                {BETA_STEPS.map((s) => (
                                    <div key={s.num} className={classes.stepCard} style={{ '--step-accent': s.accent }}>
                                        <div className={classes.stepNum} style={{ background: `${s.accent}20`, color: s.accent, borderColor: `${s.accent}40` }}>
                                            {s.num}
                                        </div>
                                        <h4 className={classes.stepTitle}>{s.title}</h4>
                                        <p className={classes.stepDesc}>{s.desc}</p>
                                        <a
                                            href={s.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={classes.stepBtn}
                                            style={{ '--btn-accent': s.accent }}
                                        >
                                            <span>{s.btnText}</span>
                                            <FiExternalLink size={13} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className={classes.noticeBanner}>
                                <FiInfo className={classes.noticeIcon} />
                                <div className={classes.noticeContent}>
                                    <strong>Beta Program Note:</strong> Beta builds are pre-release. You can leave the Beta program anytime directly in Google Play to switch back to the stable release.
                                </div>
                            </div>
                        </div>
                    </details>

                    {/* Feedback & Community Section */}
                    <div className={classes.feedbackSection} id="feedback">
                        <h3 className={classes.feedbackTitle}>Feedback, Ideas & Beta Discussions</h3>
                        <p className={classes.feedbackSub}>
                            Post your feature ideas, ring suggestions, and bug reports in the community forum or contact the development team directly:
                        </p>

                        <div className={classes.actionsRow}>
                            <a
                                href="https://groups.google.com/g/smerio-ambit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.communityBtn}
                            >
                                <FiUsers className={classes.btnIcon} />
                                <span>Google Group Community</span>
                                <FiExternalLink className={classes.btnExternal} />
                            </a>

                            <a
                                href="https://groups.google.com/g/smerio-ambit/c/o9aTdn22lqk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.manualBtn}
                            >
                                <FiMessageSquare className={classes.btnIcon} />
                                <span>Tester Manual & Guide</span>
                                <FiExternalLink className={classes.btnExternal} />
                            </a>

                            <a
                                href="mailto:feedback@smer.io?subject=Ambit%20Feedback%20%26%20Feature%20Request"
                                className={classes.emailBtn}
                            >
                                <FiMail className={classes.btnIcon} />
                                <span>Send Direct Email</span>
                            </a>
                        </div>

                        <div className={classes.directEmails}>
                            <span className={classes.emailLabel}>Community & Developer Channels:</span>
                            <div className={classes.emailLinks}>
                                <a href="mailto:smerio-ambit@googlegroups.com"><code>smerio-ambit@googlegroups.com</code></a>
                                <span className={classes.divider}>•</span>
                                <a href="mailto:feedback@smer.io"><code>feedback@smer.io</code></a>
                                <span className={classes.divider}>•</span>
                                <a href="mailto:ambit@smer.io"><code>ambit@smer.io</code></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
