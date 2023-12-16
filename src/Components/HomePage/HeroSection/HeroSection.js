import React from 'react';
import logoNike from '../../../Assets/Images/nike-nba-logo.png';
import heroImg from '../../../Assets/Images/hero.png'
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
                <div className={'hero-section__description'}>
                    <p className={'hero-section__description-text'}>
                        whichever <span>nba</span> <span>team</span> your support, get your jersey here today.
                    </p>
                </div>
                <img className={'hero-section__image'} src={heroImg} alt={'NBA TEAM'} />
            </div>
        </section>
    );
};

export default HeroSection;