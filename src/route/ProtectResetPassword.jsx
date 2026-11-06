import React from 'react'
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function ProtectResetPassword() {

    const [searchParams] = useSearchParams();
    const resetToken = searchParams.get("token");


    if (!resetToken) {
        alert("You dont have access token");
        console.log("You dont have token");
        return <Navigate to="/" />;

    }

    try {
        const decoded = jwtDecode(resetToken);
        const currentTime = Date.now() / 1000;

        if(decoded.exp <= currentTime){
            return <Navigate to="/"/>;
        }

        return <Outlet/>;

    }catch(error){

        return<Navigate to="/"/>;
    }
    


  return (
        <div>

        </div>
    )
}

export default ProtectResetPassword
