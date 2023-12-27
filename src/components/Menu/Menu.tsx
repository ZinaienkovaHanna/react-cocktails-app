import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import style from './Menu.module.css';

const Menu: FC = () => {
    return (
        <div className={style.background}>
            <nav>
                <ul className={style.wrapper}>
                    <li className={style.list}>
                        <Link to="/" className={style.logo}>
                            <img
                                src="/static/images/logo_cocktail.png"
                                alt="logo"
                                className={style.logo}
                            />
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? style.active : style.nav_link
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                isActive ? style.active : style.nav_link
                            }
                        >
                            Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ingredients"
                            className={({ isActive }) =>
                                isActive ? style.active : style.nav_link
                            }
                        >
                            Ingredients
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/mylist"
                            className={({ isActive }) =>
                                isActive ? style.active : style.nav_link
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
