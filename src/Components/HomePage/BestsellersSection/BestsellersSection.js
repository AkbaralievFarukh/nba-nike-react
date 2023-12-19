import React from 'react';
import './style.scss'
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import {FreeMode} from 'swiper/modules';

import arrowRightIcon from '../../../Assets/Images/Icons/arrow-right.svg'
import nbaNikeLogoWhite from '../../../Assets/Images/nba-nike-logo__white.png'

const BestsellersSection = ({products}) => {
    return (
        <section className={'bestsellers-section'}>
            <div className="container">
                <p className={'bestsellers-section__text'}>Jerseys bestsellers</p>
                <h2 className={'bestsellers-section__title'}>Bestsellers</h2>
                <h3 className={'bestsellers-section__subtitle'}>Collection</h3>
                <p className={'bestsellers-section__description'}>The jerseys of the best nba players of the regular
                    seasons.</p>
                <div className={'bestsellers-section__slider'}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {
                            products.slice(0, 6).map((product, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={'bestsellers-section__slider-item'}>
                                            <img src={product.image} alt={'t-shirt'}/>
                                            <div className={'bestsellers-section__slider-item-text'}>
                                                <p className={'bestsellers-section__slider-item-title'}>{product.name}</p>
                                                <p className={'bestsellers-section__slider-item-description'}>{product.description}</p>
                                                <p className={'bestsellers-section__slider-item-price'}>${product.price}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className={'bestsellers-section__action'}>
                    <button className={'bestsellers-section__action-button'}>View all <img src={arrowRightIcon}
                                                                                           alt={'arrow-icon'}/></button>
                    <img src={nbaNikeLogoWhite} alt={'nba-nike-logo'} className={'bestsellers-section__action-logo'}/>
                </div>
            </div>
        </section>
    );
};

export default BestsellersSection;