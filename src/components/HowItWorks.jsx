import classes from './HowItWorks.module.css';

const HowItWorks = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Simplicity by Design</h2>
                <div className={classes.steps}>
                    <div className={classes.step}>
                        <div className={classes.number}>01</div>
                        <h3>Deploy</h3>
                        <p>Run a single Docker container. No complex database setup required.</p>
                        <pre className={classes.code}>docker-compose up -d</pre>
                    </div>
                    <div className={classes.connector}></div>
                    <div className={classes.step}>
                        <div className={classes.number}>02</div>
                        <h3>Connect</h3>
                        <p>Access your private dashboard from any browser on your local network.</p>
                    </div>
                    <div className={classes.connector}></div>
                    <div className={classes.step}>
                        <div className={classes.number}>03</div>
                        <h3>Track</h3>
                        <p>Manually input transactions or import CSVs. Data never leaves your device.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
