import React from "react";
import { Button, TextField, Container, Grid } from "@mui/material/";

const Form = () => {
  return (
    // <Container>
    //   <h1>Form</h1>
    //   <TextField label="Email" variant="outlined" />
    //   <TextField label="Password" variant="outlined-required" />
    // </Container>
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined">Submit</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Form;
