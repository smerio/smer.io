import classes from './Feedback.module.css';
import { FiMail, FiMessageSquare, FiExternalLink } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

const Feedback = () => {
    return (
        <section className={classes.section} id="feedback">
            <div className={classes.container}>
                <div className={classes.card}>
                    <div className={classes.badge}>Closed Beta & Community</div>
                    <h2 className={classes.title}>Shape the Future of Smerio Nomos</h2>
                    <p className={classes.desc}>
                        Nomos is actively evolving in closed testing on Google Play. Whether you want to request custom statistical charts, suggest new attribute data types, or report a bug, we read every single email.
                    </p>

                    <div className={classes.actionsRow}>
                        <a
                            href="https://play.google.com/apps/testing/io.smer.nomos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.playBtn}
                        >
                            <FaGooglePlay className={classes.btnIcon} />
                            <span>Join Google Play Closed Testing</span>
                            <FiExternalLink className={classes.btnExternal} />
                        </a>

                        <a
                            href="mailto:feedback@smer.io?subject=Nomos%20Feedback%20%26%20Feature%20Request"
                            className={classes.emailBtn}
                        >
                            <FiMail className={classes.btnIcon} />
                            <span>Send Feedback & Ideas</span>
                        </a>
                    </div>

                    <div className={classes.directEmails}>
                        <span className={classes.emailLabel}>Direct Developer Inboxes:</span>
                        <div className={classes.emailLinks}>
                            <code>feedback@smer.io</code>
                            <span className={classes.divider}>•</span>
                            <code>nomos@smer.io</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
