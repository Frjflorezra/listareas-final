import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = {
        email,
        password,
      };
      const body = JSON.stringify(data)
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch("http://127.0.0.1:8000/user/login", {
        method: "POST",
        mode: 'cors',
        credentials: 'same-origin',
        headers,
        redirect:'follow',
        referrerPolicy:'no-referrer',
        body,
      });
      
      if (response.status === 200) {
        // Success!
        navigate("/board");
        setIsLoading(false);
        setError(null);
      } else {
        // Error!
        setError(await response.text());
      }
    } catch (err) {
      // El registro falló
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      
        <form className="Login" onSubmit={handleSubmit}>
          <h1 className="h1">Log In</h1>
          <label className="label">Email</label>
          <input
            className="input"
            type="text"
            name="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            name="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Login</button>
          <span className="span">
            are you registered?
          <Link to="/register"> Sing up</Link>
          </span>
        </form>
    </>
  );
};

export default Login;
