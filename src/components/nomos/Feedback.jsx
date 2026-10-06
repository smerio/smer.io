import classes from './Feedback.module.css';
import { FiMail, FiUsers, FiExternalLink, FiInfo, FiMessageSquare, FiCheckCircle, FiCheck } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

const BETA_STEPS = [
    {
        num: '1',
        title: 'Join Tester Group',
        desc: 'Join the official Smerio Nomos Google Group to authorize your account for pre-release tracks.',
        btnText: 'Join Google Group',
        url: 'https://groups.google.com/g/smerio-nomos',
        accent: '#10B981',
    },
    {
        num: '2',
        title: 'Opt-in on Play Store',
        desc: 'Open Google Play testing opt-in and click "Become a tester" with one click.',
        btnText: 'Opt-in on Play Store',
        url: 'https://play.google.com/apps/testing/io.smer.nomos',
        accent: '#06B6D4',
    },
    {
        num: '3',
        title: 'Get Beta Builds',
        desc: 'Install or update Nomos from Google Play to automatically receive upcoming experimental features.',
        btnText: 'Open in Play Store',
        url: 'https://play.google.com/store/apps/details?id=io.smer.nomos',
        accent: '#F59E0B',
    },
];

const Feedback = () => {
    return (
        <section className={classes.section} id="download">
            <div id="testing" className={classes.anchorTarget} aria-hidden="true" />
            <div id="beta" className={classes.anchorTarget} aria-hidden="true" />

            <div className={classes.container}>
                <div className={classes.card}>
                    <div className={classes.badge}>Download Smerio Nomos · Android</div>
                    <h2 className={classes.title}>Install Smerio Nomos on Android</h2>
                    <p className={classes.desc}>
                        Nomos is available directly on Google Play. 100% offline, zero trackers, zero network permissions, and hardware-backed local encryption.
                    </p>

                    {/* Direct Public Download Card (Single-Click Google Play CTA) */}
                    <div className={classes.directCard}>
                        <div className={classes.directHeader}>
                            <div className={classes.directBadge}>
                                <FiCheckCircle className={classes.badgeIcon} />
                                <span>Official Release · Google Play</span>
                            </div>
                            <span className={classes.freeLabel}>Direct Install</span>
                        </div>

                        <div className={classes.directBody}>
                            <div className={classes.directText}>
                                <h3 className={classes.directTitle}>Get it on Google Play</h3>
                                <p className={classes.directDesc}>
                                    Download Nomos immediately to your Android device with a single click. No mandatory group memberships or waitlists required. Experience fast 1-tap habit logging and on-device causal discovery.
                                </p>
                                <div className={classes.perksList}>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> Direct 1-Tap Install</span>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> 0 Network Permissions</span>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> AES-256-GCM Encryption</span>
                                    <span className={classes.perkItem}><FiCheck className={classes.perkIcon} /> Zero Accounts or Ads</span>
                                </div>
                            </div>

                            <div className={classes.directAction}>
                                <a
                                    href="https://play.google.com/store/apps/details?id=io.smer.nomos"
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

                    {/* Optional De-emphasized Collapsed Beta Channel Footnote */}
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
                                We test new statistical models, custom visualization scales, and automated N-of-1 trial protocols with community testers before general deployment.
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
                        <h3 className={classes.feedbackTitle}>Feedback, Ideas & Feature Requests</h3>
                        <p className={classes.feedbackSub}>
                            Post your feature ideas in the group forum or send direct emails to the core development team:
                        </p>

                        <div className={classes.actionsRow}>
                            <a
                                href="https://groups.google.com/g/smerio-nomos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.communityBtn}
                            >
                                <FiUsers className={classes.btnIcon} />
                                <span>Google Group Community</span>
                                <FiExternalLink className={classes.btnExternal} />
                            </a>

                            <a
                                href="https://groups.google.com/g/smerio-nomos/c/KJAPpk7WxWY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.manualBtn}
                            >
                                <FiMessageSquare className={classes.btnIcon} />
                                <span>Tester Manual & Guide</span>
                                <FiExternalLink className={classes.btnExternal} />
                            </a>

                            <a
                                href="mailto:feedback@smer.io?subject=Nomos%20Feedback%20%26%20Feature%20Request"
                                className={classes.emailBtn}
                            >
                                <FiMail className={classes.btnIcon} />
                                <span>Send Direct Email</span>
                            </a>
                        </div>

                        <div className={classes.directEmails}>
                            <span className={classes.emailLabel}>Community & Developer Channels:</span>
                            <div className={classes.emailLinks}>
                                <a href="mailto:smerio-nomos@googlegroups.com"><code>smerio-nomos@googlegroups.com</code></a>
                                <span className={classes.divider}>•</span>
                                <a href="mailto:feedback@smer.io"><code>feedback@smer.io</code></a>
                                <span className={classes.divider}>•</span>
                                <a href="mailto:nomos@smer.io"><code>nomos@smer.io</code></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;

