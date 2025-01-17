/*
 
   ____                 _      _     
  |  _ \ ___  __ _  ___| |_   (_)___ 
  | |_) / _ \/ _` |/ __| __|  | / __|
  |  _ <  __/ (_| | (__| |_ _ | \__ \
  |_| \_\___|\__,_|\___|\__(_)/ |___/
                            |__/     
 
*/

import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return <>
   <BrowserRouter>
      <Routes>
        <Route path="/Form" element={<Form />}/>
        <Route path="/Todo" element={<Todo />}/>
      </Routes>
    </BrowserRouter>     
  </>
}