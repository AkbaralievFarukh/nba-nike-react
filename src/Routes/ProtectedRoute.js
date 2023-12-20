import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
    if (!isAuth) {
        return <Navigate to="/sign-in" replace />;
    } else {
        return children;
    }
};

export default ProtectedRoute;