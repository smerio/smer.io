import { useState } from 'react';
import classes from './CausalEngine.module.css';
import { FiTrendingUp, FiCheck, FiArrowRight, FiActivity } from 'react-icons/fi';

const MOOD_FACTORS = [
    { tracker: 'Alcohol', change: '−1.1', status: 'Likely · day after', type: 'likely', isNegative: true },
    { tracker: 'Exercise', change: '+0.7', status: 'Likely · same day', type: 'likely', isNegative: false },
    { tracker: 'Slept badly', change: '−0.7', status: 'Likely · same day', type: 'likely', isNegative: true },
    { tracker: 'Friends', change: '+0.3', status: 'No clear effect · 71 vs 192 days', type: 'neutral', isNegative: false },
    { tracker: 'Magnesium', change: '—', status: 'Collecting · needs 3 more days without it', type: 'collecting', isNegative: null },
];

const TRIAL_STEPS = [
    { phase: 'Phase 1: Elimination', days: 'Days 1–7', desc: 'Completely eliminate suspected trigger (e.g. Late Alcohol) from your evening routine.', status: 'Done' },
    { phase: 'Phase 2: Reintroduction', days: 'Days 8–14', desc: 'Reintroduce habit in controlled quantity to measure symptom recurrence.', status: 'Active' },
    { phase: 'Automated Verdict', days: 'Day 15', desc: 'A chi-square test checks whether the difference between the two phases (relative risk ≥ 1.8) is statistically significant.', status: 'Pending' },
];

const CausalEngine = () => {
    const [activeTrialPhase, setActiveTrialPhase] = useState(1);

    return (
        <section className={classes.section} id="causal-discovery">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>
                        <FiTrendingUp className={classes.badgeIcon} />
                        <span>Honest Statistics</span>
                    </div>
                    <h2 className={classes.title}>What affects your mood</h2>
                    <p className={classes.subtitle}>
                        Every tracker is compared with your mood: on the days you did it versus the days you didn&apos;t, and on the day after.
                    </p>
                </div>

                <div className={classes.mainGrid}>
                    {/* Left Column: What Affects Your Mood Table */}
                    <div className={classes.cardsCol}>
                        <div className={classes.colHeader}>
                            <h3 className={classes.colTitle}>Mood Comparison Feed</h3>
                            <span className={classes.exampleBadge}>Example</span>
                        </div>

                        <div className={classes.tableCard}>
                            <div className={classes.tableWrap}>
                                <table className={classes.moodTable}>
                                    <thead>
                                        <tr>
                                            <th>Tracker</th>
                                            <th>Change in mood (1–5)</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {MOOD_FACTORS.map((row) => (
                                            <tr key={row.tracker}>
                                                <td className={classes.trackerCell}>
                                                    <strong>{row.tracker}</strong>
                                                </td>
                                                <td className={`${classes.changeCell} ${row.isNegative === true ? classes.changeNeg : row.isNegative === false ? classes.changePos : classes.changeNeutral}`}>
                                                    {row.change}
                                                </td>
                                                <td className={classes.statusCell}>
                                                    <span className={`${classes.statusPill} ${classes[row.type]}`}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className={classes.tableFootnote}>
                                *Likely = passed the false-discovery check. Still a correlation, not proof of cause. Nomos checks for confounders and filters out chance findings before it shows you anything.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: N-of-1 Personal Trial Simulator */}
                    <div className={classes.trialCol}>
                        <div className={classes.trialBox}>
                            <div className={classes.trialHeader}>
                                <div className={classes.trialIconBox}>
                                    <FiActivity />
                                </div>
                                <div>
                                    <h3 className={classes.trialTitle}>Test a suspicion with a personal trial</h3>
                                    <span className={classes.trialSub}>2-Phase N-of-1 Experiment</span>
                                </div>
                            </div>

                            <p className={classes.trialIntro}>
                                Stop a suspect for a week, bring it back for a week, and see the difference.
                            </p>

                            <div className={classes.stepper}>
                                {TRIAL_STEPS.map((s, idx) => (
                                    <div
                                        key={idx}
                                        className={`${classes.stepItem} ${idx <= activeTrialPhase ? classes.stepItemActive : ''}`}
                                        onClick={() => setActiveTrialPhase(idx)}
                                    >
                                        <div className={classes.stepIndicator}>
                                            {idx < activeTrialPhase ? <FiCheck /> : idx + 1}
                                        </div>
                                        <div className={classes.stepContent}>
                                            <div className={classes.stepTop}>
                                                <span className={classes.stepPhase}>{s.phase}</span>
                                                <span className={classes.stepDays}>{s.days}</span>
                                            </div>
                                            <p className={classes.stepDesc}>{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Live Interactive Verdict Simulation */}
                            <div className={classes.verdictCard}>
                                <div className={classes.verdictTop}>
                                    <span className={classes.verdictBadge}>🎯 STATISTICAL VERDICT</span>
                                    <span className={classes.verdictRisk}>Relative Risk: RR = 2.4</span>
                                </div>
                                <div className={classes.verdictBody}>
                                    <strong>Clear difference found:</strong> Reintroducing the habit in Phase 2 triggered a 2.4x statistically significant recurrence rate (chi-square p = 0.002).
                                </div>
                                <div className={classes.verdictFooter}>
                                    <button
                                        className={classes.phaseAdvanceBtn}
                                        onClick={() => setActiveTrialPhase((p) => (p + 1) % 3)}
                                    >
                                        <span>Next Protocol Stage</span>
                                        <FiArrowRight />
                                    </button>
                                </div>
                            </div>

                            <p className={classes.trialScopeNote}>
                                *Trials currently work for yes/no outcomes such as symptoms; mood-rating trials are coming.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CausalEngine;
