import { Link } from 'react-router-dom';
import classes from './ProductGrid.module.css';
import { FiCheck, FiArrowRight, FiExternalLink, FiClock, FiActivity, FiShield, FiDatabase } from 'react-icons/fi';
import { FaGooglePlay, FaTelegramPlane, FaGithub } from 'react-icons/fa';

const ProductGrid = () => {
    return (
        <section id="apps" className={classes.section}>
            <div className={classes.header}>
                <span className={classes.categoryTag}>The Application Suite</span>
                <h2 className={classes.title}>Sovereign Tools for Mind, Time & Wealth</h2>
                <p className={classes.subtitle}>
                    Every product is designed with a zero-compromise privacy model: local storage, on-device intelligence, and complete data ownership.
                </p>
            </div>

            <div className={classes.grid}>
                {/* 1. Nomos Card */}
                <div className={classes.productCard}>
                    <div className={classes.cardTop}>
                        <div className={classes.badgeRow}>
                            <span className={classes.platformBadge}>Android Application</span>
                            <span className={`${classes.statusBadge} ${classes.statusLiveEmerald}`}>
                                <FiCheck aria-hidden="true" />
                                <span>Google Play Release</span>
                            </span>
                        </div>
                        <h3 className={classes.cardTitle}>
                            <FiActivity style={{ color: '#10B981' }} aria-hidden="true" />
                            <span>Smerio Nomos</span>
                        </h3>
                        <div className={classes.cardTagline}>Modular 1-Tap Habit & Life Tracker</div>
                        <p className={classes.cardDescription}>
                            1-tap rapid micro-logging, OLED Pixela contribution matrices, and on-device causal discovery. 
                            Declares zero network permissions in its manifest—your daily routines mathematically never leave your phone.
                        </p>
                        <ul className={classes.featureList}>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} aria-hidden="true" />
                                <span>1-Tap Fast Logging with contextual attributes</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} aria-hidden="true" />
                                <span>Multi-scale Pixela heatmaps (52W matrix, 24h circadian)</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} aria-hidden="true" />
                                <span>On-device causal engine & N-of-1 personal trials</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} aria-hidden="true" />
                                <span>Zero internet permissions & hardware AES-256-GCM encryption</span>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.cardActions}>
                        <a
                            href="https://play.google.com/store/apps/details?id=io.smer.nomos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.ctaStore}
                        >
                            <FaGooglePlay aria-hidden="true" />
                            <span>Get on Google Play</span>
                        </a>
                        <Link to="/nomos" className={classes.ctaLink}>
                            <span>Overview</span>
                            <FiArrowRight aria-hidden="true" />
                        </Link>
                        <Link to="/nomos/discoveries/" className={classes.ctaSecondary}>
                            <span>Discoveries Guide →</span>
                        </Link>
                    </div>
                </div>

                {/* 2. Ambit Card */}
                <div className={classes.productCard}>
                    <div className={classes.cardTop}>
                        <div className={classes.badgeRow}>
                            <span className={classes.platformBadge}>Android Application</span>
                            <span className={`${classes.statusBadge} ${classes.statusLiveAmber}`}>
                                <FiCheck aria-hidden="true" />
                                <span>Google Play Release</span>
                            </span>
                        </div>
                        <h3 className={classes.cardTitle}>
                            <FiClock style={{ color: '#F4A261' }} aria-hidden="true" />
                            <span>Ambit</span>
                        </h3>
                        <div className={classes.cardTagline} style={{ color: '#F4A261' }}>
                            The Circuit of a Life — Cyclical Time Tracker
                        </div>
                        <p className={classes.cardDescription}>
                            Replace linear countdown anxiety with Seneca's concentric rings of time. 
                            Features a 100% on-device astronomical clock, natural daylight geometry, evening reflections, and home screen Glance widget.
                        </p>
                        <ul className={classes.featureList}>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#F4A261' }} aria-hidden="true" />
                                <span>Concentric Rings of Time (Day, Season, Lived Life)</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#F4A261' }} aria-hidden="true" />
                                <span>Real-time on-device Solar Astrolabe & daylight phases</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#F4A261' }} aria-hidden="true" />
                                <span>4x2 Android Glance home screen widget</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#F4A261' }} aria-hidden="true" />
                                <span>Zero trackers, zero accounts, and offline location mode</span>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.cardActions}>
                        <a
                            href="https://play.google.com/store/apps/details?id=io.smer.ambit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.ctaStore}
                        >
                            <FaGooglePlay aria-hidden="true" />
                            <span>Get on Google Play</span>
                        </a>
                        <Link to="/ambit" className={classes.ctaLink}>
                            <span>Overview</span>
                            <FiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                {/* 3. Ledgent Card */}
                <div className={classes.productCard}>
                    <div className={classes.cardTop}>
                        <div className={classes.badgeRow}>
                            <span className={classes.platformBadge}>Telegram Bot & Ledger</span>
                            <span className={`${classes.statusBadge} ${classes.statusLiveCyan}`}>
                                <FiCheck aria-hidden="true" />
                                <span>Self-Hosted & Bot</span>
                            </span>
                        </div>
                        <h3 className={classes.cardTitle}>
                            <FaTelegramPlane style={{ color: '#08D9D6' }} aria-hidden="true" />
                            <span>Ledgent</span>
                        </h3>
                        <div className={classes.cardTagline} style={{ color: '#08D9D6' }}>
                            Private Crypto Ledger & AI Advisor Bot
                        </div>
                        <p className={classes.cardDescription}>
                            Self-hosted Telegram bot for crypto portfolio tracking, FIFO/LIFO tax lots, and private AI advisory. 
                            Log transactions in plain text without trusting third-party portfolio trackers.
                        </p>
                        <ul className={classes.featureList}>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#08D9D6' }} aria-hidden="true" />
                                <span>Natural chat interaction & rapid expense parsing</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#08D9D6' }} aria-hidden="true" />
                                <span>Automated FIFO and LIFO tax lot calculations</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#08D9D6' }} aria-hidden="true" />
                                <span>Private AI advisor via self-hosted LLM or API keys</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#08D9D6' }} aria-hidden="true" />
                                <span>Complete data sovereignty on your own hardware</span>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.cardActions}>
                        <Link to="/ledgent" className={classes.ctaLink} style={{ paddingLeft: 0 }}>
                            <span>Explore Ledgent</span>
                            <FiArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                {/* 4. Smerio Wealth Tracker Card */}
                <div className={classes.productCard}>
                    <div className={classes.cardTop}>
                        <div className={classes.badgeRow}>
                            <span className={classes.platformBadge}>Self-Hosted Platform</span>
                            <span className={`${classes.statusBadge} ${classes.statusDevViolet}`}>
                                <span>In Active Development</span>
                            </span>
                        </div>
                        <h3 className={classes.cardTitle}>
                            <FiDatabase style={{ color: '#A78BFA' }} aria-hidden="true" />
                            <span>Smerio Wealth</span>
                        </h3>
                        <div className={classes.cardTagline} style={{ color: '#A78BFA' }}>
                            Open-Source Private Wealth & Budget Engine
                        </div>
                        <p className={classes.cardDescription}>
                            The upcoming self-hosted personal finance platform for those who refuse to trust the cloud with their family net worth. 
                            Built on Docker and SQLite for true physical sovereignty.
                        </p>
                        <ul className={classes.featureList}>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#A78BFA' }} aria-hidden="true" />
                                <span>Total Net Worth: real estate, crypto, bank accounts & liabilities</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#A78BFA' }} aria-hidden="true" />
                                <span>Multi-currency native with automated rate conversion</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#A78BFA' }} aria-hidden="true" />
                                <span>Single SQLite file architecture—zero external database bloat</span>
                            </li>
                            <li className={classes.featureItem}>
                                <FiCheck className={classes.featureIcon} style={{ color: '#A78BFA' }} aria-hidden="true" />
                                <span>Local LLM integration (Ollama) as your private wealth advisor</span>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.cardActions}>
                        <Link to="/docs" className={classes.ctaLink} style={{ paddingLeft: 0 }}>
                            <span>View Documentation</span>
                            <FiArrowRight aria-hidden="true" />
                        </Link>
                        <a
                            href="https://github.com/smerio/smerio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.ctaSecondary}
                        >
                            <FaGithub aria-hidden="true" />
                            <span>GitHub</span>
                            <FiExternalLink aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
