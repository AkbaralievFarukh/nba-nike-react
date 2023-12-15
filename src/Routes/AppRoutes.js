import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Header from "../Components/Header/Header";

const AppRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </>
    );
};

export default AppRoutes;