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
                            <li><a href="#reading-a-card" className={classes.navLink}>Reading a pattern card</a></li>
                            <li><a href="#time-lagged-trigger" className={classes.navLink}>Time-lagged trigger</a></li>
                            <li><a href="#high-confidence-driver" className={classes.navLink}>High-confidence driver</a></li>
                            <li><a href="#exploratory-trigger" className={classes.navLink}>Exploratory trigger</a></li>
                            <li><a href="#routine-stack" className={classes.navLink}>Routine stack</a></li>
                            <li><a href="#symptom-co-occurrence" className={classes.navLink}>Symptom co-occurrence</a></li>
                            <li><a href="#mediated-confounder" className={classes.navLink}>Mediated confounder</a></li>
                            <li><a href="#target-goal-driver" className={classes.navLink}>Target goal & rating drivers</a></li>
                            <li><a href="#what-affects-mood" className={classes.navLink}>What affects your mood</a></li>
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
                            Nomos looks for patterns across everything you log: habits, symptoms, ratings and timing. What affects how you feel appears in <strong>Insights → Discoveries</strong>. Patterns in your habits (when you do something, what goes together, possible triggers) appear in <strong>Insights → Trends</strong>, on the page of each tracker involved, under <strong>What stands out</strong>. All the analysis runs on your phone. Your data is never uploaded.
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
                            <li><a href="#reading-a-card">Reading a pattern card</a></li>
                            <li><a href="#time-lagged-trigger">Time-lagged trigger</a></li>
                            <li><a href="#high-confidence-driver">High-confidence driver</a></li>
                            <li><a href="#exploratory-trigger">Exploratory trigger</a></li>
                            <li><a href="#routine-stack">Routine stack</a></li>
                            <li><a href="#symptom-co-occurrence">Symptom co-occurrence</a></li>
                            <li><a href="#mediated-confounder">Mediated confounder</a></li>
                            <li><a href="#target-goal-driver">Target goal & rating drivers</a></li>
                            <li><a href="#what-affects-mood">What affects your mood</a></li>
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

                    {/* 2. Reading a pattern card */}
                    <section id="reading-a-card" className={classes.section}>
                        <h2 className={classes.sectionTitle}>Reading a pattern card</h2>
                        <p className={classes.paragraph}>
                            Open <strong>Insights → Trends</strong> and pick a tracker. If the scan found something about it, a <strong>What stands out</strong> card sits above the charts. Each pattern in it has:
                        </p>
                        <ol className={classes.featureList}>
                            <li>
                                <strong>A label</strong> for its kind:
                                <ul style={{ marginTop: '0.35rem', paddingLeft: '1.25rem' }}>
                                    <li><strong>When</strong>: a time you do it most (peak habit, more on weekends, more on weekdays).</li>
                                    <li><strong>Goes together</strong>: two habits you tend to do on the same day, or two details you record in the same log.</li>
                                    <li><strong>Possible trigger</strong>: something that might bring on a symptom, the same day or the day after.</li>
                                    <li><strong>Pattern</strong>: anything else, such as two symptoms that come together or a pattern explained by another factor.</li>
                                </ul>
                            </li>
                            <li><strong>A headline</strong> in plain words, for example &quot;Late coffee and Read often share a day&quot;.</li>
                            <li><strong>A sentence</strong> with the key numbers, for example &quot;On days with Late coffee, Read happens 48% of the time; 24% on other days.&quot;</li>
                            <li><strong>Two bars</strong> for the same comparison (&quot;With Late coffee&quot; against &quot;Other days&quot;) on <em>Goes together</em> and <em>Possible trigger</em> patterns.</li>
                            <li><strong>&quot;Highlighted in the charts below&quot;</strong> on <em>When</em> patterns: the weekday and hours it talks about stand out in the Day of week and Time of day charts, and the other bars fade.</li>
                            <li><strong>A &quot;Test it with a trial&quot; button</strong> where a trial makes sense (see <a href="#personal-trials">Personal trials</a>).</li>
                        </ol>
                        <p className={classes.paragraph}>
                            A pattern between two trackers appears on both trackers&apos; pages. Patterns describe your logs over all time, so the highlights show only when the charts show <strong>All logs</strong>, not a single detail.
                        </p>

                        {/* Static Card Mock */}
                        <div className={classes.cardMock} aria-label="Visual example of a What stands out pattern card">
                            <div className={classes.mockHeader}>
                                <span className={`${classes.badgeChip} ${classes.badgeCyan}`}>Possible trigger</span>
                            </div>
                            <h3 className={classes.mockTitle}>Coffee and Reflux</h3>
                            <p className={classes.mockDescription}>
                                On days with Coffee, Reflux happens 62% of the time; 31% on other days.
                            </p>
                            <div className={classes.comparisonBox}>
                                <div className={classes.comparisonLabel}>Comparison</div>
                                <div className={classes.comparisonRow}>
                                    <span className={classes.rowName}>With Coffee</span>
                                    <div className={classes.barTrack}>
                                        <div className={classes.barFillWith}></div>
                                    </div>
                                    <span className={classes.rowValue}>62%</span>
                                </div>
                                <div className={classes.comparisonRow}>
                                    <span className={classes.rowName}>Other days</span>
                                    <div className={classes.barTrack}>
                                        <div className={classes.barFillWithout}></div>
                                    </div>
                                    <span className={classes.rowValue}>31%</span>
                                </div>
                            </div>
                            <div className={classes.mockActionBtn}>
                                <FiCheckCircle aria-hidden="true" />
                                <span>Test it with a trial</span>
                            </div>
                        </div>
                    </section>

                    {/* Card Types Section */}
                    <section className={classes.section}>
                        <h2 className={classes.sectionTitle}>Card types</h2>
                        <p className={classes.paragraph}>
                            In the app these appear as patterns on each tracker&apos;s <strong>Trends</strong> page, with the labels <strong>When</strong>, <strong>Goes together</strong>, <strong>Possible trigger</strong> or <strong>Pattern</strong>. The sections below explain each kind in more depth.
                        </p>

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
                                <strong>Next step:</strong> tap <em>Test it with a trial</em> to verify the relationship with a personal trial.
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
                                This describes your personal routine structure; it does not claim that one habit causes the other, so there&apos;s no trial button. In the app it&apos;s labelled <strong>Goes together</strong>. 
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
                                    <strong>Target goal driver:</strong> an attribute that makes your tracker's <em>target</em> (the attribute with "Track as an outcome" turned on) more likely, with lift and odds ratio.
                                </li>
                                <li>
                                    <strong>Major driver / Rating impact:</strong> a yes/no attribute that shifts a 1–5 rating, such as mood or sleep quality. <em>Major driver</em> means the average rating moves by 1.0 point or more; <em>rating impact</em> indicates a smaller but statistically reliable shift (at least 0.4 points). Nomos validates this using Student's t-test (<span className={classes.mono}>p ≤ 0.08</span>, plus the Benjamini–Hochberg false discovery correction).
                                </li>
                            </ul>
                            <p className={classes.paragraph}>
                                Because these compare attributes within a single tracker (while personal trials require two distinct trackers), these cards do not include a trial button.
                            </p>
                        </div>

                        {/* 10. What affects your mood */}
                        <div id="what-affects-mood">
                            <h3 className={classes.sectionSubtitle}>
                                <span className={`${classes.badgeChip} ${classes.badgeCyan}`}>What affects your mood</span>
                                <span>"What affects your mood" table</span>
                            </h3>
                            <p className={classes.paragraph}>
                                At the top of Discoveries, each rating gets a table of <strong>every</strong> tracker with one of three statuses:
                            </p>
                            <ul className={classes.featureList}>
                                <li>
                                    <strong>Likely:</strong> a card passed all the checks. Shows the change in points and whether it's on the same day or the day after.
                                </li>
                                <li>
                                    <strong>No clear effect:</strong> enough days on both sides (with and without the activity), but no statistically reliable difference.
                                </li>
                                <li>
                                    <strong>Collecting:</strong> shows days with (✓) and without (✗) the tracker, and how many more are needed (at least 4 of each), so you can see progress instead of silence.
                                </li>
                            </ul>
                            <div className={classes.exampleBox}>
                                <em>"Likely" is still a correlation in your own data, not proof of cause.</em>
                            </div>
                            <p className={classes.paragraph}>
                                This table is the main part of <strong>Insights → Discoveries</strong>. Patterns about your habits themselves are on each tracker&apos;s <strong>Trends</strong> page.
                            </p>
                        </div>

                        {/* 11. Timing patterns */}
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
                            <p className={classes.paragraph}>
                                In the app these are labelled <strong>When</strong>. The weekday and hours they describe are highlighted in that tracker&apos;s <strong>Day of week</strong> and <strong>Time of day</strong> charts, so you can see the pattern in your own bars.
                            </p>
                        </div>
                    </section>

                    {/* 11. Personal Trials */}
                    <section id="personal-trials" className={classes.section}>
                        <h2 className={classes.sectionTitle}>N-of-1 personal trials</h2>
                        <p className={classes.paragraph}>
                            A personal trial (an &quot;N-of-1&quot; study: one person, you) tests whether something you do really affects how you feel, <strong>for you</strong>.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>How to start:</strong> open <strong>Insights → Trends</strong>, pick the tracker, and find the pattern under <strong>What stands out</strong>. On a pattern that links two trackers, tap <strong>Test it with a trial</strong>. The button appears on possible triggers (time-lagged, high-confidence and exploratory patterns). It doesn&apos;t appear on habits that go together, symptom co-occurrences, patterns explained by another factor, attribute-level drivers, or the &quot;What affects your mood&quot; table.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>It follows your usual rhythm.</strong> Before you start, Nomos shows how often you&apos;ve done it over the last 8 weeks, for example &quot;about 3 times a week&quot;, and you can correct it. The trial is sized to that rhythm so you never have to change your routine to take part:
                        </p>

                        <div className={classes.tableWrapper}>
                            <table className={classes.table}>
                                <thead>
                                    <tr>
                                        <th>You usually do it</th>
                                        <th>Each phase lasts</th>
                                        <th>Whole trial</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Every day, or 5 times a week</td>
                                        <td>1 week</td>
                                        <td>2 weeks</td>
                                    </tr>
                                    <tr>
                                        <td>3 times a week</td>
                                        <td>2 weeks</td>
                                        <td>4 weeks</td>
                                    </tr>
                                    <tr>
                                        <td>Twice a week</td>
                                        <td>3 weeks</td>
                                        <td>6 weeks</td>
                                    </tr>
                                    <tr>
                                        <td>Once a week</td>
                                        <td>4 weeks</td>
                                        <td>8 weeks</td>
                                    </tr>
                                    <tr>
                                        <td>Every 2 weeks or less</td>
                                        <td>—</td>
                                        <td>Too rare for a trial</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className={classes.paragraph}>
                            Something you do less than once a week can&apos;t be tested this way: four weeks would hold about two sessions. Discoveries keeps comparing it as you log.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>How it runs:</strong>
                        </p>
                        <ol className={classes.stepList}>
                            <li className={classes.stepItem}>
                                <strong>Without it:</strong> skip it, and keep logging how you feel as usual. This is your baseline.
                            </li>
                            <li className={classes.stepItem}>
                                <strong>With it:</strong> do it <strong>as you usually do</strong>, about as often as before. There&apos;s no need to do more, and please don&apos;t force it: doing something every day just for the trial can change your mood on its own. Log it each time you do it.
                            </li>
                        </ol>
                        <p className={classes.paragraph}>
                            <strong>What gets compared:</strong> your outcome (for example your Mood rating) <strong>on the days you did it</strong>, against the days of &quot;Without it&quot;. The days in &quot;With it&quot; when you didn&apos;t do it are left out, because they say nothing about the effect. If Discoveries found that the effect shows up <strong>the day after</strong> (like alcohol and next-day mood), the trial reads the day after instead.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>When there&apos;s enough:</strong> a result needs at least <strong>4 days you did it with a rating</strong> (or with a log, for symptoms), the same minimum Discoveries uses. If &quot;With it&quot; ends with fewer, the card offers <strong>Add a week</strong>: the trial runs a week longer and the days you already logged still count.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>Slips are fine.</strong> If you do it once during &quot;Without it&quot;, that day is simply left out. More than one slip a week of &quot;Without it&quot; and the trial can&apos;t give a fair answer.
                        </p>
                        <p className={classes.paragraph}>
                            <strong>On the card:</strong> &quot;Without it&quot; and &quot;Days you did it&quot; side by side, how many days each rests on, and a strip of the &quot;With it&quot; days with the days you did it filled in. You can start &quot;With it&quot; early, end the trial early, or cancel it at any time. When it&apos;s over, tap <strong>Save the result</strong>.
                        </p>
                        <div className={classes.exampleBox}>
                            <strong>Tips:</strong> keep everything else as steady as you can (sleep, alcohol, stress). Log your mood or the outcome every day, including ordinary days, and log the thing you&apos;re testing honestly, including slips.
                        </div>
                    </section>

                    {/* 12. Trial Verdicts */}
                    <section id="trial-verdicts" className={classes.section}>
                        <h2 className={classes.sectionTitle}>What trial results mean</h2>
                        <p className={classes.paragraph}>
                            When a trial ends, its card shows one of these labels.
                        </p>

                        <p className={classes.paragraph}>
                            <strong>For a rating (Mood, Energy, Sleep quality):</strong>
                        </p>

                        <div className={classes.tableWrapper}>
                            <table className={classes.table}>
                                <thead>
                                    <tr>
                                        <th>Label</th>
                                        <th>When it appears</th>
                                        <th>What to do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Likely better</span> / <span className={classes.verdictBadge}>Likely worse</span>
                                        </td>
                                        <td>On the days you did it, your rating was clearly different from the days without it: at least 0.4 points, with the same checks Discoveries uses for &quot;Likely&quot;.</td>
                                        <td>Good evidence <em>for you</em>. Keep doing it (or cut back), and repeat the trial later to confirm.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>No clear effect</span>
                                        </td>
                                        <td>The averages differ by less than 0.25 points.</td>
                                        <td>It probably doesn&apos;t move your rating much.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Mixed</span>
                                        </td>
                                        <td>There&apos;s a difference, but it isn&apos;t clear enough.</td>
                                        <td>More days would help: run the trial again later.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Can&apos;t tell yet</span>
                                        </td>
                                        <td>Fewer than 4 days you did it with a rating, or more than one slip a week of &quot;Without it&quot;.</td>
                                        <td>Add a week if offered, or start a new trial.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className={classes.paragraph}>
                            <strong>For a symptom (Headache, Reflux):</strong>
                        </p>

                        <div className={classes.tableWrapper}>
                            <table className={classes.table}>
                                <thead>
                                    <tr>
                                        <th>Label</th>
                                        <th>When it appears</th>
                                        <th>What to do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Likely a trigger</span>
                                        </td>
                                        <td>On the days you did it, the symptom came clearly more often: at least 1.8 times as often per day as without it, and at least 3 times in total.</td>
                                        <td>Strong evidence <em>for you</em>. Consider avoiding it; repeat the trial later to confirm.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>No clear effect</span>
                                        </td>
                                        <td>The symptom came about as often (within 15%), at least twice on each side.</td>
                                        <td>The original pattern was probably coincidence.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Mixed</span>
                                        </td>
                                        <td>Anything in between, including when the symptom came <em>less</em> often on the days you did it (that can&apos;t confirm or rule out a cause).</td>
                                        <td>Check sleep and stress, or run the trial again.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={classes.verdictBadge}>Can&apos;t tell yet</span>
                                        </td>
                                        <td>Fewer than 4 days you did it with any log, or more than one slip a week.</td>
                                        <td>Add a week if offered, or start a new trial.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className={classes.paragraph}>
                            While the trial runs, the card explains what it still needs, for example &quot;2 more Playing music days with a Mood rating and the trial can compare.&quot;
                        </p>
                        <p className={classes.paragraph}>
                            The wording is deliberate: a personal trial gives <em>supporting</em> evidence, not medical proof.
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
                            <li>Turn on <strong>Track as an outcome</strong> for the attribute you care about to get <em>Target goal driver</em> cards. (This is separate from a tracker's plan / goal, which sets a number to reach.)</li>
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
                                Trials need two separate trackers and a direction. Routine stacks, symptom co-occurrences, confounded patterns and rating cards (such as &quot;Alcohol ➔ Mood&quot;) don&apos;t have one yet.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>Do I have to do it every day during a trial?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                No. In &quot;With it&quot;, do it as you usually do. The trial compares the days you did it with the days without it, and it&apos;s sized to your rhythm: a weekly practice gets four weeks per phase.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>My trial says &quot;Can&apos;t tell yet&quot;. Did I do something wrong?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                Usually it just needs more days: at least 4 days you did it, with a rating or a log. Tap <strong>Add a week</strong>; nothing you logged is lost.
                            </div>
                        </details>

                        <details className={classes.faqItem}>
                            <summary className={classes.faqSummary}>
                                <span>What's the difference between "Track as an outcome" and a goal?</span>
                                <FiChevronDown />
                            </summary>
                            <div className={classes.faqAnswer}>
                                <em>Track as an outcome</em> tells Discoveries which value you care about (for example your mood rating), so it looks for what lifts it. A <strong>goal</strong> (the tracker's plan) is a number you aim for, such as "Sleep: at least 7 hours a day" or "Mood: at least 4 on average per week". Goals don't change which discoveries you see.
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
