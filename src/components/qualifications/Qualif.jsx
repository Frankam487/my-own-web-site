import "./qualif.css";

const Qualif = () => {
  return (
    <section className="qualif section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">
        Mon parcours <strong>😉</strong>
      </span>

      <div className="qualif__container container">
        <div className="qualif__tabs">
          <div className="qualif__button qualif__active button--flex">
            <i className="uil uil-graduation-cap qualif__icon"></i> Education
          </div>

          <div className="qualif__button button--flex">
            <i className="uil uil-briefcase-alt qualif__icon"></i> Experience
          </div>
        </div>

        <div className="qualif__sections">
          <div className="qualif__content qualif__content-active">
            <div className="qualif__data">
              <div className="">
                <h3 className="qualif__title">Web Design</h3>
                <span className="qualif__subtitle">Spain - Institude</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div className="">
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>

            <div className="qualif__data">
              <div className=""></div>
              <div className="">
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>

              <div className="">
                <h3 className="qualif__title">Art Director</h3>
                <span className="qualif__subtitle">Spain - Institude</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualif__data">
              <div className="">
                <h3 className="qualif__title">Developpement Web</h3>
                <span className="qualif__subtitle">Spain - Institude</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
              <div className="">
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>

            <div className="qualif__data">
              <div className=""></div>
              <div className="">
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>

              <div className="">
                <h3 className="qualif__title">UX Expert</h3>
                <span className="qualif__subtitle">Spain - Institude</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>
            </div>
          </div>

          <div className="qualif__content">
            <div className="qualif__data">
              <div className="">
                <h3 className="qualif__title">Product Designer</h3>
                <span className="qualif__subtitle">Microsoft - Spain</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div className="">
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>

            <div className="qualif__data">
              <div className=""></div>
              <div className="">
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>

              <div className="">
                <h3 className="qualif__title">UX Designer</h3>
                <span className="qualif__subtitle">Apple Inc - Spain</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualif__data">
              <div className="">
                <h3 className="qualif__title">Web Designer</h3>
                <span className="qualif__subtitle">Figma - Spain</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
              <div className="">
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualif;