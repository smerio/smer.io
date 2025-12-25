import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>404</h1>
            <p className={classes.subtitle}>Page Not Found</p>
            <p className={classes.description}>The page you are looking for does not exist or has been moved.</p>
            <Link to="/" className={classes.homeBtn}>
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;
