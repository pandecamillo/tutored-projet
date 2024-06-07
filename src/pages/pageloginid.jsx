import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PageLoginId(props) {
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
        <h1>Connexion</h1>
      </div>
      <section className="form-adhesion">
        <div className="zone">
          <label htmlFor="idCarte">Entrez ID de la carte :</label>
          <input type="text" id="idCarte" onChange={handleChange} />
        </div>
        <center>
          {" "}
          <Link className="link" to="/login/qr">
            Scanner Code QR
          </Link>
        </center>
        <center>
          <div className="confirm-btn">
            <button onClick={goToHome}>CONFIRMER</button>
          </div>
        </center>
      </section>
    </main>
  );
}

export default PageLoginId;
