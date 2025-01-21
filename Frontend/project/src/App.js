/*
 
   ____                 _      _     
  |  _ \ ___  __ _  ___| |_   (_)___ 
  | |_) / _ \/ _` |/ __| __|  | / __|
  |  _ <  __/ (_| | (__| |_ _ | \__ \
  |_| \_\___|\__,_|\___|\__(_)/ |___/
                            |__/     
 
*/

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;