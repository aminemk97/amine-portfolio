import React from 'react'
import './skills.css'
import Backend from './Backend'
import Frontend from './Frontend'
import { useTranslation } from 'react-i18next'


const Skills = () => {
  const { t, i18n } = useTranslation(); 
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">{t("NAVBAR_SKILLS")}</h2>
        <span className="section__subtitle">{t("TECHNICAL")}</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills