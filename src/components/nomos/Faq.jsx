import { useEffect } from 'react';
import classes from './Faq.module.css';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';

const FAQS = [
    {
        id: 'faq-results-timeline',
        q: 'How long until I see results?',
        a: 'Nomos needs enough days both with and without each activity before it can say anything. Most people see first trends after 2–3 weeks of daily check-ins and solid answers after 4–6. Until then, each tracker shows how many more days it needs. If you import your history from Daylio, you can see results on the first day.',
    },
    {
        id: 'faq-medical-advice',
        q: 'Is this medical advice?',
        a: 'No. Nomos shows patterns in the data you record yourself. A link means two things tend to go together in your history, not that one causes the other. Talk to a doctor about health decisions.',
    },
    {
        id: 'faq-different',
        q: 'How does Smerio Nomos differ from Loop Habit Tracker and other apps?',
        a: 'While Loop is an excellent binary habit tracker, Nomos extends life logging into modular multi-attribute tracking (ratings 1–5, numeric values with units, boolean tags) and automated statistical inference. Nomos doesn’t just record whether you did a habit—it automatically runs Chi-Square tests, Odds Ratios, and personal trials to tell you how habits affect each other.',
    },
    {
        id: 'faq-trials',
        q: 'What are N-of-1 personal trials and why do they matter?',
        a: (
            <>
                An N-of-1 trial is a small experiment with one person: you. If you suspect a habit (like late coffee) affects how you feel or a symptom (like poor sleep or reflux), Nomos runs it in two phases sized to how often you usually do it, from 1 to 4 weeks each: first without it, then with it as usual. It then compares the days you did it with the days without it and labels the result, for example &quot;Likely worse&quot; or &quot;No clear effect&quot;. It&apos;s supporting evidence for you, not medical proof. More in <a href="/nomos/discoveries/#personal-trials">How Discoveries work › Personal trials</a>.
            </>
        ),
    },
    {
        id: 'faq-privacy',
        q: 'How does Nomos guarantee privacy with zero internet permissions?',
        a: 'Nomos does not include android.permission.INTERNET in its application manifest. The Android operating system physically forbids Nomos from opening network connections. The app itself cannot transmit data to any server, ad network or cloud database.',
    },
    {
        id: 'faq-backup',
        q: 'How do I backup or transfer my data to a new device?',
        a: 'Under Settings → Data & backup, you can generate a password-protected .backup snapshot encrypted with AES-256-GCM. You can safely transfer this file to your new device via USB, local SD card, or private drive, and restore it in one tap.',
    },
    {
        id: 'faq-import',
        q: 'Can I import my existing data from Loop Habit Tracker, Daylio or spreadsheets?',
        a: 'Yes. Nomos imports Loop Habit Tracker’s .zip export and Daylio’s backup file (or its CSV export): your moods, activities and notes come across, so "What affects your mood" can show results from your existing history straight away. It also supports generic CSV spreadsheet imports.',
    },
    {
        id: 'faq-testing',
        q: 'How do I download Smerio Nomos on Android?',
        a: 'You can download Smerio Nomos directly from the Google Play Store with a single tap. Simply search for "Smerio Nomos" or visit play.google.com/store/apps/details?id=io.smer.nomos. No waitlists, accounts, or complex onboarding required.',
    },
    {
        id: 'faq-android',
        q: 'Which Android versions and devices are supported?',
        a: 'Nomos supports Android 8.0 (API level 26) and above. It is fully optimized for Android 14 and Android 15 with native Material 3 design, light and dark themes, and edge-to-edge support.',
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
