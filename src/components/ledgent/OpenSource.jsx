import classes from './OpenSource.module.css';
import { FaGithub } from 'react-icons/fa';
import { FiCode, FiShield } from 'react-icons/fi';
import { LEDGENT_REPO } from './constants';

const points = [
    {
        icon: <FiCode />,
        title: 'MIT licensed',
        text: 'Fork it, change it, run it however you want. No strings, no telemetry, no upsell.',
    },
    {
        icon: <FiShield />,
        title: 'Your AWS, your data',
        text: 'Every transaction lives in your DynamoDB table. Nothing routes through a Ledgent server because there is no Ledgent server.',
    },
    {
        icon: <FaGithub />,
        title: 'Built in the open',
        text: 'Full Terraform configuration, Python source, prompts and tests — all on GitHub. Pull requests welcome.',
    },
];

const OpenSource = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Open source. Self-hosted. Yours.</h2>
                    <p>
                        Ledgent isn't a service you sign up for. It's code you run, in your
                        own AWS account, in front of your own Telegram bot.
                    </p>
                </div>

                <div className={classes.grid}>
                    {points.map((p, i) => (
                        <div key={i} className={classes.card}>
                            <div className={classes.icon}>{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </div>
                    ))}
                </div>

                <div className={classes.cta}>
                    <a
                        href={LEDGENT_REPO}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.btn}
                    >
                        <FaGithub /> View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
