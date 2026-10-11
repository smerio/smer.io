import classes from './SovereigntyPillars.module.css';
import { FiShieldOff, FiCpu, FiHardDrive } from 'react-icons/fi';

const SovereigntyPillars = () => {
    return (
        <section id="principles" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <span className={classes.tag}>The Smerio Standard</span>
                    <h2 className={classes.title}>Why We Build Differently</h2>
                    <p className={classes.subtitle}>
                        Most consumer software relies on constant telemetry, centralized user databases, and subscription lock-in. 
                        We build for users who demand physical data independence.
                    </p>
                </div>

                <div className={classes.grid}>
                    <div className={classes.pillarCard}>
                        <div className={classes.iconWrapper}>
                            <FiShieldOff aria-hidden="true" />
                        </div>
                        <h3 className={classes.pillarTitle}>Zero Network Permissions</h3>
                        <p className={classes.pillarText}>
                            Where possible, our apps do not even request internet access in their Android manifests. 
                            When software physically cannot reach the network, your private habits, symptoms, and reflections cannot be leaked, scraped, or compromised.
                        </p>
                    </div>

                    <div className={classes.pillarCard}>
                        <div className={classes.iconWrapper}>
                            <FiCpu aria-hidden="true" />
                        </div>
                        <h3 className={classes.pillarTitle}>On-Device Silicon Intelligence</h3>
                        <p className={classes.pillarText}>
                            We do not upload your personal logs to third-party cloud models. From astronomical solar ephemeris calculations to Benjamini–Hochberg statistical discoveries and N-of-1 trial engines, all computation runs entirely on your device.
                        </p>
                    </div>

                    <div className={classes.pillarCard}>
                        <div className={classes.iconWrapper}>
                            <FiHardDrive aria-hidden="true" />
                        </div>
                        <h3 className={classes.pillarTitle}>Hardware Sovereignty & Open Data</h3>
                        <p className={classes.pillarText}>
                            Your records belong to you, not our servers. Everything is stored in standard local databases (SQLite, Room) with hardware AES-256 encryption. Export clean JSON or CSV files anytime with zero proprietary barriers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SovereigntyPillars;
