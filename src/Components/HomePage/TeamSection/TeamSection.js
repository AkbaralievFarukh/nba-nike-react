import React from 'react';
import './style.scss'

const TeamSection = () => {
    const teams = Array.from({length: 30}, (_, index) => index + 1)
    return (
        <section className={'team-section'}>
            <div className="container">
                <p className={'team-section__text'}>Every team</p>
                <h2 className={'team-section__title'}>One <span>store</span></h2>
                <h3 className={'team-section__subtitle'}>Every <span>team</span></h3>
                <p className={'team-section__description'}>SElect your favorite team to view it’s jersys.</p>
                <div className={'team-section__cards'}>
                    <div className={'team-section__cards-region'}>
                        <h4 className={'team-section__cards-region-title'}>
                            East
                        </h4>
                        <h4 className={'team-section__cards-region-title'}>
                            West
                        </h4>
                    </div>
                    <div className={'team-section__cards-card'}>
                        {
                            teams.map((team, index) => (
                                <div className={`team-section__cards-card${team}`} key={index}>
                                    <div className={'team-section__cards-card-image'}>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;