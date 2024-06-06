import { useNavigate } from "react-router-dom";
function PageAbout() {
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
        <h1>A propos</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <p>La page est en cours de construction</p>
        <p>
          Je vais reserver une page uniquement pour le a propos du parti
          politique
        </p>
      </center>
    </>
  );
}

export default PageAbout;
