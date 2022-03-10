import React from "react";
// import { Button, TextField, Container, Grid } from "@mui/material/";

const Form = () => {
  return (
    <div>
      <form action="submit" method="POST">
        <label class="form-label">Email</label>
        <input
          type="text"
          class="form-input"
          name="email"
          placeholder="Enter email"
        />
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-input"
          name="password"
          placeholder="Enter password"
        />
        <button class="form-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Form;
