import { useLocation } from "react-router-dom";
import data from "../data/data_actualite";
import { useNavigate } from "react-router-dom";

function PageActualite() {
  const navigate = useNavigate();
  const location = useLocation();
  let locationActualiteId = parseInt(location.pathname.split("/")[2]);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="actualite-header">
        <li className="material-icons" onClick={goToHome}>
          chevron_left
        </li>
        <h1>Actualité</h1>
      </div>
      <div className="actualite-content">
        <div className="actualite-title">
          <h2>{data[locationActualiteId].title}</h2>
          <small>{data[locationActualiteId].date}</small>
        </div>
        <img src={data[locationActualiteId].image} alt="actualite" />
        <p>{data[locationActualiteId].content}</p>
      </div>
    </main>
  );
}
export default PageActualite;
