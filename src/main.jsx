import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ProductPage from "./ProductPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
   <audio id="site-music" src="/MP3Now.com_YouTube_GUNNA-WUNNA-COPYRIGHT-FREE-COPYRIGHT-FRE_Media_tT1_1RHA7Bo_007_128k.mp3" loop />

   
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);