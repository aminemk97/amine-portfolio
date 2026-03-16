import React, { useState } from "react";
import "./about.css";
import AboutImg from "../../assets/about.png";
import CV_FR from "../../assets/AmineMkacher-CV-FR.pdf"; // French CV
import CV_EN from "../../assets/AmineMkacher-CV.pdf"; // English CV
import Info from "./Info";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDownload = (cvFile, fileName) => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = fileName;
    link.click();
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <motion.section
      className="about section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("ABOUT_ME")}
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {t("MY_INTRODUCTION")}
      </motion.span>

      <motion.div
        className="about__container container grid"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.img
          src={AboutImg}
          alt="About"
          className="about__img"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        <motion.div
          className="about__data"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Info />
          <p className="about__description">{t("ABOUT_DESC")}</p>

          <div style={{ position: "relative" }}>
  <motion.button
    className="button button--flex"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  >
    {t("BUTTON_DOWNLOAD")}
    <svg
      className="button__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
        fill="var(--container-color)"
      />
    </svg>
  </motion.button>

  <motion.div
    className={`dropdown ${isDropdownOpen ? "show" : ""}`}
    initial={{ opacity: 0, y: -10 }}
    animate={isDropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <button onClick={() => handleDownload(CV_FR, "MkacherAmine_CV_FR.pdf")}>
      {t("MkacherAmine_Cv_FR")}
    </button>
    <button onClick={() => handleDownload(CV_EN, "MkacherAmine_CV_EN.pdf")}>
      {t("MkacherAmine_Cv_Eng")}
    </button>
  </motion.div>
</div>

        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;