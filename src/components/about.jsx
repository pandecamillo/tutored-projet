function About() {
  return (
    <section>
      <h2>Adresse/contacts</h2>
      <div className="address-contact">
        <p>
          <strong>Adresse :</strong> Kasavubu
        </p>
        <p>
          <strong>Contact :</strong> + 2438473482
        </p>
      </div>
      <h2>Autorité morale</h2>
      <div className="autorite-morale">
        <div className="profile">
          <img src="../img/mark.jpeg" alt="mark zuckerberg" />
          <p>Mr. Zuzu</p>
        </div>
        <small>
          {
            "<< Tu as raison, je ne suis pas un programmeur. Je suis un Analyste Programmeur hahaha LOL ! >> "
          }
        </small>
      </div>
    </section>
  );
}

export default About;
