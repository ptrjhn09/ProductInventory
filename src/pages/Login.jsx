import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const loginHandle = async () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    try {


      const url = `${import.meta.env.VITE_API_AUTH}/Login`;
  

      const response = await fetch(url,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );



      const data = await response.text();

      if (response.ok) {

        console.log("Login successful");
        console.log("data: ", data);


        localStorage.setItem("token", data);
        navigate("/HomePage");

      } else {
        alert("Wrong email or password");

      }

    } catch (error) {
      alert("Unable to connect to server");
      
    }
  };


  return (
    <div className="containers">

      <div className="drum">
        <div className="content-lagayan">
          <div className="title-login">
            <h1>Welcome Back!</h1>
          </div>

          <div className="gly">
            <div className="inputan">
              <span>Email</span>
              <input type="email"
                onChange={(e) => setEmail(e.target.value)} />

              <span>Password</span>
              <input type="Password"
                onChange={(e) => setPassword(e.target.value)} />
              <Link to="/forgot">
                <span>Forgot Password?</span>
              </Link>
            </div>

            <button onClick={loginHandle}  >Log in </button>
            <p>
              Don't have an account?
              <Link to="/register">
                <span> Sign up now!</span>
              </Link>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
