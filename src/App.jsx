// import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Proposal from "./pages/Proposal";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#212936] dark:text-gray-300">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal/:id" element={<Proposal />} />
      </Routes>
    </div>
  );
};

export default App;
