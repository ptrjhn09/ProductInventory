
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


function ProtectedRoutes() {

    const token = localStorage.getItem("token");

    if (!token) {
        console.log("You dont have token.");
        return <Navigate to="/" />;

    }

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp <= currentTime) {
            localStorage.removeItem("token");
            return <Navigate to="/" />;
        }

        return <Outlet />;
    } catch (error) {
        localStorage.removeItem("token");
        return <Navigate to="/" />;
    }




    return (
        <div>

        </div>
    )
}

export default ProtectedRoutes
