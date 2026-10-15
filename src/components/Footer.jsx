import classes from './Footer.module.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isNomos = location.pathname.startsWith('/nomos');

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.links}>
                    <Link to="/nomos">Nomos (Android)</Link>
                    <Link to="/ambit">Ambit (Android)</Link>
                    <Link to="/ledgent">Ledgent</Link>
                    <Link to="/nomos#privacy">Nomos Privacy</Link>
                    <Link to="/nomos/discoveries">Nomos Discoveries</Link>
                    <Link to="/ambit#privacy">Ambit Privacy</Link>
                    <Link to="/docs">Documentation</Link>
                    {!isNomos && (
                        <>
                            <a href="https://github.com/smerio" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://github.com/smerio/smer.io/blob/main/LICENSE" target="_blank" rel="noreferrer">License (AGPLv3)</a>
                        </>
                    )}
                </div>
                &copy; {new Date().getFullYear()} Smerio.
            </div>
        </footer>
    );
};

export default Footer;
