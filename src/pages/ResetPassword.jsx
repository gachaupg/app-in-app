/* eslint-disable no-undef */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPasswordButton = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleForgotPassword = async () => {
    try {
      const response = await fetch(
        "https://omaya-server.onrender.com/users/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // or handle success in a different way
        toast.success("check your email for password reset link");
        navigate("/login");
      } else {
        alert(data.message); // or handle error in a different way
        toast.error(error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
    className="login1"
      style={{
        
      }}
    >
      <h4>Reset Your Password</h4>
      <label htmlFor="email"> Enter your Email:</label>
      <input
      className="in"
        style={{
          width: "40%",
          borderRadius: "3px",
          height: "2.5rem",
          border: "none",
        }}
        type="email"
        id="email"
        name="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
            className="in"

        style={{
          width: "40%",
          border: "none",
          borderRadius: "3px",
          background: "black",
          color: "white",
          height: "2.5rem",
          marginTop:'1rem',
        }}
        onClick={handleForgotPassword}
      >
        Send Reset Link
      </button>
    </div>
  );
};

export default ForgotPasswordButton;
