import classes from './Philosophy.module.css';
import { FiClock, FiRepeat, FiCheckCircle } from 'react-icons/fi';

const Philosophy = () => {
    return (
        <section className={classes.section} id="philosophy">
            <div className={classes.container}>
                <div className={classes.header}>
                    <span className={classes.eyebrow}>The Philosophy</span>
                    <h2 className={classes.title}>
                        Why another clock? <br />
                        <span className={classes.highlight}>Time is cyclical, not a panic grid.</span>
                    </h2>
                    <p className={classes.lead}>
                        Modern digital calendars and productivity apps treat time like an assembly line—an endless, anxiety-inducing countdown where every passing second is permanently lost. Ambit restores the natural, fractal rhythm of time.
                    </p>
                </div>

                <div className={classes.grid}>
                    <div className={classes.card}>
                        <div className={classes.iconWrapLinear}>
                            <FiClock size={24} />
                        </div>
                        <h3 className={classes.cardTitle}>The Linear Illusion</h3>
                        <p className={classes.cardText}>
                            Countdown clocks and &ldquo;weeks left to live&rdquo; grids encourage existential dread and manic optimization. They frame your life as a depleting battery, pushing you to treat today solely as an instrument for tomorrow.
                        </p>
                    </div>

                    <div className={classes.cardHighlight}>
                        <div className={classes.iconWrapCyclical}>
                            <FiRepeat size={24} />
                        </div>
                        <h3 className={classes.cardTitle}>Concentric Circles</h3>
                        <p className={classes.cardText}>
                            Inspired by Roman Stoic Seneca, Ambit recognizes that a single day mirrors the architecture of an entire lifetime: dawn is birth, midday is peak vigor, dusk is reflection, and night is fallow rest.
                        </p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.iconWrapCheck}>
                            <FiCheckCircle size={24} />
                        </div>
                        <h3 className={classes.cardTitle}>Mindful Presence</h3>
                        <p className={classes.cardText}>
                            Living one complete 24-hour cycle in presence means living a miniature lifetime fully. The active outer ring remains an open arc—reminding you that the future is unwritten, unhurried, and yours.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
