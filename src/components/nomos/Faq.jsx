import { useEffect } from 'react';
import classes from './Faq.module.css';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';

const FAQS = [
    {
        id: 'faq-different',
        q: 'How does Smerio Nomos differ from Loop Habit Tracker and other apps?',
        a: 'While Loop is an excellent binary habit tracker, Nomos extends life logging into modular multi-attribute tracking (ratings 1–5, numeric values with units, boolean tags) and automated statistical inference. Nomos doesn’t just record whether you did a habit—it automatically runs Chi-Square tests, Odds Ratios, and N-of-1 elimination experiments to tell you how habits affect each other.',
    },
    {
        id: 'faq-trials',
        q: 'What are N-of-1 personal trials and why do they matter?',
        a: 'An N-of-1 trial is an empirical single-subject scientific experiment. If you suspect a habit (like late caffeine or dairy) is causing an adverse symptom (like poor sleep or digestive upset), Nomos sets up a structured 2-phase protocol: 7 days of elimination followed by 7 days of reintroduction. Nomos calculates the Relative Risk (RR) and p-value to provide a statistical verdict.',
    },
    {
        id: 'faq-privacy',
        q: 'How does Nomos guarantee privacy with zero internet permissions?',
        a: 'Nomos does not include android.permission.INTERNET in its application manifest. The Android operating system physically forbids Nomos from opening network connections. No data can ever be transmitted to external servers, ad networks, or cloud databases.',
    },
    {
        id: 'faq-backup',
        q: 'How do I backup or transfer my data to a new device?',
        a: 'Under Settings → Encrypted Backup, you can generate a password-protected .backup snapshot encrypted with AES-256-GCM. You can safely transfer this file to your new device via USB, local SD card, or private drive, and restore it in one tap.',
    },
    {
        id: 'faq-import',
        q: 'Can I import my existing habit logs from Loop Habit Tracker or spreadsheets?',
        a: 'Yes! Nomos includes a dedicated one-tap Loop Habit Tracker (.db / .zip) importer that automatically normalizes names, converts integer multipliers to true decimals, and preserves your streaks. It also supports generic CSV spreadsheet imports.',
    },
    {
        id: 'faq-android',
        q: 'Which Android versions and devices are supported?',
        a: 'Nomos supports Android 8.0 (API level 26) and above. It is fully optimized for Android 14 and Android 15 with native Material 3 design, dynamic color matching, and edge-to-edge support.',
    },
];

const Faq = () => {
    useEffect(() => {
        if (window.location.hash) {
            const el = document.getElementById(window.location.hash.slice(1));
            if (el && el.tagName.toLowerCase() === 'details') {
                el.open = true;
            }
        }
    }, []);

    return (
        <section className={classes.section} id="faq">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>
                        <FiHelpCircle className={classes.badgeIcon} />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className={classes.title}>Frequently Asked Questions</h2>
                    <p className={classes.subtitle}>
                        Everything you need to know about Nomos architecture, statistical engines, and data sovereignty.
                    </p>
                </div>

                <div className={classes.faqList}>
                    {FAQS.map((f) => (
                        <details key={f.id} id={f.id} className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>{f.q}</span>
                                <FiChevronDown className={classes.arrowIcon} />
                            </summary>
                            <div className={classes.faqAnswer}>
                                <p>{f.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
