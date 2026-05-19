import classes from './Deploy.module.css';
import { FiTerminal, FiDollarSign, FiZap } from 'react-icons/fi';

const deployScript = `git clone https://github.com/smerio/ledgent
cp .env.example .env                # fill in tokens
cp terraform/terraform.tfvars.example terraform/terraform.tfvars
cd terraform && terraform init && terraform apply
# Telegram webhook is set automatically; bot is live`;

const Deploy = () => {
    return (
        <section className={classes.section} id="deploy">
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Deploy in minutes.</h2>
                    <p>
                        One Terraform apply provisions Lambda, DynamoDB, API Gateway, IAM,
                        and EventBridge. The Telegram webhook gets registered automatically.
                    </p>
                </div>

                <div className={classes.terminalWrap}>
                    <div className={classes.terminalBar}>
                        <FiTerminal className={classes.terminalIcon} aria-hidden="true" />
                        <span>bash</span>
                    </div>
                    <pre className={classes.terminal}>{deployScript}</pre>
                </div>

                <div className={classes.callouts}>
                    <div className={classes.callout}>
                        <FiDollarSign className={classes.calloutIcon} aria-hidden="true" />
                        <div>
                            <div className={classes.calloutTitle}>~$1–5 / month AWS</div>
                            <div className={classes.calloutText}>
                                Lambda + DynamoDB on pay-per-request. Zero always-on compute for a typical single-user account.
                            </div>
                        </div>
                    </div>
                    <div className={classes.callout}>
                        <FiZap className={classes.calloutIcon} aria-hidden="true" />
                        <div>
                            <div className={classes.calloutTitle}>~$0.01–0.05 / day LLM</div>
                            <div className={classes.calloutText}>
                                With Claude Haiku 4.5 on active use. Pluggable provider — bring your own key.
                            </div>
                        </div>
                    </div>
                </div>

                <p className={classes.fineprint}>
                    Prerequisites: an AWS account, a Telegram bot token from @BotFather, and an LLM API key.
                </p>
            </div>
        </section>
    );
};

export default Deploy;
