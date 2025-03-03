
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">
        Obtenir bien plus <strong>😉</strong>
      </h2>
      <span className="section__subtitle">Me contacter 🤞</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Me parler ...</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">Frankamdev@gmail.com</span>
              <a href="mailto:frankamdev@gmail.com" className="contact__button">
                Ecrivez moi{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+237 690 461 830</span>
              <a href="https://api.whatsapp.com/send?phone=690461830&text=Salut, comment ca va ?" className="contact__button">
                Ecrivez moi{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">Appel</h3>
              <span className="contact__card-data">+237 690461830</span>
              <a href="" className="contact__button">
                Ecrivez moi{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Ecrivez moi votre projet</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;