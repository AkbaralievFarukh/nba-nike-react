import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Header from "../Components/Header/Header";
import AdminPage from "../Pages/AdminPage/AdminPage";
import Layout from "../Components/Layout/Layout";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><HomePage/></Layout>}/>
                <Route path="/admin" element={<Layout><AdminPage/></Layout>}/>
            </Routes>
        </>
    );
};

export default AppRoutes;