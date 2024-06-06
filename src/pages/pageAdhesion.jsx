import { useNavigate } from "react-router-dom";

function PageAdhesion(props) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToCarte = () => {
    navigate("/paiement");
  };

  const handleChange = () => {};

  return (
    <main>
      <div className="actualite-header">
        <li className="material-icons" onClick={goToHome}>
          chevron_left
        </li>
        <h1>Formulaire</h1>
      </div>
      <section className="form-adhesion">
        <div className="zone">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="prenom">Prenom :</label>
          <input type="text" id="prenom" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="sexe">Sexe :</label>
          <input type="text" id="sexe" onChange={handleChange} />
        </div>

        <center>
          <div className="confirm-btn">
            <button onClick={goToCarte}>CONFIRMER</button>
          </div>
        </center>
      </section>
    </main>
  );
}

export default PageAdhesion;
