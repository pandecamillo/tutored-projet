import React from "react";
import data_actualite from "../data/data_actualite";
import Actualite from "../components/actualite";
import Acceuil from "../components/acceuil";
import About from "../components/about";
import MainLayout from "../layout/mainlayout";
import { useNavigate } from "react-router-dom";

function PageHome() {
  const navigate = useNavigate();
  const actualites = data_actualite.map((actualite) => {
    return <Actualite key={actualite.id} {...actualite} />;
  });

  const goToActivites = () => {
    navigate("/activites");
  };

  return (
    <MainLayout>
      <section className="acceuil">
        <h1>BIENVENUE</h1>
        <Acceuil />
      </section>
      <section className="actualite">
        <h1>ACTIVITES</h1>
        <section className="actualite-container">{actualites}</section>
      </section>
      <section className="about">
        <h1>A PROPOS</h1>
        <About />
      </section>
    </MainLayout>
  );
}

export default PageHome;
