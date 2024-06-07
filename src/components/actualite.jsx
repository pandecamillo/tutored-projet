import { useNavigate } from "react-router-dom";

function Actualite(props) {
  const navigate = useNavigate();
  const goToActualite = () => {
    navigate("/actualite/" + props.id);
  };
  return (
    <div className="activites">
      <div className="title">
        <img src={props.image} alt="actualite" />
        <h2>{props.title}</h2>
        <small>{props.date}</small>
      </div>
      <div className="content">
        <p>{props.content.substring(0, 120)}...</p>
      </div>
      <button onClick={goToActualite}>Voir plus</button>
    </div>
  );
}

export default Actualite;
