import { useLocation, NavLink } from 'react-router-dom';
import classes from './SubNav.module.css';
import { getSubNavItems } from './subNavConfig';

const SubNav = () => {
    const { pathname } = useLocation();
    const items = getSubNavItems(pathname);

    if (items.length === 0) return null;

    return (
        <div className={classes.subnav}>
            <div className={classes.container}>
                {items.map((item) => {
                    if (item.external) {
                        return (
                            <a
                                key={item.name}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={item.cta ? classes.cta : classes.link}
                            >
                                {item.name}
                            </a>
                        );
                    }
                    if (item.anchor || item.path.startsWith('#')) {
                        return (
                            <a
                                key={item.name}
                                href={item.path}
                                className={item.cta ? classes.cta : classes.link}
                            >
                                {item.name}
                            </a>
                        );
                    }
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? `${classes.link} ${classes.active}` : classes.link
                            }
                        >
                            {item.name}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default SubNav;
