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
          Allez à PAC pour récuperer votre carte. Magrès nous vous avons
          escroqué. Hahahahaha LOL
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
