import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy logo"/>
                    <h2>Sua plataforma de estudos on-line</h2>
                </div>
                <div className="landing-image">
                    <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>  
                </div>
                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/> Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Ministrar Aulas"/> Ministrar aulas
                    </a>
                </div>
                    <span className="total-connections">
                        Total de 1000 Conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                    </span>
            </div>
        </div>
    )    
}

export default Landing;