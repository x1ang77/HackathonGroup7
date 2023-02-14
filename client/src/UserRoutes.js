import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "./api/users";

const UserRoutes = () => {
    const { isAuth, user } = checkAuth();

    return isAuth && !user.data.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default UserRoutes;
