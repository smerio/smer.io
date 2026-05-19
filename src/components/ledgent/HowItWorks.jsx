import classes from './HowItWorks.module.css';
import ChatMockup from './ChatMockup';

const architecture = `Telegram ──▶ API Gateway (HTTP) ──▶ Lambda (webhook, ~100ms)
                                         │
                              async self-invoke (fire & forget)
                                         │
                                    Lambda (processor, up to 60s)
                                         │
                          ┌──────────────┼──────────────┐
                          ▼              ▼              ▼
                      DynamoDB      Anthropic       CoinGecko
                    (single table)  (Haiku 4.5)    (price feed)`;

const askMessages = [
    { from: 'user', text: '/ask if I sell 0.00433 BTC what\'s my PnL?' },
    { from: 'bot', text: 'Thinking…\nCost basis: 0.00433 BTC from 2023-12-22 @ $43,757/BTC\nCurrent price: $105,234/BTC\nPnL on this sale: +$266.19 (+141%)\nThis is your oldest lot (FIFO) — deep in profit.' },
];

const simMessages = [
    { from: 'user', text: '/sim sell 1 BTC' },
    { from: 'bot', text: `FIFO sell simulation: 1 BTC @ $105,234

2023-12-22  0.00268 BTC  @$43,757   +$164.38
2024-01-15  0.02736 BTC  @$40,203   +$1,783.93
2024-02-01  0.03160 BTC  @$47,476   +$1,826.58
... (9 more lots)

Cost basis:   $73,190
Proceeds:     $105,234
Net PnL:      +$32,044  (+43.8%)` },
];

const HowItWorks = () => {
    return (
        <section className={classes.section} id="how-it-works">
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Serverless, single-table, self-hosted.</h2>
                    <p>
                        One Lambda for the webhook reply, another for the heavy lifting,
                        one DynamoDB table holding everything. No always-on compute.
                    </p>
                </div>

                <div className={classes.diagramWrap}>
                    <pre className={classes.diagram}>{architecture}</pre>
                </div>

                <div className={classes.examplesHeader}>
                    <h3>The advisor knows your lots.</h3>
                    <p>Same FIFO engine the bot uses to log trades — exposed through plain-English questions and exact simulations.</p>
                </div>

                <div className={classes.examples}>
                    <div className={classes.example}>
                        <div className={classes.caption}>Ask in plain English</div>
                        <ChatMockup messages={askMessages} />
                    </div>
                    <div className={classes.example}>
                        <div className={classes.caption}>Or get the exact math</div>
                        <ChatMockup messages={simMessages} monoBubble />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
