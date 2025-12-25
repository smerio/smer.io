import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.links}>
                    <a href="/docs">Documentation</a>
                    <a href="https://github.com/smerio/smerio" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://github.com/smerio/smerio/blob/main/LICENSE" target="_blank" rel="noreferrer">License (AGPLv3)</a>
                </div>
                &copy; {new Date().getFullYear()} Smerio. Open Source Wealth Tracker.
            </div>
        </footer>
    );
};

export default Footer;
