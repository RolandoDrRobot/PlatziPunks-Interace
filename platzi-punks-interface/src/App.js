import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/index"
import MainLayout from "./layouts/main";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
