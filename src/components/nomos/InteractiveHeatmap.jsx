import { useState } from 'react';
import classes from './InteractiveHeatmap.module.css';
import { FiCalendar, FiTrendingUp, FiActivity, FiLayers, FiInfo } from 'react-icons/fi';

const PALETTES = [
    { id: 'emerald', name: 'Momentum', color: '#10B981', lightColor: '#34D399' },
    { id: 'cyan', name: 'Ocean', color: '#06B6D4', lightColor: '#22D3EE' },
    { id: 'gold', name: 'Solar', color: '#F59E0B', lightColor: '#FBBF24' },
    { id: 'purple', name: 'Amethyst', color: '#8B5CF6', lightColor: '#A78BFA' },
];

const TABS = [
    { id: 'heatmap', label: '52-Week Matrix', icon: <FiCalendar /> },
    { id: 'circadian', label: '24-Hour Circadian', icon: <FiActivity /> },
    { id: 'weekly', label: '7-Day Rhythm', icon: <FiTrendingUp /> },
    { id: 'volume', label: '12-Month Volume', icon: <FiLayers /> },
];

// Generates pseudo 52-week heatmap data (7 rows x 52 cols)
const generateHeatmapGrid = () => {
    const grid = [];
    for (let r = 0; r < 7; r++) {
        const row = [];
        for (let c = 0; c < 36; c++) {
            // Simulated realistic habit pattern with streaks and rest days
            const rand = Math.random();
            let level = 0;
            if (c > 33 && r > 4) {
                level = 0; // recent incomplete
            } else if (rand > 0.65) {
                level = 4;
            } else if (rand > 0.45) {
                level = 3;
            } else if (rand > 0.25) {
                level = 2;
            } else if (rand > 0.12) {
                level = 1;
            }
            row.push(level);
        }
        grid.push(row);
    }
    return grid;
};

const STATIC_GRID = generateHeatmapGrid();

const HOURLY_DATA = [
    { hour: '06:00', count: 12, label: 'Morning Rise' },
    { hour: '08:00', count: 48, label: 'Early Routine' },
    { hour: '10:00', count: 24, label: 'Mid-Morning' },
    { hour: '12:00', count: 18, label: 'Midday' },
    { hour: '14:00', count: 32, label: 'Afternoon Focus' },
    { hour: '18:00', count: 54, label: 'Post-Work Spike' },
    { hour: '21:00', count: 68, label: 'Evening Ritual' },
    { hour: '23:00', count: 15, label: 'Wind Down' },
];

const WEEKLY_DATA = [
    { day: 'Mon', count: 42, pct: '84%' },
    { day: 'Tue', count: 48, pct: '96%' },
    { day: 'Wed', count: 45, pct: '90%' },
    { day: 'Thu', count: 50, pct: '100%' },
    { day: 'Fri', count: 38, pct: '76%' },
    { day: 'Sat', count: 28, pct: '56%' },
    { day: 'Sun', count: 34, pct: '68%' },
];

const MONTHLY_DATA = [
    { month: 'Jan', count: 124 },
    { month: 'Feb', count: 142 },
    { month: 'Mar', count: 168 },
    { month: 'Apr', count: 155 },
    { month: 'May', count: 180 },
    { month: 'Jun', count: 194 },
    { month: 'Jul', count: 210 },
    { month: 'Aug', count: 228 },
];

