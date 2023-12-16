import React from 'react';
import HeroSection from "../../Components/HomePage/HeroSection/HeroSection";
import BestsellersSection from "../../Components/HomePage/BestsellersSection/BestsellersSection";
import TeamSection from "../../Components/HomePage/TeamSection/TeamSection";

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <BestsellersSection />
            <TeamSection />
        </main>
    );
};

export default HomePage;