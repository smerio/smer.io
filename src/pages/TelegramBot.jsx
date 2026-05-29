import { useEffect, useState } from 'react';
import { FiMessageSquare, FiImage, FiLock, FiCpu, FiTerminal, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';
import TelegramBotChat from '../components/TelegramBotChat';
import classes from './TelegramBot.module.css';

const TelegramBot = () => {
    const [copiedText, setCopiedText] = useState('');

    useEffect(() => {
        document.title = 'Telegram Bot Integration - Stateless Personal Budget Tracking | Smerio';
        
        // Add meta description dynamically
        const metaDesc = document.querySelector('meta[name="description"]');
        const oldDesc = metaDesc ? metaDesc.getAttribute('content') : '';
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Log expenses and receipts instantly with the Smerio Telegram Bot. Paste free-format text or upload photos of bills for secure, stateless, and real-time AI budget tracking.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Log expenses and receipts instantly with the Smerio Telegram Bot. Paste free-format text or upload photos of bills for secure, stateless, and real-time AI budget tracking.';
            document.head.appendChild(meta);
        }

        return () => {
            // Restore description on unmount if we want, or just leave it
            if (metaDesc && oldDesc) {
                metaDesc.setAttribute('content', oldDesc);
            }
        };
    }, []);

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedText(id);
        setTimeout(() => setCopiedText(''), 2000);
    };

    const terraformCode = `git clone https://github.com/smerio/smerio-tg-bot.git
cd smerio-tg-bot/terraform
cp terraform.tfvars.example terraform.tfvars`;

    const tfvarsCode = `bot_id                   = "my-personal-bot"
allowed_telegram_user_id = 123456789        # Your numeric User ID
smerio_api_url           = "https://smerio.yourdomain.com"
smerio_telegram_token    = "smerio_tg_secret_gateway_token_here"
telegram_bot_token       = "123456789:ABCdefGh..."
llm_provider             = "gemini"
llm_api_key              = "AIzaSy..."       # Google AI Studio / Gemini Key`;

    const deployCode = `terraform init
terraform apply`;

    return (
        <div className={classes.page}>
            {/* 🎨 Hero Section */}
            <section className={classes.heroSection}>
                <div className={classes.container}>
                    <div className={classes.heroGrid}>
                        <div className={classes.heroCopy}>
                            <span className={classes.badge}>Integrations / Telegram Bot</span>
                            <h1 className={classes.title}>
                                Your Budget,<br />Just a Message Away.
                            </h1>
                            <p className={classes.subtitle}>
                                Log transactions in seconds using natural language or receipt photos.
                                Secure, serverless, and 100% database-free.
                            </p>
                            <div className={classes.ctas}>
                                <a href="#setup" className={classes.btnPrimary}>
                                    Get Started
                                </a>
                                <a 
                                    href="https://github.com/smerio/smerio-tg-bot" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={classes.btnSecondary}
                                >
                                    <FiGithub /> View on GitHub
                                </a>
                            </div>
                        </div>
                        <div className={classes.heroVisual}>
                            <TelegramBotChat />
                        </div>
                    </div>
                </div>
            </section>

            {/* 💡 Value Proposition */}
            <section className={classes.valueSection}>
                <div className={classes.container}>
                    <div className={classes.sectionHeader}>
                        <h2>A budget tracker that adapts to you.</h2>
                        <p>No spreadsheets. No complex forms. Just snap and go.</p>
                    </div>
                    <div className={classes.grid}>
                        <div className={classes.card}>
                            <div className={classes.cardIcon}><FiMessageSquare /></div>
                            <h3>Natural Chatting</h3>
                            <p>
                                Stop opening manual logsheets. Mention <em>"spent $20 on coffee at Starbucks"</em> in plain text 
                                and let our integrated LLM model handle categorization.
                            </p>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.cardIcon}><FiImage /></div>
                            <h3>Photo Receipt OCR</h3>
                            <p>
                                Snap a picture of your ticket. Multimodal AI parses the store, totals, items, and tax rules, 
                                preparing a transaction draft instantly.
                            </p>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.cardIcon}><FiCpu /></div>
                            <h3>100% Database-Free</h3>
                            <p>
                                Runs entirely stateless on AWS Lambda. Bot state is encoded in zero-width invisible 
                                HTML payloads (`\u200d`) right in your chat, for absolute zero ($0.00) AWS hosting costs.
                            </p>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.cardIcon}><FiLock /></div>
                            <h3>Zero-Trust Isolation</h3>
                            <p>
                                Restricts usage strictly to your unique numeric Telegram User ID. Unrecognized usernames are 
                                immediately dropped, keeping your gateway locked.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📱 Interactive Showcase Section */}
            <section className={classes.showcaseSection}>
                <div className={classes.container}>
                    <div className={classes.showcaseGrid}>
                        <div className={classes.showcaseVisual}>
                            <div className={classes.glassContainer}>
                                <div className={classes.glowBall}></div>
                                <div className={classes.glowBallSecondary}></div>
                                <div className={classes.payloadShowcase}>
                                    <div className={classes.payloadHeader}>
                                        <span className={classes.payloadTitle}>Stateless Inline Payloads</span>
                                        <span className={classes.payloadBadge}>Tech Detail</span>
                                    </div>
                                    <p>
                                        How does a database-free bot store transaction confirmations? By hiding serialised JSON string records inside the Telegram Inline Keyboard response text using invisible zero-width unicode spaces (<code>\u200d\u200c</code>).
                                    </p>
                                    <div className={classes.codeVisual}>
                                        <code>{`// Invisible State Payload Schema
{"c":"Food","s":"FastFood","a":15.00,"u":"USD"}`}</code>
                                    </div>
                                    <div className={classes.featureList}>
                                        <div className={classes.featureListItem}>
                                            <FiCheckCircle className={classes.checkIcon} />
                                            <span>No SQLite, Postgres, or DynamoDB needed</span>
                                        </div>
                                        <div className={classes.featureListItem}>
                                            <FiCheckCircle className={classes.checkIcon} />
                                            <span>Instant callback parsing upon tapping confirmation button</span>
                                        </div>
                                        <div className={classes.featureListItem} >
                                            <FiCheckCircle className={classes.checkIcon} />
                                            <span>Zero database footprint and zero maintenance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.showcaseCopy}>
                            <h2>Simulate the Interactive Sandbox.</h2>
                            <p>
                                Play around with the live chat simulator widget above. Alternate between text entries or snaps, 
                                and tap the active button layouts to verify how Smerio resolves parameters before syncing them directly 
                                to your backend REST endpoints.
                            </p>
                            <p>
                                The bot behaves exactly like standard messenger chats, allowing high-performance, real-world expense logging 
                                in seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🛡️ Premium Feature Matrix */}
            <section className={classes.matrixSection}>
                <div className={classes.container}>
                    <div className={classes.sectionHeader}>
                        <h2>Premium Integration Specifications</h2>
                        <p>Under the hood of Smerio's custom Telegram gateway.</p>
                    </div>
                    <div className={classes.tableWrapper}>
                        <table className={classes.table}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Technical Blueprint</th>
                                    <th>User Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={classes.tdFeature}>Multimodal Receipt OCR</td>
                                    <td>Gemini 2.5 Flash / Claude 3.5 Haiku pipeline structure</td>
                                    <td>Take a photo of your paper bills to extract price tables automatically.</td>
                                </tr>
                                <tr>
                                    <td className={classes.tdFeature}>Stateless Inline Controls</td>
                                    <td>Zero-width invisible HTML unicode encapsulation (`\u200d`)</td>
                                    <td>Zero architecture cost; no operational storage database overhead.</td>
                                </tr>
                                <tr>
                                    <td className={classes.tdFeature}>Strict User Isolation</td>
                                    <td>Authorized Telegram user-id validation matches</td>
                                    <td>Total private locking against unauthorized usage or random logging attempts.</td>
                                </tr>
                                <tr>
                                    <td className={classes.tdFeature}>Dynamic Taxonomy</td>
                                    <td>Gateway REST endpoint synchronization</td>
                                    <td> Bot automatically inherits your exact bank accounts, budgets, and categories.</td>
                                </tr>
                                <tr>
                                    <td className={classes.tdFeature}>AWS Terraform Blueprint</td>
                                    <td>AWS Lambda + API Gateway Terraform deployment module</td>
                                    <td>Host multiple isolated instances securely inside standard AWS free tier.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 🚀 Setup Guide */}
            <section id="setup" className={classes.setupSection}>
                <div className={classes.container}>
                    <div className={classes.sectionHeader}>
                        <h2>One-Click Deployment Blueprint</h2>
                        <p>Follow these steps to connect and deploy your private serverless Telegram budget companion.</p>
                    </div>

                    <div className={classes.stepsGrid}>
                        {/* Step 1 */}
                        <div className={classes.stepCard}>
                            <div className={classes.stepNum}>01</div>
                            <h3>Register Your Bot</h3>
                            <p>
                                Open Telegram, initiate a chat with <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className={classes.link}>@BotFather <FiExternalLink /></a>, and execute the <code>/newbot</code> command. Complete the onboarding steps to receive your **HTTP API Token**.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className={classes.stepCard}>
                            <div className={classes.stepNum}>02</div>
                            <h3>Configure Smerio Integration</h3>
                            <p>
                                Find your Telegram user id using <a href="https://t.me/userinfobot" target="_blank" rel="noopener noreferrer" className={classes.link}>@userinfobot <FiExternalLink /></a>. Navigate to **Smerio Settings &rarr; Telegram Bot Integration**, input your user id, and copy the generated secure **Gateway Token**.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className={classes.stepCard}>
                            <div className={classes.stepNum}>03</div>
                            <h3>Deploy with Terraform</h3>
                            <p>
                                Clone the repository and configure your credentials.
                            </p>

                            <div className={classes.codeContainer}>
                                <div className={classes.codeHeader}>
                                    <span>bash command</span>
                                    <button 
                                        onClick={() => copyToClipboard(terraformCode, 'git')} 
                                        className={classes.copyBtn}
                                    >
                                        {copiedText === 'git' ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                                <pre><code>{terraformCode}</code></pre>
                            </div>

                            <p className={classes.codeSpacing}>
                                Populate your parameters inside <code>terraform.tfvars</code>:
                            </p>

                            <div className={classes.codeContainer}>
                                <div className={classes.codeHeader}>
                                    <span>terraform.tfvars</span>
                                    <button 
                                        onClick={() => copyToClipboard(tfvarsCode, 'tfvars')} 
                                        className={classes.copyBtn}
                                    >
                                        {copiedText === 'tfvars' ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                                <pre><code>{tfvarsCode}</code></pre>
                            </div>

                            <p className={classes.codeSpacing}>
                                Run Terraform to deploy to your AWS cloud account instantly:
                            </p>

                            <div className={classes.codeContainer}>
                                <div className={classes.codeHeader}>
                                    <span>bash deploy</span>
                                    <button 
                                        onClick={() => copyToClipboard(deployCode, 'deploy')} 
                                        className={classes.copyBtn}
                                    >
                                        {copiedText === 'deploy' ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                                <pre><code>{deployCode}</code></pre>
                            </div>

                            <div className={classes.successCallout}>
                                💡 Once deployment completes, copy the generated AWS URL output, paste it into your Smerio Bot integration panel, and your webhook will activate automatically!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TelegramBot;
