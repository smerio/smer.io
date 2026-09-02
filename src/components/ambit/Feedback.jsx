import classes from './Feedback.module.css';
import { FiMail, FiMessageSquare, FiSend, FiGithub } from 'react-icons/fi';

const Feedback = () => {
    return (
        <section className={classes.section} id="feedback">
            <div className={classes.container}>
                <div className={classes.card}>
                    <div className={classes.iconWrap}>
                        <FiMessageSquare size={32} />
                    </div>

                    <h2 className={classes.title}>Help Shape Ambit</h2>
                    <p className={classes.subtitle}>
                        Ambit is currently in active Android beta development. We want to hear from you—whether you have thoughts on the cyclical time philosophy, feature requests for the home screen widget, or bug reports.
                    </p>

                    <div className={classes.buttonGroup}>
                        <a
                            href="mailto:feedback@smer.io?subject=Ambit%20Feedback%20%26%20Feature%20Request"
                            className={`${classes.btn} ${classes.primary}`}
                        >
                            <FiSend aria-hidden="true" />
                            <span>Send Feedback & Ideas (feedback@smer.io)</span>
                        </a>
                        <a
                            href="https://github.com/smerio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${classes.btn} ${classes.secondary}`}
                        >
                            <FiGithub aria-hidden="true" />
                            <span>GitHub Organization</span>
                        </a>
                    </div>

                    <div className={classes.footerNote}>
                        <FiMail className={classes.mailSmall} />
                        <span>Direct inquiries: <code>feedback@smer.io</code> or <code>ambit@smer.io</code></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
