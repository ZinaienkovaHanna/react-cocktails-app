import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu: FC = () => {
    return (
        <div className={styles.background}>
            <nav>
                <ul className={styles.wrapper}>
                    <li className={styles.list}>
                        <Link to="/" className={styles.logo}>
                            <img
                                src="/static/images/logo_cocktail.png"
                                alt="logo"
                                className={styles.logo}
                            />
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.nav_link
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.nav_link
                            }
                        >
                            Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ingredients"
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.nav_link
                            }
                        >
                            Ingredients
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/mylist"
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.nav_link
                            }
                        >
                            My list
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
