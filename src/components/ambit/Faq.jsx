import { useEffect } from 'react';
import classes from './Faq.module.css';
import { FiPlus } from 'react-icons/fi';

const faqItems = [
    {
        id: 'faq-release',
        q: 'When is Ambit releasing on the Google Play Store?',
        a: (
            <p>
                Ambit is currently in active closed development for Android. We are completing the core Compose Canvas astronomical rendering engine and Jetpack Glance home screen widgets. Beta builds will be distributed via Google Play Store testing tracks shortly.
            </p>
        ),
    },
    {
        id: 'faq-permissions',
        q: 'Why does Ambit ask for location, and what if I deny it?',
        a: (
            <p>
                Ambit requires your geographic latitude and longitude solely to calculate local sunrise, solar noon, dusk, and twilight angles to the minute. If you decline location access, you can simply type or select your city from the offline database—Ambit will compute your solar geometry with 0 Android permissions requested.
            </p>
        ),
    },
    {
        id: 'faq-privacy-data',
        q: 'Where does my birthdate and reflection data live?',
        a: (
            <p>
                100% on your Android device in a sandboxed local database (Android Room). Ambit operates with zero cloud servers, zero user accounts, and zero telemetry SDKs. We have no way to see your data or your location.
            </p>
        ),
    },
    {
        id: 'faq-arctic',
        q: 'What happens in polar latitudes or above the Arctic Circle?',
        a: (
            <p>
                During polar summer (midnight sun) or polar winter (polar night), the solar day ring gracefully reflects reality: the daylight arc closes completely to 360° or recedes to 0°, with solar elevation smoothly indicated by luminous ring brightness. That is natural astronomical physics, not a software bug.
            </p>
        ),
    },
    {
        id: 'faq-pricing',
        q: 'What is the pricing model?',
        a: (
            <p>
                Ambit follows the ethical software ethos of the Smerio ecosystem. No predatory recurring subscriptions or &ldquo;freemium&rdquo; streaks. An app whose philosophical core is that time is not a monetizable commodity will never lock basic reflections behind subscription paywalls.
            </p>
        ),
    },
    {
        id: 'faq-backup',
        q: 'How do I back up or transfer my data?',
        a: (
            <p>
                Ambit integrates with native Android Auto Backup and provides a clean one-click plain text export. If you switch phones, your sealed history moves with your standard Google Drive device backup or manual export file.
            </p>
        ),
    },
];

const Faq = () => {
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id) {
            const el = document.getElementById(id);
            if (el && el.tagName === 'DETAILS') {
                el.setAttribute('open', '');
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    return (
        <section className={classes.section} id="faq">
            <div className={classes.container}>
                <div className={classes.header}>
                    <span className={classes.eyebrow}>Frequently Asked Questions</span>
                    <h2 className={classes.title}>Questions & Answers</h2>
                </div>

                <div className={classes.list}>
                    {faqItems.map((it) => (
                        <details key={it.id} id={it.id} className={classes.item}>
                            <summary className={classes.summary}>
                                <span>{it.q}</span>
                                <FiPlus className={classes.chevron} aria-hidden="true" />
                            </summary>
                            <div className={classes.answer}>{it.a}</div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
