import React from 'react';
import './style.scss'

const TeamSection = () => {
    return (
        <section className={'team-section'}>
            <div className="container">
                <p className={'team-section__text'}>Every team</p>
                <h2 className={'team-section__title'}>One <span>store</span></h2>
                <h3 className={'team-section__subtitle'}>Every <span>team</span></h3>
                <p className={'team-section__description'}>SElect your favorite team to view it’s jersys.</p>
            </div>
        </section>
    );
};

export default TeamSection;