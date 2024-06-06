import { useNavigate } from "react-router-dom";
function PageActualites() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="actualite-header">
        <li className="material-icons" onClick={goToHome}>
          chevron_left
        </li>
        <h1>Activites</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <p>La page est en cours de construction</p>
        <p>
          Cette page sera utilisé pour afficher tous les activites sans limite
          leurs nombres
        </p>
      </center>
    </>
  );
}

export default PageActualites;
