import { useEffect } from 'react';
import classes from './NomosDiscoveries.module.css';
import { FiChevronDown, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const NomosDiscoveries = () => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = 'How Discoveries work — Smerio Nomos';

        if (window.location.hash) {
            const el = document.getElementById(window.location.hash.slice(1));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }

        return () => {
            document.title = prevTitle;
        };
    }, []);

    return (
        <div className={classes.pageWrapper}>
            <div className={classes.container}>
                {/* Desktop Sticky Table of Contents */}
                <aside className={classes.sidebar} aria-label="Table of contents">
                    <div className={classes.sidebarTitle}>Contents</div>
                    <nav>
                        <ul className={classes.navList}>
                            <li><a href="#how-it-works" className={classes.navLink}>How Discoveries finds patterns</a></li>
                            <li><a href="#reading-a-card" className={classes.navLink}>Reading a Discovery card</a></li>
                            <li><a href="#time-lagged-trigger" className={classes.navLink}>Time-lagged trigger</a></li>
                            <li><a href="#high-confidence-driver" className={classes.navLink}>High-confidence driver</a></li>
                            <li><a href="#exploratory-trigger" className={classes.navLink}>Exploratory trigger</a></li>
                            <li><a href="#routine-stack" className={classes.navLink}>Routine stack</a></li>
                            <li><a href="#symptom-co-occurrence" className={classes.navLink}>Symptom co-occurrence</a></li>
                            <li><a href="#mediated-confounder" className={classes.navLink}>Mediated confounder</a></li>
                            <li><a href="#target-goal-driver" className={classes.navLink}>Target goal & rating drivers</a></li>
                            <li><a href="#timing-patterns" className={classes.navLink}>Timing patterns</a></li>
                            <li><a href="#personal-trials" className={classes.navLink}>N-of-1 personal trials</a></li>
                            <li><a href="#trial-verdicts" className={classes.navLink}>What trial results mean</a></li>
                            <li><a href="#getting-better-discoveries" className={classes.navLink}>Tips for better discoveries</a></li>
                            <li><a href="#privacy" className={classes.navLink}>Where analysis happens</a></li>
                            <li><a href="#faq" className={classes.navLink}>FAQ</a></li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Article Content */}
                <main className={classes.mainContent}>
                    {/* Header & Intro */}
                    <header className={classes.header}>
                        <div className={classes.pageCategory}>Smerio Nomos • Insights & Statistics Guide</div>
                        <h1 className={classes.pageTitle}>How Discoveries work</h1>
                        <p className={classes.introLead}>
                            Nomos looks for patterns across everything you log: habits, symptoms, ratings and timing. 
                            When a pattern is strong enough that it's unlikely to be chance, it appears as a card in <strong>Insights → Discoveries</strong>. 
                            All the analysis runs on your phone. Your data is never uploaded.
                        </p>
                    </header>

                    {/* Mobile Collapsible TOC */}
                    <details className={classes.mobileToc}>
                        <summary className={classes.mobileTocSummary}>
                            <span>Jump to section…</span>
                            <FiChevronDown />
                        </summary>
                        <ul className={classes.mobileTocList}>
                            <li><a href="#how-it-works">How Discoveries finds patterns</a></li>
                            <li><a href="#reading-a-card">Reading a Discovery card</a></li>
                            <li><a href="#time-lagged-trigger">Time-lagged trigger</a></li>
                            <li><a href="#high-confidence-driver">High-confidence driver</a></li>
                            <li><a href="#exploratory-trigger">Exploratory trigger</a></li>
                            <li><a href="#routine-stack">Routine stack</a></li>
                            <li><a href="#symptom-co-occurrence">Symptom co-occurrence</a></li>
                            <li><a href="#mediated-confounder">Mediated confounder</a></li>
                            <li><a href="#target-goal-driver">Target goal & rating drivers</a></li>
                            <li><a href="#timing-patterns">Timing patterns</a></li>
                            <li><a href="#personal-trials">N-of-1 personal trials</a></li>
                            <li><a href="#trial-verdicts">What trial results mean</a></li>
                            <li><a href="#getting-better-discoveries">Tips for better discoveries</a></li>
                            <li><a href="#privacy">Where analysis happens</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </details>

                    {/* 1. How Discoveries finds patterns */}
                    <section id="how-it-works" className={classes.section}>
                        <h2 className={classes.sectionTitle}>How Discoveries finds patterns</h2>
                        <ul className={classes.featureList}>
                            <li>
                                <strong>When it runs:</strong> automatically about every 12 hours in the background, and right away when you tap <strong>Scan now</strong> on the Discoveries tab.
                            </li>
                            <li>
                                <strong>What it compares:</strong> days. For each pair of trackers, Nomos counts the days you logged both, only one, or neither. It then checks whether one makes the other more likely than usual. That ratio is the <strong>lift</strong>.
                            </li>
                            <li>
                                <strong>Same day vs. the next day:</strong> it checks two timings. Do X and Y tend to happen <em>on the same day</em>? Does X on one day predict Y <em>the next day</em>? A next-day pattern is a stronger hint about cause, because X came first.
                            </li>
                            <li>
                                <strong>Guarding against chance:</strong> with many trackers there are many possible pairs, and some will line up by luck. Nomos corrects for this (Benjamini–Hochberg false discovery rate, cut-off <span className={classes.mono}>15%</span>), so a card needs real evidence, not just one striking coincidence.
                            </li>
                            <li>
                                <strong>Quiet stretches are skipped:</strong> if nothing at all was logged for more than 7 days in a row, those days are left out so a holiday doesn't distort the result. Ordinary 1–3 day gaps still count.
                            </li>
                            <li>
                                <strong>Minimum data:</strong> comparisons between trackers need at least <strong>12 tracked days</strong>. A same-day pattern needs the two to coincide on at least <strong>4 days</strong>. A next-day pattern needs at least <strong>3</strong> occurrences.
                            </li>
                            <li>
                                <strong>"Symptom" trackers:</strong> Nomos treats a tracker as a symptom or outcome if its name contains one of these words (whole words, plurals and simple endings like "Headaches" or "Stressed" count): headache, migraine, fatigue, insomnia, pain, reflux, stress, anxiety, cramps, soreness, hangover, nausea, rash, bloating, tired, cold, flu, symptom, flare. "Painting" or "Fluids" don't count. Mood ratings are not treated as symptoms. A symptom is never shown as the <em>cause</em> of a habit.
                            </li>
                            <li>
                                <strong>Hidden and archived trackers:</strong> left out of Discoveries entirely, including from the baseline. Hiding a tracker removes its cards on the next scan.
                            </li>
                            <li>
                                <strong>Dismissed cards stay dismissed:</strong> cards you dismiss with ✕ stay dismissed after future scans. Cards that stop meeting the statistical thresholds disappear on their own.
                            </li>
                        </ul>
                    </section>

                    {/* 2. Reading a Discovery card */}
                    <section id="reading-a-card" className={classes.section}>
                        <h2 className={classes.sectionTitle}>Reading a Discovery card</h2>
                        <p className={classes.paragraph}>
                            Each card in your Discoveries feed is constructed with eight key elements:
                        </p>
                        <ol className={classes.featureList}>
                            <li><strong>A badge:</strong> the card type showing the statistical relationship (detailed below).</li>
                            <li><strong>A title:</strong> <span className={classes.mono}>A ➔ B</span> indicates a directional trigger, while <span className={classes.mono}>A + B</span> represents things that co-occur together.</li>
                            <li><strong>A plain sentence:</strong> clear explanation summarizing the finding with key numbers.</li>
                            <li><strong>Outcome probability comparison:</strong> how often B happened <em>with</em> A versus <em>without</em> A. For example, "With Coffee 62% · Without Coffee 31%" means B showed up on twice as many days.</li>
                            <li><strong>Lift:</strong> how much more likely B is with A, as a percentage. <span className={classes.mono}>+100%</span> means twice as likely.</li>
                            <li><strong>Odds ratio:</strong> on applicable cards, another way to express relationship strength (<span className={classes.mono}>1.0×</span> means no relationship).</li>
                            <li><strong>"Test as N-of-1 trial" button:</strong> available wherever a 2-tracker directional trial makes sense.</li>
                            <li><strong>✕ button:</strong> to dismiss cards you do not wish to track further.</li>
                        </ol>
                        <p className={classes.paragraph}>
                            At the top of the feed, you can filter by <strong>All Discoveries</strong>, <strong>Target Goals</strong>, or by individual tracker chips.
                        </p>

                        {/* Static Card Mock */}
                        <div className={classes.cardMock} aria-label="Interactive Discovery Card Visual Example">
                            <div className={classes.mockHeader}>
                                <span className={`${classes.badgeChip} ${classes.badgeCyan}`}>⏳ Time-lagged trigger</span>
                                <span className={classes.mockClose} aria-hidden="true">✕</span>
                            </div>
                            <h3 className={classes.mockTitle}>Coffee ➔ Reflux</h3>
                            <p className={classes.mockDescription}>
                                Reflux is twice as likely on days after drinking coffee.
                            </p>
                            <div className={classes.comparisonBox}>
                                <div className={classes.comparisonLabel}>Outcome Probability Comparison</div>
                                <div className={classes.comparisonRow}>
                                    <span className={classes.rowName}>With Coffee</span>
                                    <div className={classes.barTrack}>
                                        <div className={classes.barFillWith}></div>
                                    </div>
                                    <span className={classes.rowValue}>62%</span>
                                </div>
                                <div className={classes.comparisonRow}>
                                    <span className={classes.rowName}>Without Coffee</span>
                                    <div className={classes.barTrack}>
                                        <div className={classes.barFillWithout}></div>
                                    </div>
                                    <span className={classes.rowValue}>31%</span>
                                </div>
                            </div>
                            <div className={classes.mockStats}>
                                <div className={classes.statItem}>Lift: <span className={classes.statValue}>+100%</span></div>
                                <div className={classes.statItem}>Odds ratio: <span className={classes.statValue}>3.6×</span></div>
                                <div className={classes.statItem}>Confidence: <span className={classes.statValue}>p ≤ 0.04</span></div>
                            </div>
                            <div className={classes.mockActionBtn}>
                                <FiCheckCircle aria-hidden="true" />
                                <span>Test as N-of-1 trial</span>
                            </div>
                        </div>
                    </section>

                    {/* Card Types Section */}
                    <section className={classes.section}>
                        <h2 className={classes.sectionTitle}>Card types</h2>

                        {/* 3. Time-lagged trigger */}
                        <div id="time-lagged-trigger">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeCyan}`}>⏳ Time-lagged trigger</span>
                                <span>Time-lagged trigger</span>
                            </h3>
                            <p className={classes.paragraph}>
                                X on one day is followed by Y <strong>the next day</strong> more often than usual. 
                                The next-day timing makes this the most useful kind of pattern to test, because X strictly precedes Y in time.
                            </p>
                            <div className={classes.exampleBox}>
                                <strong>Example:</strong> "Late dinner ➔ Reflux: reflux rises from 18% to 47% on days after a late dinner."
                            </div>
                            <p className={classes.paragraph}>
                                <strong>Next step:</strong> tap <em>Test as N-of-1 trial</em> to verify the relationship with a controlled elimination trial.
                            </p>
                        </div>

                        {/* 4. High-confidence driver */}
                        <div id="high-confidence-driver">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeCyan}`}>High-confidence driver</span>
                                <span>High-confidence driver</span>
                            </h3>
                            <p className={classes.paragraph}>
                                The same as a time-lagged trigger, but backed by stronger evidence: at least 15 days of data and a very low chance of coincidence (<span className={classes.mono}>p ≤ 0.02</span>). 
                                Inside a single tracker, it indicates that one recorded attribute strongly predicts a symptom-type attribute.
                            </p>
                        </div>

                        {/* 5. Exploratory trigger */}
                        <div id="exploratory-trigger">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeEmerald}`}>🔍 Exploratory trigger</span>
                                <span>Exploratory trigger / exploratory pattern</span>
                            </h3>
                            <p className={classes.paragraph}>
                                On days with X, a symptom-type tracker Y shows up more often, but on the <strong>same day</strong>, so the chronological order isn't known. 
                                The card explicitly indicates whether the sample size is small (under 30 days) or that this is "correlation only, not proof of cause".
                            </p>
                            <p className={classes.paragraph}>
                                <strong>Next step:</strong> treat it as a lead and test it with a personal trial. Be mindful of logging habits: if you only log Y on days you also log X, the pattern can look huge without reflecting real causality.
                            </p>
                        </div>

                        {/* 6. Routine stack */}
                        <div id="routine-stack">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeViolet}`}>🔗 Routine stack</span>
                                <span>Routine stack / habit bundle</span>
                            </h3>
                            <p className={classes.paragraph}>
                                Two habits you tend to do together on the same day, such as "Creatine + Body training". 
                                This describes your personal routine structure; it does not claim that one habit causes the other, so there is no trial button. 
                                Inside one tracker, a <strong>habit bundle</strong> means you usually record two specific attributes together.
                            </p>
                        </div>

                        {/* 7. Symptom co-occurrence */}
                        <div id="symptom-co-occurrence">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeEmerald}`}>⚡ Symptom co-occurrence</span>
                                <span>Symptom co-occurrence</span>
                            </h3>
                            <p className={classes.paragraph}>
                                Two symptom-type trackers tend to appear on the same days, for example "Headache + Nausea". 
                                This is useful observational data to discuss with your healthcare clinician. Nomos does not assume a causal direction, so no personal trial is offered.
                            </p>
                        </div>

                        {/* 8. Mediated confounder */}
                        <div id="mediated-confounder">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeRed}`}>⚠️ Mediated confounder</span>
                                <span>Mediated confounder</span>
                            </h3>
                            <p className={classes.paragraph}>
                                A pattern between X and Y that <strong>disappears</strong> once Nomos accounts for a lifestyle anchor: a tracker whose name contains the word <em>sleep</em>, <em>rest</em>, <em>alcohol</em> or <em>stress</em> (for example "Sleep", "Sleep & Rest", "Stress level"; "Interest" doesn't count).
                            </p>
                            <div className={classes.exampleBox}>
                                <strong>Example:</strong> "Snacks ➔ Headache appears driven by Sleep." Both may simply be consequences of poor sleep the night before.
                            </div>
                            <p className={classes.paragraph}>
                                Nomos shows this as a warning and offers no trial, because the underlying lifestyle anchor is the more meaningful factor to investigate.
                            </p>
                        </div>

                        {/* 9. Target goal driver */}
                        <div id="target-goal-driver">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeGold}`}>Target goal driver</span>
                                <span>Target goal driver · Major driver · Rating impact</span>
                            </h3>
                            <p className={classes.paragraph}>
                                These cards analyze attributes <em>inside</em> an individual tracker:
                            </p>
                            <ul className={classes.featureList}>
                                <li>
                                    <strong>Target goal driver:</strong> an attribute that makes your tracker's target (the attribute marked "Treat as a target goal") significantly more likely, shown with lift and odds ratio.
                                </li>
                                <li>
                                    <strong>Major driver / Rating impact:</strong> a yes/no attribute that shifts a 1–5 rating, such as mood or sleep quality. <em>Major driver</em> means the average rating moves by 1.0 point or more; <em>rating impact</em> indicates a smaller but statistically reliable shift (at least 0.4 points). Nomos validates this using Student's t-test (<span className={classes.mono}>p ≤ 0.08</span>, plus the Benjamini–Hochberg false discovery correction).
                                </li>
                            </ul>
                            <p className={classes.paragraph}>
                                Because these compare attributes within a single tracker (while personal trials require two distinct trackers), these cards do not include a trial button.
                            </p>
                        </div>

                        {/* 10. Timing patterns */}
                        <div id="timing-patterns">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeEmerald}`}>Timing patterns</span>
                                <span>Timing patterns: peak habit · weekend surge · weekday routine</span>
                            </h3>
                            <p className={classes.paragraph}>
                                Timing patterns describe <em>when</em> you log an activity, rather than what it correlates with. A tracker requires at least 8 logged events to evaluate timing:
                            </p>
                            <ul className={classes.featureList}>
                                <li>
                                    <strong>Peak habit:</strong> a weekday and time window where logs cluster (e.g. "3.1× higher on Sundays 20:00–23:00"). It requires at least 3 occurrences in that window and at least 15% of all logs. Night hours only qualify if you genuinely log during the night.
                                </li>
                                <li>
                                    <strong>Weekend surge / weekday routine:</strong> logged at least 1.7× more per day on weekends than weekdays (or vice versa), evaluated against the actual weekend and weekday counts in your personal history.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 11. Personal Trials */}
                    <section id="personal-trials" className={classes.section}>
                        <h2 className={classes.sectionTitle}>N-of-1 personal trials</h2>
                        <p className={classes.paragraph}>
                            A personal trial (an "N-of-1" scientific study: one person, you) tests whether a suspected trigger genuinely influences an outcome <strong>for you</strong>.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>How to start:</strong> on a Discovery card that links two trackers, tap <strong>Test as N-of-1 trial</strong>. The button appears on time-lagged, high-confidence, and exploratory cards. It is not shown on routine stacks, symptom co-occurrences, mediated confounders, or attribute-level drivers.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>How it runs:</strong>
                        </p>
                        <ol className={classes.stepList}>
                            <li className={classes.stepItem}>
                                <strong>Phase 1, Elimination (7 days):</strong> avoid the trigger completely and continue logging the outcome. This establishes your clean baseline rate.
                            </li>
                            <li className={classes.stepItem}>
                                <strong>Phase 2, Reintroduction (7 days):</strong> resume the trigger and continue logging. Does the outcome increase or return?
                            </li>
                        </ol>
                        <p className={classes.paragraph}>
                            The trial card displays "Day N of …", the number of events recorded in each phase, and days tracked. You can tap <strong>Advance to Phase 2</strong> early if needed: the transition date adjusts to that moment and Phase 2 will still run for a full 7 days. When complete, tap <strong>Finalize trial verdict</strong>. You may cancel an active trial at any time.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>What makes a result fair:</strong> both phases share identical duration; logs from before you started the trial are excluded; outcome rates are computed per day and displayed normalized per week.
                        </p>
                        <div className={classes.exampleBox}>
                            <strong>Execution tips:</strong> keep lifestyle variables as consistent as possible (sleep, alcohol, stress). Log the outcome every time it occurs, and log the trigger honestly—including accidental slips. If the outcome is rare (less than once per week), consider running an extended trial.
                        </div>
                    </section>

                    {/* 12. Trial Verdicts */}
                    <section id="trial-verdicts" className={classes.section}>
                        <h2 className={classes.sectionTitle}>What trial results mean</h2>
                        <p className={classes.paragraph}>
                            Once you finalize a trial, Nomos evaluates the event rates across both phases and presents one of six standardized verdicts:
                        </p>

                        <div className={classes.tableWrapper}>
                            <table className={classes.table}>
                                <thead>
                                    <tr>
                                        <th>Result</th>
                                        <th>When it appears</th>
                                        <th>What to do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Causal link supported (strong signal)</span>
                                        </td>
                                        <td>The outcome happened clearly more often during Reintroduction: at least 1.8× the Elimination rate, and at least 3 events in Phase 2.</td>
                                        <td>Strong evidence for <em>you</em>. Consider avoiding the trigger; repeat the trial later to confirm.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Spurious correlation disproven</span>
                                        </td>
                                        <td>The rates in the two phases were nearly the same (within 15%), with at least 2 events in each phase.</td>
                                        <td>The original pattern was probably coincidence.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Outcome decreased during reintroduction</span>
                                        </td>
                                        <td>The outcome went <em>down</em> when you resumed the trigger.</td>
                                        <td>This can't confirm or rule out a cause. Check sleep and stress, or run a longer trial.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>No outcome events</span>
                                        </td>
                                        <td>The outcome never happened in either phase.</td>
                                        <td>The trigger probably wasn't the main driver in this period.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Mixed results</span>
                                        </td>
                                        <td>Anything in between the thresholds above.</td>
                                        <td>Run a longer trial or check for confounders.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Still in progress</span>
                                        </td>
                                        <td>Phase 2 isn't finished yet.</td>
                                        <td>Keep logging.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className={classes.paragraph}>
                            The wording is deliberate: a personal trial provides <em>supporting</em> evidence, not clinical proof.
                        </p>
                    </section>

                    {/* 13. Tips for better discoveries */}
                    <section id="getting-better-discoveries" className={classes.section}>
                        <h2 className={classes.sectionTitle}>Tips for better discoveries</h2>
                        <ul className={classes.featureList}>
                            <li><strong>Log consistently for at least 2–3 weeks:</strong> Discoveries require a minimum of 12 tracked days before running comparisons.</li>
                            <li><strong>Log symptoms when they happen and when they don't:</strong> Statistical patterns rely on contrast between active and inactive days.</li>
                            <li><strong>Name symptom trackers clearly:</strong> Use descriptive names (such as "Headache", not "H") so the engine can identify symptoms and avoid showing them as causes.</li>
                            <li><strong>Track baseline lifestyle anchors:</strong> Add a <em>Sleep</em>, <em>Alcohol</em>, or <em>Stress</em> tracker; Nomos uses these to catch and warn about mediated confounders.</li>
                            <li><strong>Mark target goals:</strong> Set key attributes as "Treat as a target goal" to unlock Target Goal Driver insights.</li>
                            <li><strong>Use Hide from Insights:</strong> If a tracker only introduces noise, hide it from Insights to remove it from discovery baselines.</li>
                        </ul>
                    </section>

                    {/* 14. Where the analysis happens */}
                    <section id="privacy" className={classes.section}>
                        <h2 className={classes.sectionTitle}>Where the analysis happens</h2>
                        <p className={classes.paragraph}>
                            Every calculation—including statistical scans, Benjamini–Hochberg corrections, N-of-1 trials, and verdicts—runs entirely on your phone. 
                            Nomos requires no user account, connects to no cloud servers, includes zero analytics SDKs, and declares <strong>no network permissions</strong> in its Android manifest. Your personal data cannot leave your device.
                        </p>
                        <p className={classes.paragraph}>
                            Opening this online help page is an ordinary web browser visit that transmits none of your local logs or app state.
                        </p>
                    </section>

                    {/* 15. FAQ */}
                    <section id="faq" className={classes.section}>
                        <h2 className={classes.sectionTitle}>Frequently Asked Questions</h2>
                        
                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>Why don't I see any discoveries yet?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                You probably need more tracked days (at least 12) or more variety in your logged days. Keep logging naturally and tap <strong>Scan now</strong> after a couple of weeks.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>Why did a card disappear?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                Recent logs may have weakened the statistical correlation below the significance threshold, or you may have hidden or archived one of the trackers involved.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>The lift looks huge (e.g. +3000%). Is that real?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                A very high lift percentage usually means the outcome is rarely or never logged without the trigger. This frequently reflects a logging habit (only remembering to log symptom Y when also logging habit X) rather than an actual biological effect. An N-of-1 personal trial will help clarify the difference.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>Can I trust a "small sample" card?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                Treat it as a preliminary lead, not a verified finding. As you log more days, the engine will either confirm or discard it.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>Why is there no trial button on this card?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                Personal trials require two separate trackers with an asymmetric, directional relationship. Routine stacks, symptom co-occurrences, confounded patterns, and single-tracker attribute drivers do not qualify for trial testing.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>Is this medical advice?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                No. Discoveries and trial results are mathematical patterns in your own personal logs. Share any interesting findings with a qualified healthcare professional.
                            </div>
                        </details>
                    </section>

                    {/* Disclaimer Footer Note */}
                    <div className={classes.disclaimerBox} role="note">
                        <FiAlertCircle className={classes.disclaimerIcon} aria-hidden="true" />
                        <p className={classes.disclaimerText}>
                            <strong>Medical Disclaimer:</strong> Nomos is a self-tracking tool, not a medical device. Discoveries are patterns in your own logs, not medical advice.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default NomosDiscoveries;
