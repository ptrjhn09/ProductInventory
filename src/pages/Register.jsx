import "./register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";



function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    const url = `${import.meta.env.VITE_API_AUTH}/Register`;
    try {
      const response = await fetch(url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        alert(data.message);
        return;
      }
      alert("Succesfully Registered");
      setEmail("");
      setPassword("");
      
    } catch (error) {
      alert("Unable to connect to server");
    }
  };

  return (
    <div className="containers">
      <div className="drum">
        <div className="content-lagayan">
          <div className="title-register">
            <h1>Register</h1>
          </div>

          <div className="gly">
            <div className="inputan-register">
              <span>Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <span>Password</span>
              <input
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button onClick={handleRegister}>Register </button>
            <p>
              Do you have an account?
              <Link to="/">
                <span> Log in now!</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
