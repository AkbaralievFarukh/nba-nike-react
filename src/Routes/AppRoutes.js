import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Header from "../Components/Header/Header";
import AdminPage from "../Pages/AdminPage/AdminPage";
import Layout from "../Components/Layout/Layout";
import {isAuth} from "../Lib/helper";
import ProtectedRoute from "./ProtectedRoute";
import SignInPage from "../Pages/SignInPage/SignInPage";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><HomePage/></Layout>}/>
                <Route path="/sign-in" element={<Layout><SignInPage/></Layout>}/>
                <Route path="/admin" element={<ProtectedRoute isAuth={isAuth()} children={<Layout><AdminPage/></Layout>}/>} />
            </Routes>
        </>
    );
};

export default AppRoutes;