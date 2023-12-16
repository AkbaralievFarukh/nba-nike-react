import React from 'react';
import './style.scss'
import tShirt from '../../../Assets/Images/t-shirt.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';

const BestsellersSection = () => {
    return (
        <section className={'bestsellers-section'}>
            <div className="container">
                <p className={'bestsellers-section__text'}>Jerseys bestsellers</p>
                <h2 className={'bestsellers-section__title'}>Bestsellers</h2>
                <h3 className={'bestsellers-section__subtitle'}>Collection</h3>
                <p className={'bestsellers-section__description'}>The jerseys of the best nba players of the regular seasons.</p>
                <div className={'bestsellers-section__slider'}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={tShirt} alt="t-shirt" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tShirt} alt="t-shirt" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tShirt} alt="t-shirt" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tShirt} alt="t-shirt" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tShirt} alt="t-shirt" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BestsellersSection;