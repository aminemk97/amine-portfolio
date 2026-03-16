import React from "react";
import Img from "../../assets/work1.jpg";
import Img2 from "../../assets/work2.jpg";
import "./portfolio.css";
import Img3 from "../../assets/work3.jpg";
import Img4 from "../../assets/work4.jpg";
import Img5 from "../../assets/sweetspot/home1.png";
import ImgHbm from "../../assets/Hbm/client1.png";
import Modal from "react-modal";
import { useState } from "react";
import Hamacoif from "./projects/Hamacoif";
import Olivia from "./projects/Olivia";
import Forcelearn from "./projects/Forcelearn";
import Gestion from "./projects/Gestion";
import Sweetspot from "./projects/Sweetspot";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Hbm from "./projects/hbm";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const {t} = useTranslation()

  const handleDemoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDemoClick2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleDemoClick3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  const handleDemoClick4 = () => {
    setIsModalOpen4(true);
  };

  const closeModal4 = () => {
    setIsModalOpen4(false);
  };

  const handleDemoClick5 = () => {
    setIsModalOpen5(true);
  }

  const handleDemoClick6 = () => {
    setIsModalOpen6(true);
  }

  const closeModal5 = () => {
    setIsModalOpen5(false);
  }

  const closeModal6 = () => {
    setIsModalOpen6(false);
  }


  return (
    <section className="testimonial contaier section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">{t("SUBTITLE_PORTFOLIO")}</span>

      <div className="portfolio__container container grid">

      <card className="portfolio__content">
  <div className="portfolio__data">
    <img src={ImgHbm} alt="HBM - Consulting" className="portfolio__img" />
    <h3 className="portfolio__title">HBM - Consulting</h3>
    <p className="portfolio__description">{t("DESCRIPTION_HBM")}</p>
    <div className="portfolio__technologies">
      <h4 className="portfolio__tech-title">Technologies:</h4>
      <p className="portfolio__tech-list">
        React JS | Node JS | MongoDB | Express JS | Postman | Material-UI | Gitlab | AWS | CSS | Socket.IO | Trello
      </p>
    </div>
    {/* <p>Visit the website: <a href="https://www.hbmconsulting.fr/" target="_blank">Hbmconsulting</a></p> */}
    <button
      onClick={handleDemoClick6}
      className="button--small portfolio__button"
    >
      {t("BUTTON_DEMO")}
      <i className="uil uil-arrow-right button__icon"></i>
    </button>
  </div>
</card>


        
        <card className="portfolio__content">          
          <div className="portfolio__data">
            <img src={Img5} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">Feastandflavours - MERN</h3>
            <p className="portfolio__description">
           {t("DESCRIPTION_SWEET")}
            </p>
            <div className="portfolio__technologies">
      <h4 className="portfolio__tech-title">Technologies:</h4>
      <p className="portfolio__tech-list">
        React JS | Node JS | MongoDB | Express JS | Postman | Material-UI | Gitlab | CSS 
      </p>
    </div>
            {/* <p>visit the website : <a href="https://www.feastandflavours.com/" target="_blank">feastandflavours</a></p> */}
            <button
              onClick={handleDemoClick5}
              className="button--small portfolio__button"
            >
                 {t("BUTTON_DEMO")}
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </div>
        </card>
       
      </div>


      <div className="portfolio__container container grid">

      <card className="portfolio__content">
          <div className="portfolio__data">
            <img src={Img} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">Hama Coiff</h3>
            <p className="portfolio__description">
             {t("PORTFOLIO_COIF")}
            </p>
            <div className="portfolio__technologies">
      <h4 className="portfolio__tech-title">Technologies:</h4>
      <p className="portfolio__tech-list">
        React JS | Node JS | MongoDB | Express JS | Postman | Material-UI | Gitlab | CSS 
      </p>
    </div>
            <button
              onClick={handleDemoClick}
              className="button--small portfolio__button"
            >
                 {t("BUTTON_DEMO")}
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </div>
        </card>
        <card className="portfolio__content">
          <div className="portfolio__data">
            <img src={Img2} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">e-commerce - Olivia</h3>
            <p className="portfolio__description">
             {t("PORTFOLIO_COMMERCE")}
            </p>
            <div className="portfolio__technologies">
      <h4 className="portfolio__tech-title">Technologies:</h4>
      <p className="portfolio__tech-list">
        React JS | React Native | React Query | Node JS | MongoDB | Express JS | Postman | Tailwind CSS | Flowbite CSS | Paypal Developer | Gitlab | CSS 
      </p>
    </div>
            <button
              onClick={handleDemoClick2}
              className="button--small portfolio__button"
            >
                 {t("BUTTON_DEMO")}
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </div>
        </card>

       
      </div>

      <div className="portfolio__container container grid">

      <card className="portfolio__content">
          <div className="portfolio__data">
            <img src={Img3} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">
              Management of employee activity
            </h3>
            <p className="portfolio__description">
            {t("PORTFOLIO_ACTIVITY")}
            </p>
            <div className="portfolio__technologies">
      <h4 className="portfolio__tech-title">Technologies:</h4>
      <p className="portfolio__tech-list">
      React JS | Node JS| Sequelize | Postman | Bootstrap | CSS 
      </p>
    </div>
            <button
              onClick={handleDemoClick4}
              className="button--small portfolio__button"
            >
                 {t("BUTTON_DEMO")}
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </div>
        </card>
        <card className="portfolio__content">
          <div className="portfolio__data">
            <img src={Img4} alt="" className="portfolio__img" />
            <h3 className="portfolio__title"> ForceLearn</h3>
            <p className="portfolio__description">
              {t("PORTFOLIO_FORCELEARN")}
            </p>
            <div className="portfolio__technologies">
      <h4 className="portfolio__tech-title">Technologies:</h4>
      <p className="portfolio__tech-list">
      React JS | Node JS | MongoDB | Postman | Material UI | Express JS 
      </p>
    </div>
            <button
              onClick={handleDemoClick3}
              className="button--small portfolio__button"
            >
                 {t("BUTTON_DEMO")}
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </div>
        </card>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            width: "80%",
            height: "70%",
            margin: "auto",
            // Set position to relative for the parent container
          },
        }}
      >
        <i
          onClick={closeModal}
          className="uil uil-times modal__close"
          style={{
            position: "absolute",
            top: "-2px", // Adjust the top position as needed
            right: "10px", // Adjust the right position as needed
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        ></i>
        {/* Add your images and styling for the modal content here */}
        <Hamacoif />
      </Modal>

      <Modal
        isOpen={isModalOpen2}
        onRequestClose={closeModal2}
        contentLabel="Image Modal"
        style={{
          content: {
            width: "80%",
            height: "70%",
            margin: "auto",
            // Set position to relative for the parent container
          },
        }}
      >
        <i
          onClick={closeModal2}
          className="uil uil-times modal__close"
          style={{
            position: "absolute",
            top: "-2px", // Adjust the top position as needed
            right: "10px", // Adjust the right position as needed
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        ></i>
        {/* Add your images and styling for the modal content here */}
        <Olivia />
      </Modal>

      <Modal
        isOpen={isModalOpen3}
        onRequestClose={closeModal3}
        contentLabel="Image Modal"
        style={{
          content: {
            width: "80%",
            height: "70%",
            margin: "auto",
            // Set position to relative for the parent container
          },
        }}
      >
        <i
          onClick={closeModal3}
          className="uil uil-times modal__close"
          style={{
            position: "absolute",
            top: "-2px", // Adjust the top position as needed
            right: "10px", // Adjust the right position as needed
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        ></i>
        {/* Add your images and styling for the modal content here */}
        <Forcelearn />
      </Modal>

      <Modal
        isOpen={isModalOpen4}
        onRequestClose={closeModal4}
        contentLabel="Image Modal"
        style={{
          content: {
            width: "80%",
            height: "70%",
            margin: "auto",

            // Set position to relative for the parent container
          },
        }}
      >
        <i
          onClick={closeModal4}
          className="uil uil-times modal__close"
          style={{
            position: "absolute",
            top: "-2px", // Adjust the top position as needed
            right: "10px", // Adjust the right position as needed
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        ></i>
        {/* Add your images and styling for the modal content here */}
        <Gestion />
      </Modal>

      <Modal
        isOpen={isModalOpen5}
        onRequestClose={closeModal5}
        contentLabel="Image Modal"
        style={{
          content: {
            width: "80%",
            height: "70%",
            margin: "auto",

            // Set position to relative for the parent container
          },
        }}
      >
        <i
          onClick={closeModal5}
          className="uil uil-times modal__close"
          style={{
            position: "absolute",
            top: "-2px", // Adjust the top position as needed
            right: "10px", // Adjust the right position as needed
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        ></i>
        {/* Add your images and styling for the modal content here */}
        <Sweetspot/>
      </Modal>

      <Modal
        isOpen={isModalOpen6}
        onRequestClose={closeModal6}
        contentLabel="Image Modal"
        style={{
          content: {
            width: "80%",
            height: "70%",
            margin: "auto",

            // Set position to relative for the parent container
          },
        }}
      >
        <i
          onClick={closeModal6}
          className="uil uil-times modal__close"
          style={{
            position: "absolute",
            top: "-2px", // Adjust the top position as needed
            right: "10px", // Adjust the right position as needed
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        ></i>
        {/* Add your images and styling for the modal content here */}
        <Hbm/>
      </Modal>
    </section>
  );
};

export default Portfolio;
