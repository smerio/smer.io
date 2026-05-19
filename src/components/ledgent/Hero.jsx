import classes from './Hero.module.css';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';
import ChatMockup from './ChatMockup';
import { LEDGENT_REPO } from './constants';

const heroMessages = [
    { from: 'user', text: 'Bought 1215 USDT using 94000 RUB on Binance P2P, May 7' },
    { from: 'bot', text: '✅ P2P_BUY logged — 1215 USDT @ 77.37 RUB\nBalance: USDT +1215 @ Binance P2P' },
];

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.glow}></div>
            <div className={classes.container}>
                <div className={classes.copy}>
                    <div className={classes.eyebrow}>A Smerio sub-project</div>
                    <h1 className={classes.title}>
                        Your crypto portfolio, <span className={classes.highlight}>understood</span>.
                    </h1>
                    <p className={classes.subtitle}>
                        A self-hosted Telegram bot that tracks every trade, runs proper FIFO
                        accounting, and answers portfolio questions in plain English — powered
                        by AI, deployed on AWS in minutes.
                    </p>
                    <div className={classes.actions}>
                        <a
                            href={LEDGENT_REPO}
                            target="_blank"
                            rel="noreferrer"
                            className={`${classes.btn} ${classes.primary}`}
                        >
                            <FaGithub /> View on GitHub
                        </a>
                        <a
                            href="#deploy"
                            className={`${classes.btn} ${classes.secondary}`}
                        >
                            <FaTelegramPlane /> Deploy in minutes
                        </a>
                    </div>
                </div>
                <div className={classes.mockupWrap}>
                    <ChatMockup messages={heroMessages} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
