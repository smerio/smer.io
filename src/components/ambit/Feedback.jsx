import classes from './Feedback.module.css';
import { FiMail, FiUsers, FiExternalLink, FiInfo, FiMessageSquare } from 'react-icons/fi';

const STEPS = [
    {
        num: '1',
        title: 'Join Tester Group',
        desc: 'Join the official Smerio Ambit Google Group to get authorized on Google Play.',
        btnText: 'Join Google Group',
        url: 'https://groups.google.com/g/smerio-ambit',
        accent: '#F4A261',
    },
    {
        num: '2',
        title: 'Opt-in to Testing',
        desc: 'Open the testing opt-in page and click the "Become a tester" button.',
        btnText: 'Opt-in on Play Store',
        url: 'https://play.google.com/apps/testing/io.smer.ambit',
        accent: '#08D9D6',
    },
    {
        num: '3',
        title: 'Install from Play Store',
        desc: 'Open the Google Play store listing on your Android device and click "Install".',
        btnText: 'Install App (Play Store)',
        url: 'https://play.google.com/store/apps/details?id=io.smer.ambit',
        accent: '#E9C46A',
    },
];

const Feedback = () => {
    return (
        <section className={classes.section} id="testing">
            <div className={classes.container}>
                <div className={classes.card}>
                    <div className={classes.badge}>Alpha Testing & Community</div>
                    <h2 className={classes.title}>Join Ambit Closed Testing</h2>
                    <p className={classes.desc}>
                        Ambit is actively in closed testing on Google Play. Follow these 3 simple steps to get early access on your Android phone and help shape the future of cyclical, distraction-free time tracking.
                    </p>

                    {/* 3-Step Testing Onboarding Flow */}
                    <div className={classes.stepsGrid}>
                        {STEPS.map((s) => (
                            <div key={s.num} className={classes.stepCard} style={{ '--step-accent': s.accent }}>
                                <div className={classes.stepNum} style={{ background: `${s.accent}20`, color: s.accent, borderColor: `${s.accent}40` }}>
                                    {s.num}
                                </div>
                                <h3 className={classes.stepTitle}>{s.title}</h3>
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

                    {/* 14-Day Notice Banner */}
                    <div className={classes.noticeBanner}>
                        <FiInfo className={classes.noticeIcon} />
                        <div className={classes.noticeContent}>
                            <strong>Testing Program Note:</strong> Please remain enrolled in the closed testing program for at least <strong>14 consecutive days</strong> to help us qualify for the open Google Play production release.
                        </div>
                    </div>

                    {/* Feedback & Feature Requests Section */}
                    <div className={classes.feedbackSection} id="feedback">
                        <h3 className={classes.feedbackTitle}>Feedback, Ideas & Feature Requests</h3>
                        <p className={classes.feedbackSub}>
                            Post your feature requests and bug reports in the Google Group forum or send direct emails to the core development team:
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
