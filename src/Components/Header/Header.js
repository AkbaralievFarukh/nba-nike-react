import React from 'react';
import logo from '../../Assets/Images/Logo.png';
import search from '../../Assets/Images/Search.png';
import cart from '../../Assets/Images/Cart.png';
import favorite from '../../Assets/Images/Favorite.png';
import {Link} from "react-router-dom";
import './style.scss';

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'container header-wrapper'}>
                <Link to={'/'} className={'header-logo'}>
                    <img className={'header-logo__img'} src={logo} alt={'logo'}/>
                </Link>
                <nav className={'header-nav'}>
                    <ul className={'header-nav__list'}>
                        <li className={'header-nav__list-item'}>
                            <Link to={'/'} className={'header-nav__list-item-link'}>Man</Link>
                        </li>
                        <li className={'header-nav__list-item'}>
                            <Link to={'/'} className={'header-nav__list-item-link'}>Woman</Link>
                        </li>
                        <li className={'header-nav__list-item'}>
                            <Link to={'/'} className={'header-nav__list-item-link'}>Jersey</Link>
                        </li>
                        <li className={'header-nav__list-item'}>
                            <Link to={'/'} className={'header-nav__list-item-link'}>Teams</Link>
                        </li>
                        <li className={'header-nav__list-item'}>
                            <Link to={'/'} className={'header-nav__list-item-link'}>App</Link>
                        </li>
                    </ul>
                </nav>
                <div className={'header-actions'}>
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
            </div>
        </header>
    );
};

export default Header;