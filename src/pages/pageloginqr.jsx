import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PageLoginQr(props) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
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
          <label htmlFor="idCarte">Scannez le code QR :</label>
          <h1>QR pas encore disponible</h1>
        </div>
        <center>
          {" "}
          <Link to="/login/id" className="link">
            Entrer Id
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

export default PageLoginQr;
