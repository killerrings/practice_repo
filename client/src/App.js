// import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// import { useState } from "react";
import Dashboard from "./routes/Dashboard";
import Preferences from "./routes/Preferences";
import Login from "./routes/Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
