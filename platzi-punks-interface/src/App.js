import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/index";
import Punks from "./views/punks/index"
import MainLayout from "./layouts/main";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/punks" element={<Punks />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
