import { useNavigate } from "react-router-dom";

function PageInformation(props) {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <main className="info">
      <center>
        <h1>Merci !</h1>
        <p>
          Ce site web est en cours de construction, le service d'achat de carte
          en ligne n'est pas encore disponible
        </p>
        <br />
        <button style={{ fontSize: 30 }} onClick={goToHome}>
          OK
        </button>
      </center>
    </main>
  );
}

export default PageInformation;
