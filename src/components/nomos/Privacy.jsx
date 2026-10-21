import classes from './Privacy.module.css';
import { FiShield, FiLock, FiDatabase, FiMail, FiCheck, FiCpu } from 'react-icons/fi';

const Privacy = () => {
    return (
        <section className={classes.section} id="privacy">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>
                        <FiShield aria-hidden="true" />
                        <span>Google Play Store Compliant</span>
                    </div>
                    <h2 className={classes.title}>Privacy Policy</h2>
                    <p className={classes.effectiveDate}>Last updated: 21 October 2026</p>
                    <p className={classes.lead}>
                        Smerio Nomos is engineered from the ground up as a <strong>100% local-first, zero-telemetry mood and habit tracker</strong>. 
                        We believe that your personal routines, daily symptoms, statistical patterns, and lifestyle experiments belong solely to you.
                    </p>
                </div>

                <div className={classes.summaryCards}>
                    <div className={classes.summaryCard}>
                        <div className={classes.summaryIcon}><FiLock /></div>
                        <h4>0 User Accounts</h4>
                        <p>No registration, no passwords, no email signups, and no phone numbers required.</p>
                    </div>
                    <div className={classes.summaryCard}>
                        <div className={classes.summaryIcon}><FiCpu /></div>
                        <h4>Zero Internet Permissions</h4>
                        <p>Nomos does not declare network permissions. Your data is never sent to us or to anyone else.</p>
                    </div>
                    <div className={classes.summaryCard}>
                        <div className={classes.summaryIcon}><FiDatabase /></div>
                        <h4>0 Remote Servers</h4>
                        <p>Zero analytics SDKs, zero advertising trackers, and no servers of ours.</p>
                    </div>
                </div>

                <div className={classes.content}>
                    <div className={classes.clause}>
                        <h3>1. Information We Do NOT Collect</h3>
                        <p>
                            Smerio Nomos does not harvest, store, or transmit any personally identifiable information (PII) or device metadata. Specifically, we do not collect:
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> Names, email addresses, phone numbers, or account credentials.</li>
                            <li><FiCheck className={classes.checkIcon} /> Advertising IDs (AAID), hardware identifiers (IMEI, MAC address), or device fingerprints.</li>
                            <li><FiCheck className={classes.checkIcon} /> GPS location, WiFi identifiers, or network telemetry.</li>
                            <li><FiCheck className={classes.checkIcon} /> In-app behavioral telemetry, click tracking, or usage statistics.</li>
                        </ul>
                    </div>

                    <div className={classes.clause}>
                        <h3>2. Architectural Zero-Network Security</h3>
                        <p>
                            Unlike most wellness apps that store your habits on remote servers, Nomos enforces privacy at the operating system level:
                        </p>
                        <div className={classes.noticeBox}>
                            <strong>No Internet Access:</strong> Nomos does not declare <code>android.permission.INTERNET</code> in its application manifest. 
                            The Android OS physically prevents the app from initiating or receiving any network connections.
                        </div>
                    </div>

                    <div className={classes.clause}>
                        <h3>3. Permissions Nomos Uses</h3>
                        <p>
                            None of these permissions allow network access.
                        </p>
                        <div className={classes.permTableWrapper}>
                            <table className={classes.permTable}>
                                <thead>
                                    <tr>
                                        <th>Permission</th>
                                        <th>Why</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Notifications</strong> (<code>POST_NOTIFICATIONS</code>)</td>
                                        <td>Daily check-in and goal reminders, logging confirmations with Undo.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Read steps</strong> (<code>android.permission.health.READ_STEPS</code>)</td>
                                        <td>Optional. Shows your daily steps from Health Connect, if you connect it.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Read sleep</strong> (<code>android.permission.health.READ_SLEEP</code>)</td>
                                        <td>Optional. Shows how long you slept each night from Health Connect, if you connect it.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Biometric / fingerprint</strong> (<code>USE_BIOMETRIC</code>, <code>USE_FINGERPRINT</code>)</td>
                                        <td>Optional app lock. Handled by Android; Nomos never sees your biometric data.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Run at startup, keep awake, foreground service</strong> (<code>RECEIVE_BOOT_COMPLETED</code>, <code>WAKE_LOCK</code>, <code>FOREGROUND_SERVICE</code>)</td>
                                        <td>Used by Android&apos;s WorkManager to keep reminders and the on-device analysis scheduled after a restart.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={classes.noteText}>
                            Reminder notifications show tracker and goal names only when your phone is unlocked. The lock-screen version is generic.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>4. On-Device Data Storage &amp; Encryption</h3>
                        <p>
                            All your habits, logged entries, modular attributes, and N-of-1 trial histories are saved strictly within your phone&apos;s sandboxed local Room/SQLite database.
                        </p>
                        <p>
                            This can include sensitive personal information you choose to record, such as mood ratings, symptoms, sleep, medication or alcohol use, and, if you connect Health Connect, your daily steps and sleep. It is treated exactly like everything else: stored only on your phone and never sent to us.
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> <strong>AES-256-GCM Encrypted Snapshots:</strong> When creating a backup, Nomos encrypts your entire database using AES-256-GCM authenticated encryption with a user-supplied password.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Storage Access Framework (SAF):</strong> Export and import operations rely solely on system-level file pickers without requiring broad file storage permissions.</li>
                        </ul>
                        <div className={classes.subClause}>
                            <h4>Android Auto Backup &amp; device transfer</h4>
                            <p>
                                If backup is turned on in your Android settings, Android may back up Nomos&apos;s data (your logs and settings) to your private Google Drive account, or copy it directly when you move to a new phone. Android only uploads it to the cloud when your phone can encrypt it (a screen lock is set). This backup is run by Android and Google Play services, not by Nomos. We have no access to it. Widget settings and app-lock settings are never included. You can turn this off at any time in your phone&apos;s backup settings.
                            </p>
                        </div>
                    </div>

                    <div className={classes.clause}>
                        <h3>5. Health Connect (Steps and Sleep)</h3>
                        <p>
                            If you choose to connect Health Connect, Nomos reads two kinds of data from it:
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Steps:</strong> your total number of steps for each day.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Sleep:</strong> your sleep sessions (when you fell asleep and woke up, and when you were awake during the night), which Nomos turns into the time you slept each night.</li>
                        </ul>
                        <p>
                            Nomos does not read any other Health Connect data, and it never writes, changes or deletes data in Health Connect.
                        </p>
                        <p>
                            <strong>How it&apos;s used.</strong> Steps and sleep appear as trackers in Nomos, next to the moods and habits you log yourself. Nomos uses them for your goals, your Trends, and to compare your mood on days with more or fewer steps, and after longer or shorter nights, than usual. This all happens on your phone.
                        </p>
                        <p>
                            <strong>Where it goes.</strong> Nowhere. Nomos has no internet access, so this data is never sent to us or anyone else. It is never sold, never shared, and never used for advertising.
                        </p>
                        <p>
                            <strong>When it&apos;s read.</strong> Only while Nomos is open on your screen. Nomos never reads in the background. When you first connect, it reads your last 30 days.
                        </p>
                        <p>
                            <strong>Backups.</strong> The days Nomos has read are stored in Nomos&apos;s own database on your phone. That means they are included in backups you make yourself (encrypted with your password) and in Android&apos;s own backup if you have turned that on (see &ldquo;Android Auto Backup &amp; device transfer&rdquo;).
                        </p>
                        <p>
                            <strong>Stopping.</strong> You can turn access off at any time in Health Connect (search for &ldquo;Health Connect&rdquo; in your phone&apos;s Settings, or open the Health Connect app on older phones), or choose <strong>Stop reading from Health Connect</strong> on the tracker in Nomos. There you can keep the days already read or delete them. Health Connect keeps its own copy either way.
                        </p>
                        <div className={classes.noticeBox}>
                            Nomos&apos;s use of information received from Health Connect adheres to the Health Connect Permissions policy, including the Limited Use requirements.
                        </div>
                    </div>

                    <div className={classes.clause}>
                        <h3>6. Third-Party Services &amp; Analytics</h3>
                        <p>
                            Smerio Nomos contains <strong>zero third-party SDKs, analytics frameworks, or advertising networks</strong>. 
                            There is no Google Firebase Analytics, Meta SDK, Mixpanel, Sentry, or third-party telemetry bundled into the application.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>7. Data Retention, Portability &amp; User Rights</h3>
                        <p>
                            Because your data is stored exclusively on your physical device, you maintain full, unrestricted data sovereignty:
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Export Anytime:</strong> You can export your full database to plain JSON or standard CSV spreadsheets at any time.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Health Connect Data:</strong> On the Steps or Sleep tracker, choose <strong>Stop reading from Health Connect &rarr; Delete them</strong> to remove the days Nomos has read. To remove the data from Health Connect itself, use the Health Connect settings or the app that recorded it.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Erase Data:</strong> Delete individual entries or trackers in the app, or erase everything at once in <strong>Settings → Data &amp; backup → Erase all data</strong>. You can also use Android Settings → Apps → <strong>S Nomos</strong> → Clear storage.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Permanent Deletion:</strong> Uninstalling the application immediately and irreversibly deletes all stored logs and local settings.</li>
                        </ul>
                    </div>

                    <div className={classes.clause}>
                        <h3>8. Children&apos;s Privacy (COPPA &amp; GDPR-K)</h3>
                        <p>
                            Nomos does not knowingly collect or solicit any personal information from children under the age of 13 (or 16 in the European Economic Area). Because the app collects no personal information whatsoever from any user, it is fully compliant with COPPA and GDPR-K.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>9. Google Play Store Declarations &amp; Contact</h3>
                        <p>
                            For the Google Play Store Data Safety form declarations:
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Data Collected:</strong> None (0 bytes transmitted).</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Data Shared:</strong> None (0 third parties).</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Encryption in Transit:</strong> N/A (Local-first architecture).</li>
                        </ul>
                        <p>
                            If you have questions regarding this Privacy Policy, your data rights, or Google Play compliance, contact our team:
                        </p>
                        <div className={classes.contactBox}>
                            <FiMail className={classes.contactIcon} />
                            <div>
                                <div className={classes.contactEmail}>
                                    <a href="mailto:nomos@smer.io?subject=Nomos%20Privacy%20Inquiry">nomos@smer.io</a>
                                </div>
                                <div className={classes.contactSub}>Smerio • Privacy &amp; Security Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
