import React from "react";
import "./qualification.css";
import { useTranslation } from "react-i18next";

const Qualification = () => {
  const { t, i18n } = useTranslation(); 
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section " id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">{t("PERSONAL")}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i class="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i class="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Epi - Sousse</span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                Network Security Administration
                </h3>
                <span className="qualification__subtitle">ISI - Mahdia</span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Baccalaureate</h3>
                <span className="qualification__subtitle">
                Ibn Rochd Chebba High School
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
  <div className="qualification__data">
              
              <div>
                <h3 className="qualification__title">  Backend Developer</h3>
                <span className="qualification__subtitle">La Plateforme Digital de Gestion (Contract)  </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 06/2025 - Présent
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
 <div className="qualification__data">
            <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
               Web Editor & WordPress Specialist
                </h3>
                <span className="qualification__subtitle">
                 Datamall Group - Freelance 
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> February – Mars 2025
                </div>
              </div>

          
            </div>


            <div className="qualification__data">
              
              <div>
                <h3 className="qualification__title">  Full Stack Developer</h3>
                <span className="qualification__subtitle">SYT-Company - FreeLance</span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 09/2023 - Présent
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
            <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                Full Stack Developer (PFE) 
                </h3>
                <span className="qualification__subtitle">
                Foreign Job - Monastir 
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> February– Juin 2023
                </div>
              </div>

          
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                Full Stack Developer ( Internship )
                </h3>
                <span className="qualification__subtitle">
                Amilcar Petroleum
 Operation - sfax 
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>  Juin– Août 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
            <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                Full Stack Developer ( Internship ) 
                </h3>
                <span className="qualification__subtitle">    École
                pluridisciplinaire internationale - Sousse{" "}</span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"> February– Juin 2022</i> 
                </div>
              </div>

              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                Creation and administration of a local network (End-of-study internship) 
                </h3>
                <span className="qualification__subtitle">
                Sfax - Shell Tunisia Upstream
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>  Févier– Juin 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
