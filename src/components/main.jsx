import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Accueil />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);









