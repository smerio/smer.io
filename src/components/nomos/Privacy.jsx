import classes from './Privacy.module.css';
import { FiShield, FiLock, FiDatabase, FiMail, FiCheck, FiCpu, FiFileText } from 'react-icons/fi';

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
                    <p className={classes.effectiveDate}>Effective & Last Updated: September 2026</p>
                    <p className={classes.lead}>
                        Smerio Nomos is engineered from the ground up as a <strong>100% local-first, zero-telemetry habit and life tracking application</strong>. 
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
                        <p>Nomos does not declare network permissions; data never leaves your device.</p>
                    </div>
                    <div className={classes.summaryCard}>
                        <div className={classes.summaryIcon}><FiDatabase /></div>
                        <h4>0 Remote Servers</h4>
                        <p>Zero analytics SDKs, zero advertising trackers, and zero cloud databases.</p>
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
                        <h3>3. On-Device Data Storage & Encryption</h3>
                        <p>
                            All your habits, logged entries, modular attributes, and N-of-1 trial histories are saved strictly within your phone&apos;s sandboxed local Room/SQLite database.
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> <strong>AES-256-GCM Encrypted Snapshots:</strong> When creating a backup, Nomos encrypts your entire database using AES-256-GCM authenticated encryption with a user-supplied password.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Storage Access Framework (SAF):</strong> Export and import operations rely solely on system-level file pickers without requiring broad file storage permissions.</li>
                        </ul>
                    </div>

                    <div className={classes.clause}>
                        <h3>4. Third-Party Services & Analytics</h3>
                        <p>
                            Smerio Nomos contains <strong>zero third-party SDKs, analytics frameworks, or advertising networks</strong>. 
                            There is no Google Firebase Analytics, Meta SDK, Mixpanel, Sentry, or third-party telemetry bundled into the application.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>5. Data Retention, Portability & User Rights</h3>
                        <p>
                            Because your data is stored exclusively on your physical device, you maintain full, unrestricted data sovereignty:
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Export Anytime:</strong> You can export your full database to plain JSON or standard CSV spreadsheets at any time.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Clear Data:</strong> You can erase all data instantly via Android Settings → Apps → Nomos → Clear Storage.</li>
                            <li><FiCheck className={classes.checkIcon} /> <strong>Permanent Deletion:</strong> Uninstalling the application immediately and irreversibly deletes all stored logs and local settings.</li>
                        </ul>
                    </div>

                    <div className={classes.clause}>
                        <h3>6. Children&apos;s Privacy (COPPA & GDPR-K)</h3>
                        <p>
                            Nomos does not knowingly collect or solicit any personal information from children under the age of 13 (or 16 in the European Economic Area). Because the app collects no personal information whatsoever from any user, it is fully compliant with COPPA and GDPR-K.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>7. Google Play Store Declarations & Contact</h3>
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
                                    <a href="mailto:feedback@smer.io?subject=Nomos%20Privacy%20Inquiry">feedback@smer.io</a>
                                    <span className={classes.contactDivider}>•</span>
                                    <a href="mailto:nomos@smer.io?subject=Nomos%20Privacy%20Inquiry">nomos@smer.io</a>
                                </div>
                                <div className={classes.contactSub}>Smerio Open Source Projects • Privacy & Security Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
