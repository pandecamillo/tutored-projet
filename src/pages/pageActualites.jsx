import { useNavigate } from "react-router-dom";
import Actualite from "../components/actualite";
import data_actualite from "../data/data_actualite";
function PageActualites() {
  const navigate = useNavigate();
  const actualites = data_actualite.map((actualite) => {
    return <Actualite key={actualite.id} {...actualite} />;
  });
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
      <section className="actualite">
        <section className="actualite-container">{actualites}</section>
      </section>
    </>
  );
}

export default PageActualites;
