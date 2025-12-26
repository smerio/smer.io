import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.content}>
                <h1 className={classes.title}>
                    True Financial <span className={classes.highlight}>Sovereignty</span>.
                </h1>
                <p className={classes.subtitle}>
                    The open-source, self-hosted wealth tracker for those who don't trust the cloud with their financial data.
                </p>
                <div className={classes.actions}>
                    <a href="https://demo.smer.io" target="_blank" rel="noreferrer" className={`${classes.btn} ${classes.primary}`}>Live demo</a>
                    <a href="https://github.com/smerio/smerio" target="_blank" rel="noreferrer" className={`${classes.btn} ${classes.secondary}`}>
                        View on GitHub
                    </a>
                </div>
            </div>
            {/* Abstract visual background element could go here */}
            <div className={classes.glow}></div>
        </section>
    );
};

export default Hero;
