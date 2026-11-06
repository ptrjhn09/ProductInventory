
import { useState } from "react";
import "./Forgot.scss";
import { Link } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState("");


  const ForgotPasswordHandler = async () =>{
    if(email === ""){
      alert("Please fill the field");
      return;
    }

    try{
      const url = `${import.meta.env.VITE_API_AUTH}/ForgotPassword`;
      const response = await fetch(url,
        {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email
          }),

        }
        
      );
      
      const data = await response.json();
      if(response.ok){
        alert(data.message);
        setEmail("");
        console.log("The link was sent to your email");
      }else{
        alert(data.message);
      }

    }catch(error){
      alert("Unable to connect to server");
    }



  }



  return (
    <div className="containers">
      <div className="drum">
        <div className="content-lagayan-forgot">
          <div className="title-Forgot">
            <h1>Forgot password?</h1>
            <span>
              Enter your email address and we'll send a link to your email.
            </span>
          </div>

          <div className="gly-Forgot">
            <div className="inputan-Forgot">
              <span>Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* <button>Log in  </button><FaArrowRight /> */}
            <button onClick={ForgotPasswordHandler}>Send Link </button>
          </div>
          <div className="bot">
            <Link to="/">
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
