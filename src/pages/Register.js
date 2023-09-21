import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
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
        // id_user: "",
        name,
        lastname,
        email,
        password,
      };
      const body = JSON.stringify(data)
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch("http://127.0.0.1:8000/user", {
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
        navigate("/");
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
        <h1 className="h1">Register</h1>
        <label className="label">Name</label>
        <input
          className="input"
          type="text"
          name="Name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label">Lastname</label>
        <input
          className="input"
          type="text"
          name="Lastname"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          name="Email"
          placeholder="example@gmail.com"
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
        <button className="button" type="submit">
          Sing In
        </button>
        <span className="span">
          are you registered?
          <Link to="/"> Log in</Link>
        </span>
      </form>
    </>
  );
};

export default Register;
