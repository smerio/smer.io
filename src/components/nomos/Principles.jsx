import classes from './Principles.module.css';
import { FiSmile, FiTrendingUp, FiZap, FiCheckCircle } from 'react-icons/fi';

const PRINCIPLES = [
    {
        id: 'fast-log',
        icon: <FiSmile />,
        accent: '#10B981',
        tag: 'PILLAR 1',
        title: 'One check-in a day',
        description:
            'Rate your mood with five faces and tick what happened: sleep, exercise, coffee, friends. Leave unticked what didn\'t happen; that\'s data too. "Same as the day before" fills in a routine day, and you can answer straight from the evening reminder or the Mood widget on your home screen.',
        bullets: [
            'Five faces, from Awful to Great',
            'Your activities as one-tap chips',
            'Answer from the reminder notification or the 4×1 Mood widget',
            'Your mood is never filled in with a default value',
        ],
    },
    {
        id: 'causal-discovery',
        icon: <FiTrendingUp />,
        accent: '#06B6D4',
        tag: 'PILLAR 2',
        title: 'What affects your mood',
        description:
            'Nomos compares the days you did something with the days you didn\'t, on the same day and the day after, and lists every tracker as Likely, No clear effect or Collecting, with how many more days it still needs.',
        bullets: [
            'Same-day and next-day links (last night\'s drinks, today\'s mood)',
            'False-discovery control, so random coincidences don\'t turn into findings',
            'Says "No clear effect" instead of inventing a link',
            'First trends after 2–3 weeks of check-ins, solid answers in 4–6',
        ],
        footnote: 'A link is a pattern in your own data, not proof of cause.',
    },
    {
        id: 'momentum',
        icon: <FiZap />,
        accent: '#8B5CF6',
        tag: 'PILLAR 3',
        title: 'Habits, heatmaps and one-tap logging',
        description:
            'Every habit, symptom or amount gets its own button: one tap records it with your usual value, and one more tap changes the amount or time. Heatmaps and period-aware streaks show your consistency over weeks and months.',
        bullets: [
            'One-tap logging with your default values (e.g. 1000 ml water)',
            'Now / 1h ago / Last night / Yesterday shortcuts',
            '52-week heatmaps, monthly and weekday charts',
            'Daily, weekly and monthly goals with honest streaks',
        ],
    },
];

const Principles = () => {
    return (
        <section className={classes.section} id="principles">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>Architecture & Philosophy</div>
                    <h2 className={classes.title}>How Nomos works</h2>
                    <p className={classes.subtitle}>
                        A daily check-in, honest statistics, and your habits, all on your phone.
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

                            {p.footnote && (
                                <p className={classes.cardFootnote}>
                                    <em>{p.footnote}</em>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
