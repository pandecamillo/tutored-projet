import { useNavigate } from "react-router-dom";
import About from "../components/about";
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
      <section>
        <About />
      </section>
    </>
  );
}

export default PageAbout;
