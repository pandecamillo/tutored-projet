import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PageAdhesion(props) {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();

  const goToHome = () => {
    navigate("/");
  };

  const goToCarte = () => {
    navigate("/paiement");
  };

  const handleChange = () => {};

  function convertToBase64(file, event) {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        event.target.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function importData(event) {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      // you can use this method to get file and perform respective operations
      let files = Array.from(input.files)[0];
      convertToBase64(files, event);
    };
    input.click();
  }

  return (
    <main>
      <div className="actualite-header">
        <li className="material-icons" onClick={goToHome}>
          chevron_left
        </li>
        <h1>Formulaire</h1>
      </div>
      <section className="form-adhesion">
        <center>
          <img
            src="../img/photo.png"
            onClick={importData}
            width={150}
            height={150}
            alt="profile"
          />
        </center>
        <div className="zone">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="prenom">Postnom :</label>
          <input type="text" id="prenom" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="prenom">Prenom :</label>
          <input type="text" id="prenom" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="sexe">Sexe :</label>
          <select name="sexe">
            <option value=""></option>
            <option value="">Homme</option>
            <option value="">Femme</option>
          </select>
        </div>
        <div className="zone">
          <label htmlFor="lieu">Lieu de naissance :</label>
          <input type="text" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="lieu">Date de naissance :</label>
          <input type="date" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="lieu">Province :</label>
          <input type="text" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="lieu">Commune :</label>
          <input type="text" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="lieu">Avenue :</label>
          <input type="text" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="lieu">N° :</label>
          <input type="text" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="lieu">Profession :</label>
          <input type="text" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="lieu">Telephone :</label>
          <input type="text" id="lieu" onChange={handleChange} />
        </div>
        <div className="zone">
          <label htmlFor="sexe">Type membre :</label>
          <select name="sexe">
            <option value=""></option>
            <option value="">Honneur</option>
            <option value="">Effectif</option>
            <option value="">Sympathisant</option>
          </select>
        </div>
        <div className="zone">
          <div className="contrat">
            <p>
              Je soussigné(e) adhérer librement au parti politique Patriote En
              Action
            </p>
            <div className="accept">
              <p>J'accepte</p>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <center>
          <div className="confirm-btn">
            <button onClick={goToCarte}>CONFIRMER</button>
          </div>
        </center>
      </section>
    </main>
  );
}

export default PageAdhesion;
