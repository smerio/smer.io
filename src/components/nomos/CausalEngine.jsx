import { useState } from 'react';
import classes from './CausalEngine.module.css';
import { FiCpu, FiAlertTriangle, FiClock, FiCheck, FiArrowRight, FiActivity, FiHelpCircle } from 'react-icons/fi';

const DISCOVERIES = [
    {
        id: 'lag',
        badge: '⏳ TIME-LAGGED TRIGGER',
        badgeClass: 'badgeCyan',
        title: 'Late Alcohol ➔ Sleep Restlessness',
        hypothesis: 'Consuming alcohol after 21:00 significantly degrades sleep restfulness the following night.',
        stats: { lift: '+84.2% Risk', or: '3.42', pVal: 'p < 0.001', n: '118 entries' },
        actionText: 'Launch N-of-1 Trial',
        canTrial: true,
    },
    {
        id: 'stack',
        badge: '🔗 ROUTINE STACK',
        badgeClass: 'badgePurple',
        title: 'Creatine + Resistance Training',
        hypothesis: 'Symmetric intentional behavior bundle. High co-occurrence identified without negative causation.',
        stats: { lift: '94.6% Synergy', or: '12.8', pVal: 'p < 0.0001', n: '82 entries' },
        actionText: 'Reinforce Stack',
        canTrial: false,
    },
    {
        id: 'confounder',
        badge: '⚠️ MEDIATED CONFOUNDER',
        badgeClass: 'badgeRed',
        title: 'Banana ➔ Migraine (Spurious)',
        hypothesis: 'Correlation drops to 0 when stratified by Sleep Deprivation. Bananas are consumed as comfort food after poor sleep.',
        stats: { lift: 'Stratified Drop', or: '1.04 (Adj)', pVal: 'p = 0.68', n: '94 entries' },
        actionText: 'View Confounder Graph',
        canTrial: false,
    },
];

const TRIAL_STEPS = [
    { phase: 'Phase 1: Elimination', days: 'Days 1–7', desc: 'Completely eliminate suspected trigger (e.g. Late Alcohol) from your evening routine.', status: 'Done' },
    { phase: 'Phase 2: Reintroduction', days: 'Days 8–14', desc: 'Reintroduce habit in controlled quantity to measure symptom recurrence.', status: 'Active' },
    { phase: 'Automated Verdict', days: 'Day 15', desc: 'Chi-square calculation determines if causal relative risk RR ≥ 1.8 is statistically confirmed.', status: 'Pending' },
];

const CausalEngine = () => {
    const [activeTrialPhase, setActiveTrialPhase] = useState(1);
    const [selectedCard, setSelectedCard] = useState(DISCOVERIES[0]);

    return (
        <section className={classes.section} id="causal-discovery">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>
                        <FiCpu className={classes.badgeIcon} />
                        <span>Scientific Discovery</span>
                    </div>
                    <h2 className={classes.title}>On-Device Causal Discovery & Personal Trials</h2>
                    <p className={classes.subtitle}>
                        Don&apos;t settle for superficial correlations. Nomos isolates genuine drivers with contingency matrices, confounder stratification, and 14-day N-of-1 elimination protocols.
                    </p>
                </div>

                <div className={classes.mainGrid}>
                    {/* Left Column: Discovery Cards */}
                    <div className={classes.cardsCol}>
                        <h3 className={classes.colTitle}>Automated Pattern Scan</h3>
                        <div className={classes.cardsList}>
                            {DISCOVERIES.map((d) => (
                                <div
                                    key={d.id}
                                    className={`${classes.discoveryCard} ${selectedCard.id === d.id ? classes.discoveryCardActive : ''}`}
                                    onClick={() => setSelectedCard(d)}
                                >
                                    <div className={classes.cardHeader}>
                                        <span className={`${classes.tagBadge} ${classes[d.badgeClass]}`}>{d.badge}</span>
                                        <span className={classes.sampleSize}>{d.stats.n}</span>
                                    </div>
                                    <h4 className={classes.discTitle}>{d.title}</h4>
                                    <p className={classes.discHypothesis}>{d.hypothesis}</p>

                                    <div className={classes.statsRow}>
                                        <div className={classes.statBox}>
                                            <span className={classes.statLabel}>Lift / Effect</span>
                                            <span className={classes.statVal}>{d.stats.lift}</span>
                                        </div>
                                        <div className={classes.statBox}>
                                            <span className={classes.statLabel}>Odds Ratio (OR)</span>
                                            <span className={classes.statVal}>{d.stats.or}</span>
                                        </div>
                                        <div className={classes.statBox}>
                                            <span className={classes.statLabel}>Confidence</span>
                                            <span className={classes.statVal}>{d.stats.pVal}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                    <h3 className={classes.trialTitle}>2-Phase N-of-1 Personal Trial</h3>
                                    <span className={classes.trialSub}>Protocol for: {selectedCard.title}</span>
                                </div>
                            </div>

                            <p className={classes.trialIntro}>
                                Eliminate guesswork. Nomos guides you through an empirical single-subject trial protocol:
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
                                    <strong>Causal Link Confirmed:</strong> Reintroducing the habit in Phase 2 triggered a 2.4x statistically significant recurrence rate (p = 0.002, FDR q ≤ 0.05).
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CausalEngine;
