import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import arrowRightIcon from "../../../Assets/Images/Icons/arrow-right.svg";
import './style.scss'
const KobeSection = ({products}) => {
    return (
        <section className={'kobe-section'}>
            <div className="container">
                <p className={'kobe-section__text'}>Jerseys kobe bryant</p>
                <h2 className={'kobe-section__title'}>kobe <span>bryant</span></h2>
                <h3 className={'kobe-section__subtitle'}>Authentic edition</h3>
                <p className={'kobe-section__description'}>Kobe bryant: a basketball legend. bryant crafted a storied career</p>
                <p className={'kobe-section__description'}>In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one.</p>
                <div className={'kobe-section__slider'}>
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
                                        <div className={'kobe-section__slider-item'}>
                                            <img src={product.image} alt={'t-shirt'}/>
                                            <div className={'kobe-section__slider-item-text'}>
                                                <p className={'kobe-section__slider-item-title'}>{product.name}</p>
                                                <p className={'kobe-section__slider-item-description'}>{product.description}</p>
                                                <p className={'kobe-section__slider-item-price'}>${product.price}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className={'kobe-section__action'}>
                    <button className={'kobe-section__action-button'}>View all <img src={arrowRightIcon} alt={'arrow-icon'}/></button>
                </div>
            </div>
        </section>
    );
};

export default KobeSection;