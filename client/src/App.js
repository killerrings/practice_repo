// import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./routes/Dashboard";
import Preferences from "./routes/Preferences";
import Login from "./routes/Login";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
