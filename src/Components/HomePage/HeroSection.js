import React from 'react';
import logoNike from '../../Assets/Images/nike-nba-logo.png';
import './style.scss'

const HeroSection = () => {
    return (
        <section className={'hero-section'}>
            <div className={'container hero-section__container'}>
                <div className={'hero-section__text'}>
                    <ul className={'hero-section__text-list'}>
                        <li className={'hero-section__text-list-item'}>
                            Jersey
                        </li>
                        <li className={'hero-section__text-list-item'}>
                            Nike & NBA Collaboration
                        </li>
                    </ul>
                </div>
                <h1 className={'hero-section__title'}>
                    Jersey
                    <img className={'hero-section__title-logo'} src={logoNike} alt={'logo'} />
                    Nba
                </h1>
            </div>
        </section>
    );
};

export default HeroSection;