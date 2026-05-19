import { useEffect } from 'react';
import classes from './Faq.module.css';
import { FiPlus } from 'react-icons/fi';

const items = [
    {
        id: 'faq-cost',
        q: 'How much does it actually cost to run?',
        a: (
            <>
                <p>
                    Roughly <strong>$1–5 per month on AWS</strong> for a single-user
                    workload (Lambda invocations + DynamoDB reads/writes; no
                    always-on compute). On top of that, <strong>$0.01–0.05 per day</strong>{' '}
                    for LLM calls when you use the bot actively, assuming Claude Haiku 4.5.
                </p>
                <p>
                    Both numbers track usage — if you stop typing to the bot, both go to zero.
                </p>
            </>
        ),
    },
    {
        id: 'faq-privacy',
        q: 'Where does my data live?',
        a: (
            <p>
                In your own DynamoDB table, in your own AWS account. The bot processes
                messages through your Lambda. There is no Ledgent backend, no third-party
                aggregator, and no analytics. The only outbound calls are to your chosen
                LLM provider (Claude / Gemini / OpenAI) and to CoinGecko for live prices.
            </p>
        ),
    },
    {
        id: 'faq-assets',
        q: 'Which assets and currencies are supported?',
        a: (
            <p>
                BTC, ETH, USDT, RUB, EUR, USD out of the box, and arbitrary combinations
                between them — the FIFO engine and FX decomposition don't care which
                pair you trade. Adding a new asset means a config entry, not a code change.
            </p>
        ),
    },
    {
        id: 'faq-llm',
        q: 'Can I swap the LLM provider?',
        a: (
            <p>
                Yes. The parser and advisor are LLM-agnostic — select Claude, Gemini, or
                OpenAI at deploy time via the <code>LLM_PROVIDER</code> environment
                variable. Bring your own API key.
            </p>
        ),
    },
    {
        id: 'faq-fit',
        q: 'Who is Ledgent not for?',
        a: (
            <p>
                If you want a polished mobile app with charts, this isn't it — it's a
                Telegram bot. If you trade at high frequency, the FIFO model isn't
                designed for that pattern. And if you're not comfortable managing your
                own AWS account and running <code>terraform apply</code>, you'll want a
                hosted service instead.
            </p>
        ),
    },
    {
        id: 'faq-telegram',
        q: 'Why Telegram specifically?',
        a: (
            <p>
                Two reasons. First, the chat UI is the data-entry tool — typing
                "Bought 0.01 BTC for 800 USDT" beats opening a spreadsheet. Second,
                Telegram bots have a clean webhook model that maps perfectly to a
                Lambda function, which is what makes the cost profile so low.
            </p>
        ),
    },
];

const Faq = () => {
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id) {
            const el = document.getElementById(id);
            if (el && el.tagName === 'DETAILS') {
                el.setAttribute('open', '');
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Questions, answered.</h2>
                </div>
                <div className={classes.list}>
                    {items.map((it) => (
                        <details key={it.id} id={it.id} className={classes.item}>
                            <summary className={classes.summary}>
                                <span>{it.q}</span>
                                <FiPlus className={classes.chevron} aria-hidden="true" />
                            </summary>
                            <div className={classes.answer}>{it.a}</div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
