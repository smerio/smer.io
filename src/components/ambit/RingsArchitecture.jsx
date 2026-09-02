import classes from './RingsArchitecture.module.css';

const RingsArchitecture = () => {
    return (
        <section className={classes.section} id="rings">
            <div className={classes.container}>
                <div className={classes.header}>
                    <span className={classes.eyebrow}>The Architecture</span>
                    <h2 className={classes.title}>
                        Three concentric rings. <br />
                        <span className={classes.highlight}>One unified clock.</span>
                    </h2>
                    <p className={classes.lead}>
                        Every scale of time is nested inside the next. Ambit represents your current moment within three harmonious visual orbits.
                    </p>
                </div>

                <div className={classes.ringsGrid}>
                    {/* Ring 1 */}
                    <div className={classes.ringCard}>
                        <div className={classes.ringVisual}>
                            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
                                <path d="M 88 50 A 38 38 0 0 1 12 50" stroke="#F4A261" strokeWidth="7" strokeLinecap="round" />
                                <circle cx="12" cy="50" r="5.5" fill="#FFF6E4" />
                            </svg>
                        </div>
                        <div className={classes.ringContent}>
                            <span className={classes.ringLabel}>Ring 01 · The Microcosm</span>
                            <h3 className={classes.ringTitle}>The Solar Day</h3>
                            <p className={classes.ringDesc}>
                                Sunrise, solar noon, and civil dusk drawn to the exact minute for your location. Midnight sits at the top, allowing you to watch the daylight arc dynamically expand in summer and contract in winter.
                            </p>
                            <div className={classes.featurePill}>Calculated on-device to the minute</div>
                        </div>
                    </div>

                    {/* Ring 2 */}
                    <div className={classes.ringCard}>
                        <div className={classes.ringVisual}>
                            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
                                <path d="M 50 12 A 38 38 0 0 1 88 50" stroke="#E9C46A" strokeWidth="7" strokeLinecap="round" />
                                <path d="M 50 4 L 50 20 M 96 50 L 80 50 M 50 96 L 50 80 M 4 50 L 20 50" stroke="rgba(255,255,255,0.34)" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className={classes.ringContent}>
                            <span className={classes.ringLabel}>Ring 02 · The Natural Cycle</span>
                            <h3 className={classes.ringTitle}>The Seasonal Year</h3>
                            <p className={classes.ringDesc}>
                                Solstice to solstice, divided into four astronomical quadrants. Ambit shows how many days you are past the last solar turning point and how far to the next—anchoring your plans to organic seasons rather than corporate quarters.
                            </p>
                            <div className={classes.featurePill}>Astronomical equinox & solstice tracking</div>
                        </div>
                    </div>

                    {/* Ring 3 */}
                    <div className={classes.ringCard}>
                        <div className={classes.ringVisual}>
                            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
                                <circle cx="50" cy="50" r="28" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
                                <circle cx="50" cy="50" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
                                <path d="M 88 50 A 38 38 0 0 1 62 86" stroke="#D97736" strokeWidth="6" strokeLinecap="round" />
                                <circle cx="50" cy="50" r="6" fill="#F4A261" />
                            </svg>
                        </div>
                        <div className={classes.ringContent}>
                            <span className={classes.ringLabel}>Ring 03 · The Macrocosm</span>
                            <h3 className={classes.ringTitle}>The Lived Life</h3>
                            <p className={classes.ringDesc}>
                                One concentric ring for every year you have lived, growing outward from birth like the dendrochronology rings of an ancient cedar tree. The current active ring remains an open arc—an open invitation to the unwritten future.
                            </p>
                            <div className={classes.featurePill}>Zero death countdowns · Open horizon</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RingsArchitecture;
