import React from 'react';
import AppRoutes from "./Routes/AppRoutes";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {history} from './Lib/history'
const App = () => {
    return (
        <BrowserRouter history={history}>
          <AppRoutes />
        </BrowserRouter>
    );
};

export default App;