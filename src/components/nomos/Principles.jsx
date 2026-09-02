import classes from './Principles.module.css';
import { FiZap, FiGrid, FiCpu, FiCheckCircle } from 'react-icons/fi';

const PRINCIPLES = [
    {
        id: 'fast-log',
        icon: <FiZap />,
        accent: '#10B981',
        tag: 'PILLAR 1',
        title: '1-Tap Fast Logging & Zero Friction',
        description:
            'Most trackers fail because multi-step modal forms make daily logging a chore. In Nomos, every habit records in exactly one tap with your personalized default attributes. When you need granularity, expandable drawers offer numeric steppers, rating scales (1–5), and categorical boolean tags in seconds.',
        bullets: [
            '1-Tap logging with pre-configured default values (e.g. 1000 ml water)',
            'Relative time shortcuts: Now, 1h ago, Last Night, Yesterday',
            'Expandable drawer for optional deep attribute adjustments',
            'Full support for boolean chips, 1–5 scales, and numeric inputs with custom units',
        ],
    },
    {
        id: 'momentum',
        icon: <FiGrid />,
        accent: '#6366F1',
        tag: 'PILLAR 2',
        title: 'Visual Momentum & Pixela Heatmaps',
        description:
            'Build honest consistency with GitHub/Pixela-style contribution matrices. Nomos features real-time anchoring—inactive habits display genuine historical gaps rather than skewed timelines. Seamlessly drill down from annual 52-week calendars to monthly views and 24-hour chronological day timelines.',
        bullets: [
            '52-week contribution heatmap grids with 5 intensity ramps',
            'Multi-scale temporal zoom: All Time → Year → Month → Week → 24h Day',
            'Period-aware streaks: consecutive day and period tracking with honest zero-resets',
            '24-Hour circadian density charts revealing morning, afternoon, and night patterns',
        ],
    },
    {
        id: 'causal-discovery',
        icon: <FiCpu />,
        accent: '#06B6D4',
        tag: 'PILLAR 3',
        title: 'On-Device Causal Discovery & Personal Trials',
        description:
            'Move beyond misleading correlations. Nomos runs rigorous on-device statistical engines (Chi-Square exact p-values, False Discovery Rate control, and 2x2 Odds Ratios). Test your lifestyle hypotheses with automated 2-phase N-of-1 elimination experiments (Elimination → Reintroduction → Statistical Verdict).',
        bullets: [
            'Causal classification: Routine Stacks, Time-Lagged Triggers, and Confounder Warnings',
            '2-Phase N-of-1 elimination trial protocols with automated Relative Risk verdicts',
            'Benjamini-Hochberg FDR control to filter out random spurious correlations',
            '100% on-device compute: all statistical modeling executes locally on your phone',
        ],
    },
];

const Principles = () => {
    return (
        <section className={classes.section} id="principles">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>Architecture & Philosophy</div>
                    <h2 className={classes.title}>The Three Pillars of Smerio Nomos</h2>
                    <p className={classes.subtitle}>
                        Designed from first principles to turn daily capture into effortless habit momentum and scientific personal insight.
                    </p>
                </div>

                <div className={classes.grid}>
                    {PRINCIPLES.map((p) => (
                        <div key={p.id} className={classes.card} id={p.id} style={{ '--card-accent': p.accent }}>
                            <div className={classes.cardTop}>
                                <div className={classes.iconBox} style={{ background: `${p.accent}20`, color: p.accent }}>
                                    {p.icon}
                                </div>
                                <span className={classes.tagPill} style={{ color: p.accent, borderColor: `${p.accent}40`, background: `${p.accent}15` }}>
                                    {p.tag}
                                </span>
                            </div>

                            <h3 className={classes.cardTitle}>{p.title}</h3>
                            <p className={classes.cardDesc}>{p.description}</p>

                            <ul className={classes.bulletList}>
                                {p.bullets.map((b, idx) => (
                                    <li key={idx} className={classes.bulletItem}>
                                        <FiCheckCircle className={classes.bulletIcon} style={{ color: p.accent }} />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
