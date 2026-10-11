import classes from './HomeHero.module.css';
import { FiShield, FiCpu, FiLock, FiArrowDown } from 'react-icons/fi';

const HomeHero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.content}>
                <div className={classes.pillBadge}>
                    <FiShield aria-hidden="true" />
                    <span>Radical Privacy & Local-First Software</span>
                </div>

                <h1 className={classes.title}>
                    Software that respects your <span className={classes.highlight}>sovereignty</span>.
                </h1>

                <p className={classes.subtitle}>
                    Zero telemetry. Zero network permissions. On-device intelligence where your personal habits, cyclical time, and wealth never leave your physical hardware.
                </p>

                <div className={classes.actions}>
                    <a href="#apps" className={classes.btnPrimary}>
                        <span>Explore Apps</span>
                        <FiArrowDown aria-hidden="true" />
                    </a>
                    <a href="#principles" className={classes.btnSecondary}>
                        <span>Our Principles</span>
                    </a>
                </div>

                <div className={classes.trustBar}>
                    <div className={classes.trustItem}>
                        <FiLock className={classes.trustIcon} aria-hidden="true" />
                        <span>0 Cloud Trackers & SDKs</span>
                    </div>
                    <div className={classes.trustItem}>
                        <FiCpu className={classes.trustIcon} aria-hidden="true" />
                        <span>100% On-Device Computation</span>
                    </div>
                    <div className={classes.trustItem}>
                        <FiShield className={classes.trustIcon} aria-hidden="true" />
                        <span>Complete Data Portability</span>
                    </div>
                </div>
            </div>

            <div className={classes.glowEffect} aria-hidden="true"></div>
        </section>
    );
};

export default HomeHero;
