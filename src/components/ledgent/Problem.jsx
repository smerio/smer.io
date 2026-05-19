import classes from './Problem.module.css';
import { FiAlertTriangle } from 'react-icons/fi';

const pains = [
    "You can't easily compute accurate realized PnL with proper FIFO cost basis.",
    "FX gains/losses — buying BTC with RUB, selling for EUR — are invisible.",
    "There's no quick way to ask \"if I sell 1 BTC right now, what's my profit?\"",
    "Spreadsheet maintenance is manual, error-prone, and never up to date.",
];

const Problem = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>The spreadsheet stops working at some point.</h2>
                    <p>
                        Most people who actively trade crypto across multiple exchanges,
                        wallets, and P2P platforms end up with a mess of rows that nobody
                        can fully trust. They know roughly what they hold, but:
                    </p>
                </div>
                <ul className={classes.list}>
                    {pains.map((text, i) => (
                        <li key={i} className={classes.item}>
                            <FiAlertTriangle className={classes.icon} aria-hidden="true" />
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
                <p className={classes.closer}>
                    Ledgent replaces the spreadsheet with a conversational interface that
                    stores every transaction, runs the accounting engine automatically, and
                    lets you ask questions in plain English.
                </p>
            </div>
        </section>
    );
};

export default Problem;
