import React from "react";
import "./header.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";



const Header = () => {
  const { t, i18n } = useTranslation(); 
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*=====================Toggle Menu=====================*/

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [selectedLang, setSelectedLang] = useState("English");
  const [langDropdown, setLangDropdown] = useState(false); // Toggle for language dropdown

  // Event listener for scrolling
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });



  // Language options
  const languages = [
    { code: "eng", label: "English" },
    { code: "fr", label: "Français" },
  ];

  const changeLanguage = (lng, label) => {
    i18n.changeLanguage(lng);
    setSelectedLang(label); // Update the displayed language in the dropdown
    setLangDropdown(false); // Close the dropdown after selection
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#index.html" className="nav__logo">
          Amine Mkacher
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> {t("NAVBAR_HOME")}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>{t("NAVBAR_ABOUT")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills"   onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i> {t("NAVBAR_SKILLS")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification"   onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-briefcase-alt nav__icon"></i> Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio"   onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact"   onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            {/* multilangage */}
  {/* Language Dropdown */}
  <li
              className="nav__item lang__dropdown"
              onClick={() => setLangDropdown(!langDropdown)}
            >
              <span className="nav__link">
                <i className="uil uil-globe nav__icon"></i> {selectedLang}
              </span>
              {langDropdown && (
                <ul className="lang__list">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      className="lang__item"
                      onClick={() => changeLanguage(lang.code, lang.label)}
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

         

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
