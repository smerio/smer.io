import classes from './Features.module.css';
import { FiSunset, FiGrid, FiCompass, FiCpu } from 'react-icons/fi';

const features = [
    {
        icon: <FiSunset size={26} />,
        title: 'Seal the Day Ritual',
        tagline: 'Evening Closure',
        desc: 'At local civil twilight, Ambit gently invites you to review today’s completed circle. Confirm closure with a single mindful hold-to-complete gesture, settling the day’s ring into your seasonal arc.',
    },
    {
        icon: <FiGrid size={26} />,
        title: 'Ambient Android Widget',
        tagline: 'Zero Clutter',
        desc: 'Engineered with Jetpack Glance for Android home screens. Renders a bitmap of your live solar position on a calm 15-minute cadence without battery drain or ticking numbers.',
    },
    {
        icon: <FiCompass size={26} />,
        title: 'Seasonal Compass & Archetypes',
        tagline: 'Philosophical Milestones',
        desc: 'Frames your life chapters through archetypal seasons (Foundation, Bloom, Incubation, Harvest). Compare your journey to historical thinkers and artists who bloomed late or embraced fallow years.',
    },
    {
        icon: <FiCpu size={26} />,
        title: '100% Local-First & Offline',
        tagline: 'No Accounts Ever',
        desc: 'All astronomical solar positions and lived-year calculations happen strictly on your Android device. No accounts, no telemetry, no tracking servers, and fully operational without internet connectivity.',
    },
];

const Features = () => {
    return (
        <section className={classes.section} id="features">
            <div className={classes.container}>
                <div className={classes.header}>
                    <span className={classes.eyebrow}>Core Capabilities</span>
                    <h2 className={classes.title}>
                        Crafted for Android. <br />
                        <span className={classes.highlight}>Dignified, calm, and private.</span>
                    </h2>
                    <p className={classes.lead}>
                        Every detail is designed to bring you into the present moment without notifications, streaks, or engagement traps.
                    </p>
                </div>

                <div className={classes.grid}>
                    {features.map((f, i) => (
                        <div key={i} className={classes.card}>
                            <div className={classes.iconWrap}>{f.icon}</div>
                            <span className={classes.tagline}>{f.tagline}</span>
                            <h3 className={classes.cardTitle}>{f.title}</h3>
                            <p className={classes.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
