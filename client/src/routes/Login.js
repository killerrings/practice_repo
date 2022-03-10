import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:3500/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="login-wrapper">
      <h1>Login Form!!🚀</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-input"
          name="email"
          placeholder="Enter email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-input"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
