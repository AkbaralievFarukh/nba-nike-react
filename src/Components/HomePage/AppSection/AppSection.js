import React from 'react';
import appImage from '../../../Assets/Images/app-section-image.png'
import './style.scss'
import arrowRightIcon from "../../../Assets/Images/Icons/arrow-right.svg";

const AppSection = () => {
    return (
        <section className={'app-section'}>
            <div className="container">
                <p className={'app-section__text'}>The application</p>
                <h2 className={'app-section__title'}>The nike</h2>
                <h3 className={'app-section__subtitle'}>App</h3>
                <p className={'app-section__description'}>Here you can find many interesting and useful from nike.</p>
                <p className={'app-section__description'}>Download the application from nike.</p>
                <img className={'app-section__image'} src={appImage} alt={'app image'}/>
                <div className={'app-section__image-text'}>
                    <p className={'app-section__image-text-title'}>Nike Traning Club</p>
                    <p className={'app-section__image-text-description'}>Home workouts & fitness plans</p>
                </div>
                <div className={'app-section__action'}>
                    <button className={'app-section__action-button'}>View all <img src={arrowRightIcon} alt={'arrow-icon'}/></button>
                </div>
            </div>
        </section>
    );
};

export default AppSection;