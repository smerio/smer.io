import classes from './DataPortability.module.css';
import { FiLock, FiDownload, FiUpload, FiDatabase, FiCheck, FiShield } from 'react-icons/fi';

const FEATURES = [
    {
        icon: <FiLock />,
        title: 'AES-256-GCM Encrypted Snapshots',
        desc: 'Export complete encrypted .backup archives protected by your custom password. Perfect for secure device migrations without cloud exposure.',
        accent: '#06B6D4',
    },
    {
        icon: <FiDatabase />,
        title: 'Loop Habit Tracker Importer',
        desc: 'Migrate your entire habit history from Loop Habit Tracker in seconds. Automatically scales integer multipliers, preserves streaks, and transfers target frequencies.',
        accent: '#10B981',
    },
    {
        icon: <FiDownload />,
        title: 'Open JSON & CSV Exports',
        desc: 'Your data is truly yours. Export human-readable JSON files and clean spreadsheets compatible with Python, R, Excel, or custom analysis pipelines.',
        accent: '#F59E0B',
    },
    {
        icon: <FiShield />,
        title: 'Zero Storage Footprint Leaks',
        desc: 'Uses modern Android Storage Access Framework (SAF) system contracts. Nomos never asks for broad file system permissions.',
        accent: '#8B5CF6',
    },
];

const DataPortability = () => {
    return (
        <section className={classes.section} id="portability">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>
                        <FiUpload className={classes.badgeIcon} />
                        <span>Data Sovereignty</span>
                    </div>
                    <h2 className={classes.title}>Complete Data Ownership & Portability</h2>
                    <p className={classes.subtitle}>
                        No vendor lock-in. Export, encrypt, backup, or import your personal habit history whenever you want.
                    </p>
                </div>

                <div className={classes.grid}>
                    {FEATURES.map((f, i) => (
                        <div key={i} className={classes.card} style={{ '--card-accent': f.accent }}>
                            <div className={classes.iconBox} style={{ background: `${f.accent}18`, color: f.accent }}>
                                {f.icon}
                            </div>
                            <h3 className={classes.cardTitle}>{f.title}</h3>
                            <p className={classes.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Technical Architecture Callout */}
                <div className={classes.callout}>
                    <div className={classes.calloutHeader}>
                        <FiShield className={classes.calloutIcon} />
                        <h4>Technical Security Guarantee: Zero Network Permissions</h4>
                    </div>
                    <p className={classes.calloutText}>
                        Nomos does not declare <code>android.permission.INTERNET</code> in its <code>AndroidManifest.xml</code>. 
                        The Android operating system physically prevents the app from opening network sockets, making remote data leakage architecturally impossible.
                    </p>
                    <div className={classes.tagRow}>
                        <span className={classes.specTag}><FiCheck /> No Analytics SDKs</span>
                        <span className={classes.specTag}><FiCheck /> No Account Required</span>
                        <span className={classes.specTag}><FiCheck /> In-Memory Computation</span>
                        <span className={classes.specTag}><FiCheck /> Local Room/SQLite DB</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataPortability;
