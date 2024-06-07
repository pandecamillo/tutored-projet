import { useNavigate } from "react-router-dom";
import React from "react";

function PagePaiement(data) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToInformation = (choix) => {
    navigate("/information");
  };

  return (
    <div className="main">
      <div className="actualite-header">
        <li className="material-icons" onClick={goToHome}>
          chevron_left
        </li>
        <h1>Paiement</h1>
      </div>
      <br />
      <center>
        <h1>Comment voulez vous payer ?</h1>
        <br />
        <button style={{ fontSize: 30 }} onClick={goToInformation}>
          En ligne
        </button>
        <br />
        <br />
        <button style={{ fontSize: 30 }} onClick={goToInformation}>
          Sur place
        </button>
      </center>
    </div>
  );
}

export default PagePaiement;
