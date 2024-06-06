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
          <img src="../img/mark.jpg" alt="Nadine ngalula" />
          <p>Nadine Ngalula</p>
        </div>
        <small>{"<< PAC toujours la loyauté ! >> "}</small>
      </div>
    </section>
  );
}

export default About;
