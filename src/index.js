import React from "react";
import ReactDOM from "react-dom/client";
import PageHome from "./pages/pageHome";
import PageActualite from "./pages/pageActualite";
import Page404 from "./pages/page404";
import PageAdhesion from "./pages/pageAdhesion";
import PagePaiement from "./pages/pagePaiement";
import PageInformation from "./pages/pageInformation";
import PageLoginId from "./pages/pageloginid";
import PageLoginQr from "./pages/pageloginqr";
import PageAbout from "./pages/pageAbout";
import PageActualites from "./pages/pageActualites";
import ScrollToTop from "./components/scrolltotop";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageApropos from "./pages/pageAbout";

function PageRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="adhesion" element={<PageAdhesion />} />
          <Route path="login">
            <Route path="id" element={<PageLoginId />} />
            <Route path="qr" element={<PageLoginQr />} />
          </Route>
          <Route path="activites" element={<PageActualites />} />
          <Route path="actualite/:id" element={<PageActualite />} />
          <Route path="paiement" element={<PagePaiement />} />
          <Route path="information" element={<PageInformation />} />
          <Route path="about" element={<PageAbout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <PageRouter />
  </>
);
