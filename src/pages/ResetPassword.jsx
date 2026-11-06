import React from 'react'
import "./ResetPassword.scss";
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function ResetPassword() {
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("token");
    const navigate = useNavigate();


  const ResetHandler = async () => {
    if (NewPassword === "" || ConfirmPassword === "") {
      alert("Please fill in all fields");
      return;
    }

    if (NewPassword !== ConfirmPassword) {
      alert("Password do not matched");
      return;
    }
    console.log("Button Clicked");

    try {

      const url = `${import.meta.env.VITE_API_AUTH}/ResetPassword`;
      const response = await fetch(url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

          },
          body: JSON.stringify({
            NewPassword,
            ConfirmPassword,
            ResetToken: resetToken
          }),

        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

        alert(data.message);
        setConfirmPassword("");
        setNewPassword("");
         navigate("/");


    } catch (error) {
      alert("Unable to connect to server");

    }
  }
  return (
    <div>
      <div className="containers-resetPassword">
        <div className="drum">
          <div className="content-lagayan">
            <div className="title-login-reset">
              <h1>Reset Password</h1>
            </div>

            <div className="gly-reset">


              <div className="inputan">
                <span>New Password</span>
                <input
                  value={NewPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <span>Confirm Password</span>
                <input
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

              </div>

              <button onClick={ResetHandler}>Confirm</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
