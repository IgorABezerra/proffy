import React from 'react';

import './styles.css'

import logoImg from '../../assets/images/logo.svg';
import heroImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy Logo" />

          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={heroImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" className=""/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" className=""/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;