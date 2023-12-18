import React, {useEffect} from 'react';
import HeroSection from "../../Components/HomePage/HeroSection/HeroSection";
import BestsellersSection from "../../Components/HomePage/BestsellersSection/BestsellersSection";
import TeamSection from "../../Components/HomePage/TeamSection/TeamSection";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../Redux/Actions/ProductAction";
import KobeSection from "../../Components/HomePage/KobeSection/KobeSection";
import AppSection from "../../Components/HomePage/AppSection/AppSection";

const HomePage = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state);
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    return (
        <main>
            <HeroSection />
            <BestsellersSection products={products} />
            <TeamSection />
            <KobeSection products={products} />
            <AppSection />
        </main>
    );
};

export default HomePage;