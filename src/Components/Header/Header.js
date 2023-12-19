import React, { useState } from 'react';
import logo from '../../Assets/Images/Logo.png';
import search from '../../Assets/Images/Search.png';
import cart from '../../Assets/Images/Cart.png';
import favorite from '../../Assets/Images/Favorite.png';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    return (
        <header className={`header ${isBurgerMenuOpen ? 'burger-menu-open' : ''}`}>
            <div className={`container header-wrapper ${isBurgerMenuOpen ? 'burger-menu-open' : ''}`}>
                <Link to={'/'} className={'header-logo'}>
                    <img className={'header-logo__img'} src={logo} alt={'logo'} />
                </Link>
                <nav className={`header-nav ${isBurgerMenuOpen ? 'burger-menu-open' : ''}`}>
                    <ul className={'header-nav__list'}>
                        <li className={'header-nav__list-item'}>
                            <Link to={'/'} className={'header-nav__list-item-link'}>
                                Home
                            </Link>
                        </li>
                        <li className={'header-nav__list-item'}>
                            <Link to={'/admin'} className={'header-nav__list-item-link'}>
                                Admin
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={`header-actions ${isBurgerMenuOpen ? 'burger-menu-open' : ''}`}>
                    <button className={'header-actions__button'}>
                        <img className={'header-actions__button-icon'} src={search} alt={'search'} />
                    </button>
                    <button className={'header-actions__button'}>
                        <img className={'header-actions__button-icon'} src={favorite} alt={'favorite'} />
                    </button>
                    <button className={'header-actions__button'}>
                        <img className={'header-actions__button-icon'} src={cart} alt={'cart'} />
                    </button>
                </div>
                <div className="burger-menu-toggle" onClick={toggleBurgerMenu}>
                    <div className={`bar ${isBurgerMenuOpen ? 'open' : ''}`} />
                    <div className={`bar ${isBurgerMenuOpen ? 'open' : ''}`} />
                    <div className={`bar ${isBurgerMenuOpen ? 'open' : ''}`} />
                </div>
            </div>
        </header>
    );
};

export default Header;