const InteractiveHeatmap = () => {
    const [selectedPalette, setSelectedPalette] = useState(PALETTES[0]);
    const [activeTab, setActiveTab] = useState('heatmap');
    const [hoveredCell, setHoveredCell] = useState(null);

    const getCellColor = (level) => {
        if (level === 0) return '#1F1F1F';
        if (level === 1) return `${selectedPalette.color}45`;
        if (level === 2) return `${selectedPalette.color}80`;
        if (level === 3) return `${selectedPalette.color}B8`;
        return selectedPalette.color;
    };

    return (
        <section className={classes.section} id="momentum">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.badge}>Visual Momentum</div>
                    <h2 className={classes.title}>Multi-Scale Temporal Analytics</h2>
                    <p className={classes.subtitle}>
                        Experience honest habit momentum with Pixela/GitHub-style contribution matrices, real-time anchoring, and deep temporal drilldowns.
                    </p>
                </div>

                {/* Metrics Bar */}
                <div className={classes.metricsRow}>
                    <div className={classes.metricCard}>
                        <span className={classes.metricLabel}>Current Streak</span>
                        <div className={classes.metricVal} style={{ color: selectedPalette.lightColor }}>28d</div>
                        <span className={classes.metricSub}>Honest real-time anchor</span>
                    </div>
                    <div className={classes.metricCard}>
                        <span className={classes.metricLabel}>Best Historical Streak</span>
                        <div className={classes.metricVal}>94d</div>
                        <span className={classes.metricSub}>All-time record</span>
                    </div>
                    <div className={classes.metricCard}>
                        <span className={classes.metricLabel}>Total Recorded Logs</span>
                        <div className={classes.metricVal}>1,248</div>
                        <span className={classes.metricSub}>100% on-device SQLite</span>
                    </div>
                    <div className={classes.metricCard}>
                        <span className={classes.metricLabel}>Plan Completion</span>
                        <div className={classes.metricVal} style={{ color: '#FBBF24' }}>92.4%</div>
                        <span className={classes.metricSub}>Target: ≥ 5× / week</span>
                    </div>
                </div>

                {/* Main Interactive Matrix Board */}
                <div className={classes.matrixBoard}>
                    <div className={classes.boardControls}>
                        {/* Subtabs */}
                        <div className={classes.tabPills}>
                            {TABS.map((t) => (
                                <button
                                    key={t.id}
                                    className={`${classes.tabBtn} ${activeTab === t.id ? classes.tabBtnActive : ''}`}
                                    onClick={() => setActiveTab(t.id)}
                                >
                                    {t.icon}
                                    <span>{t.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Theme Palette Switcher */}
                        <div className={classes.paletteSwitcher}>
                            <span className={classes.paletteLabel}>Palette:</span>
                            {PALETTES.map((p) => (
                                <button
                                    key={p.id}
                                    className={`${classes.paletteDot} ${selectedPalette.id === p.id ? classes.paletteDotActive : ''}`}
                                    style={{ background: p.color }}
                                    onClick={() => setSelectedPalette(p)}
                                    title={p.name}
                                    aria-label={`Select ${p.name} palette`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Matrix View Content */}
                    <div className={classes.viewContainer}>
                        {activeTab === 'heatmap' && (
                            <div className={classes.heatmapWrapper}>
                                <div className={classes.heatmapHeader}>
                                    <span className={classes.heatmapTitle}>Habit: Deep Work & Focus</span>
                                    <div className={classes.legend}>
                                        <span>Less</span>
                                        {[0, 1, 2, 3, 4].map((lvl) => (
                                            <div
                                                key={lvl}
                                                className={classes.legendBox}
                                                style={{ background: getCellColor(lvl) }}
                                            />
                                        ))}
                                        <span>More</span>
                                    </div>
                                </div>

                                <div className={classes.gridScroll}>
                                    <div className={classes.gridTable}>
                                        <div className={classes.dayLabels}>
                                            <span>Mon</span>
                                            <span>Wed</span>
                                            <span>Fri</span>
                                            <span>Sun</span>
                                        </div>
                                        <div className={classes.cellsContainer}>
                                            {STATIC_GRID.map((row, rIdx) => (
                                                <div key={rIdx} className={classes.gridRow}>
                                                    {row.map((cell, cIdx) => (
                                                        <div
                                                            key={cIdx}
                                                            className={classes.gridCell}
                                                            style={{ background: getCellColor(cell) }}
                                                            onMouseEnter={() =>
                                                                setHoveredCell({
                                                                    level: cell,
                                                                    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][rIdx],
                                                                    week: cIdx + 1,
                                                                })
                                                            }
                                                            onMouseLeave={() => setHoveredCell(null)}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {hoveredCell && (
                                    <div className={classes.cellTooltip}>
                                        <FiInfo size={14} />
                                        <span>
                                            Week {hoveredCell.week}, {hoveredCell.day}:{' '}
                                            <strong>{hoveredCell.level > 0 ? `${hoveredCell.level * 30} mins logged` : 'No activity recorded'}</strong>
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'circadian' && (
                            <div className={classes.chartWrapper}>
                                <div className={classes.chartHeader}>
                                    <h4>24-Hour Hourly Habit Clustering</h4>
                                    <p>Identifies your peak natural circadian rhythm and habit density.</p>
                                </div>
                                <div className={classes.barsList}>
                                    {HOURLY_DATA.map((h, i) => (
                                        <div key={i} className={classes.barRow}>
                                            <span className={classes.barLabel}>{h.hour}</span>
                                            <div className={classes.barTrack}>
                                                <div
                                                    className={classes.barFill}
                                                    style={{
                                                        width: `${(h.count / 70) * 100}%`,
                                                        background: selectedPalette.color,
                                                    }}
                                                />
                                            </div>
                                            <span className={classes.barCount}>{h.count} logs</span>
                                            <span className={classes.barTag}>{h.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'weekly' && (
                            <div className={classes.chartWrapper}>
                                <div className={classes.chartHeader}>
                                    <h4>7-Day Day-of-Week Rhythm</h4>
                                    <p>Evaluate weekday vs weekend consistency to schedule realistic targets.</p>
                                </div>
                                <div className={classes.weeklyGrid}>
                                    {WEEKLY_DATA.map((w, i) => (
                                        <div key={i} className={classes.weeklyCol}>
                                            <div className={classes.weeklyBarTrack}>
                                                <div
                                                    className={classes.weeklyBarFill}
                                                    style={{
                                                        height: w.pct,
                                                        background: selectedPalette.color,
                                                    }}
                                                />
                                            </div>
                                            <span className={classes.weeklyDay}>{w.day}</span>
                                            <span className={classes.weeklyPct}>{w.pct}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'volume' && (
                            <div className={classes.chartWrapper}>
                                <div className={classes.chartHeader}>
                                    <h4>12-Month Cumulative Volume</h4>
                                    <p>Long-term habit expansion across monthly training and focus milestones.</p>
                                </div>
                                <div className={classes.volumeGrid}>
                                    {MONTHLY_DATA.map((m, i) => (
                                        <div key={i} className={classes.volumeCol}>
                                            <div className={classes.volumeBarTrack}>
                                                <div
                                                    className={classes.volumeBarFill}
                                                    style={{
                                                        height: `${(m.count / 240) * 100}%`,
                                                        background: selectedPalette.color,
                                                    }}
                                                />
                                            </div>
                                            <span className={classes.volumeMonth}>{m.month}</span>
                                            <span className={classes.volumeCount}>{m.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveHeatmap;
