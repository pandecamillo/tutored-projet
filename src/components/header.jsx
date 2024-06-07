import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login/id");
  };
  const toggleMenu = (event) => {
    setActive((prev) => !active);
  };
  return (
    <header>
      <img src="img/logo.png" width="60" alt="logo" />
      <button onClick={goToLogin}>Se connecter</button>
      <i className="material-icons" onClick={toggleMenu}>
        {active ? "close" : "menu"}
      </i>
      <nav style={{ display: active ? "block" : "none" }}>
        <ul>
          <Link onClick={toggleMenu} className="link">
            Acceuil
          </Link>
          <Link to="/adhesion" className="link">
            S'adhérer
          </Link>
          <Link to="/activites" className="link">
            Activités
          </Link>
          <Link to="about" className="link">
            A propos
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
