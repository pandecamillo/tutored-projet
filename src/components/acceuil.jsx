import { useNavigate } from "react-router-dom";

function Acceuil(props) {
  const navigate = useNavigate();
  const goToAdhesion = () => {
    navigate("/adhesion");
  };
  return (
    <>
      <img src="../img/pac-membres.jpg" alt="bienvenue" />
      <p>
        Le parti politique PAC est le meilleur parti de toute la RDC. Avec plus
        de 1400 membres ce parti ne cesse pas à améliorer tous les aspects
        politique de ce pays que ça soit economique, financière, commercial et
        informatique. Vous pouvez aussi faire parti de ce mouvement.
      </p>
      <button onClick={goToAdhesion}>S'adhérer</button>
    </>
  );
}

export default Acceuil;
