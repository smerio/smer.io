import classes from './Features.module.css';
import { FiDatabase, FiCpu, FiPieChart } from 'react-icons/fi';

const features = [
    {
        icon: <FiDatabase />,
        title: 'Ledger & accounting',
        bullets: [
            { cmd: null, text: 'Natural-language transaction entry — type "Bought 0.01 BTC for 800 USDT" and the bot parses, validates, and stores it.' },
            { cmd: null, text: 'FIFO cost basis — each asset tracked as individual lots, oldest consumed first on sells.' },
            { cmd: null, text: 'Multi-currency support — RUB, EUR, USD, USDT, BTC, ETH and any mix.' },
            { cmd: null, text: 'Realized PnL decomposed into asset price gains and FX rate movements.' },
            { cmd: null, text: 'Live unrealized PnL via CoinGecko (5-min cache).' },
            { cmd: '/set BTC Ledger 1.5', text: 'Balance reconciliation — snap a location to reality.' },
        ],
    },
    {
        icon: <FiCpu />,
        title: 'AI advisor',
        bullets: [
            { cmd: '/ask', text: 'Multi-turn conversation with full portfolio context — open lots in FIFO order, live prices, realized PnL, recent transactions.' },
            { cmd: '/sim sell', text: 'Exact FIFO sell simulation — per-lot breakdown, cost basis, proceeds, net PnL. No LLM math involved.' },
            { cmd: '/strategy', text: 'Evaluates your next move against your saved DCA strategy.' },
            { cmd: '/context set', text: 'Persistent instruction injected into every advisor call ("ignore reconciliation entries from May 2025").' },
            { cmd: null, text: 'Pluggable LLM backend — Claude, Gemini, OpenAI — selectable at deploy time.' },
        ],
    },
    {
        icon: <FiPieChart />,
        title: 'Virtual funds',
        bullets: [
            { cmd: '/fund create', text: 'Named sub-portfolios — pension, education, anything you allocate to over time.' },
            { cmd: '/fund alloc', text: 'Record monthly allocations with an auto-fetched BTC rate.' },
            { cmd: '/funds', text: 'Overview of every fund with P&L, avg cost, days since last contribution.' },
            { cmd: null, text: 'Built on top of the same FIFO engine — no separate accounting universe.' },
        ],
    },
];

const Features = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>One bot. Three jobs.</h2>
                    <p>Ledger and accounting engine. AI advisor with lot-level context. Virtual sub-funds for goal-based DCA.</p>
                </div>
                <div className={classes.grid}>
                    {features.map((f, i) => (
                        <div key={i} className={classes.card}>
                            <div className={classes.icon}>{f.icon}</div>
                            <h3>{f.title}</h3>
                            <ul className={classes.bullets}>
                                {f.bullets.map((b, j) => (
                                    <li key={j}>
                                        {b.cmd && <code className={classes.cmd}>{b.cmd}</code>}
                                        <span>{b.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
