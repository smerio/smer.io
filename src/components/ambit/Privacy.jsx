import classes from './Privacy.module.css';
import { FiShield, FiLock, FiMapPin, FiDatabase, FiMail, FiCheck } from 'react-icons/fi';

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
                        Ambit is built from the ground up as a <strong>100% local-first, zero-tracking application</strong>. We believe your time, your birthdate, your location, and your daily reflections belong solely to you.
                    </p>
                </div>

                <div className={classes.summaryCards}>
                    <div className={classes.summaryCard}>
                        <div className={classes.summaryIcon}><FiLock /></div>
                        <h4>0 User Accounts</h4>
                        <p>No registration, no passwords, no email signups required.</p>
                    </div>
                    <div className={classes.summaryCard}>
                        <div className={classes.summaryIcon}><FiMapPin /></div>
                        <h4>On-Device Solar Math</h4>
                        <p>Location is processed in-memory solely for astronomical geometry.</p>
                    </div>
                    <div className={classes.summaryCard}>
                        <div className={classes.summaryIcon}><FiDatabase /></div>
                        <h4>0 Remote Servers</h4>
                        <p>No telemetry, no tracking SDKs, no ad networks, no data sales.</p>
                    </div>
                </div>

                <div className={classes.content}>
                    <div className={classes.clause}>
                        <h3>1. Information We Do NOT Collect</h3>
                        <p>
                            Ambit does not harvest, store, or transmit any personally identifiable information (PII). We do not collect:
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> Names, email addresses, phone numbers, or account credentials.</li>
                            <li><FiCheck className={classes.checkIcon} /> Advertising IDs, hardware identifiers (IMEI, MAC address), or device fingerprints.</li>
                            <li><FiCheck className={classes.checkIcon} /> Financial, biometric, or health data.</li>
                            <li><FiCheck className={classes.checkIcon} /> Browsing history or app usage telemetry.</li>
                        </ul>
                    </div>

                    <div className={classes.clause}>
                        <h3>2. Location Data & Permissions</h3>
                        <p>
                            Ambit requests location access (precise or approximate) for one single reason: to compute astronomical solar positions (sunrise, solar noon, dusk, and civil twilight) on your 24-hour solar day ring.
                        </p>
                        <div className={classes.noticeBox}>
                            <strong>Strict On-Device Processing:</strong> Your latitude and longitude coordinates are processed entirely on-device by Ambit's local solar engine. Your coordinates are <strong>never transmitted</strong> over the internet, never shared with third parties, and never logged on remote servers.
                        </div>
                        <p>
                            <strong>Zero-Permission Mode:</strong> If you prefer not to grant Android location permissions, you can manually type or select a city from the built-in database. Ambit will calculate solar geometry for that chosen city with 0 permissions requested.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>3. Lived Years & Reflection Logs</h3>
                        <p>
                            During onboarding, Ambit asks for your birthdate to draw your concentric lived-year rings. When you perform the &ldquo;Seal the Day&rdquo; ritual, your evening confirmations are saved locally. This data remains in the sandboxed local SQLite/Room database on your device. It is never uploaded to any cloud storage unless you explicitly enable standard Android Auto Backup via your own Google Account settings.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>4. Third-Party Services & SDKs</h3>
                        <p>
                            Ambit contains <strong>zero third-party trackers, analytics SDKs, or advertising networks</strong>. There is no Google Analytics, Firebase Analytics, Meta SDK, or telemetry framework bundled into the application.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>5. Data Retention & Your Rights</h3>
                        <p>
                            Because your data is stored strictly on your device, you have complete and immediate control:
                        </p>
                        <ul className={classes.list}>
                            <li><FiCheck className={classes.checkIcon} /> You can clear all data at any time via Android Settings → Apps → Ambit → Clear Storage.</li>
                            <li><FiCheck className={classes.checkIcon} /> You can export your sealed days and settings to plain text.</li>
                            <li><FiCheck className={classes.checkIcon} /> Uninstalling the app permanently deletes all locally stored data.</li>
                        </ul>
                    </div>

                    <div className={classes.clause}>
                        <h3>6. Children's Privacy</h3>
                        <p>
                            Ambit does not knowingly collect or solicit any personal information from children under the age of 13 (or 16 in the EEA). Because the app collects no personal data from any user, it is fully compliant with COPPA and GDPR-K.
                        </p>
                    </div>

                    <div className={classes.clause}>
                        <h3>7. Feedback, Feature Requests & Contact</h3>
                        <p>
                            If you have questions regarding this Privacy Policy, wish to report a bug, or want to suggest a feature request for the Android app, please contact the developer team directly:
                        </p>
                        <div className={classes.contactBox}>
                            <div className={classes.contactRow}>
                                <FiMail className={classes.contactIcon} />
                                <div>
                                    <strong>Developer & Privacy Inquiries:</strong>{' '}
                                    <a href="mailto:feedback@smer.io?subject=Ambit%20Privacy%20%26%20Feedback" className={classes.contactLink}>
                                        feedback@smer.io
                                    </a>{' '}
                                    <span className={classes.alias}>(or ambit@smer.io)</span>
                                </div>
                            </div>
                            <div className={classes.contactRow}>
                                <FiShield className={classes.contactIcon} />
                                <div>
                                    <strong>Project Hub:</strong>{' '}
                                    <a href="https://smer.io" className={classes.contactLink}>
                                        https://smer.io
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
