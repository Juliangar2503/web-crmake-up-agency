import React from 'react';
import styles from './weAre.module.css';

const WeAre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>¿QUIÉNES SOMOS?</h1>
      </div>
      <div className={styles.description}>
        Bienvenido a la agencia de maquillaje líder en Sevilla, dirigida por 
        <strong> Cristina Rivero</strong>. Ofrecemos servicios creativos y profesionales para eventos, 
        cine, moda y más, con un equipo de expertos que elevan cada estilo para que brilles con confianza y elegancia.
      </div>
      {/* <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <img src="/Public/images/we-are-img/1.png" className={styles.slide} alt="Image 1" />
          <img src="/Public/images/we-are-img/2.png" className={styles.slide} alt="Image 2" />
          <img src="/Public/images/we-are-img/3.png" className={styles.slide} alt="Image 3" />
          <img src="/Public/images/we-are-img/4.png" className={styles.slide} alt="Image 4" />
          <img src="/Public/images/we-are-img/5.png" className={styles.slide} alt="Image 5" />
        </div>
      </div> */}
    </div>
  );
};

export default WeAre;