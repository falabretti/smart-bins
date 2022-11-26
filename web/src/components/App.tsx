import { Box, CssBaseline } from "@mui/material";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SensorDetails from "../pages/SensorDetails";
import Page from "./Page";

function App() {

  return (
    <Router>
      <CssBaseline />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sensor" element={<SensorDetails />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
