import Image from 'next/image';
import styles from './Logo.module.css'; // Archivo CSS para estilos opcionales

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image 
        src="/icons/logo-blanco-solo.png" // Cambia el archivo SVG o PNG por tu imagen
        alt="CR Makeup Agency Logo" 
        width={150}  // Cambia estos valores según el tamaño que desees
        height={150}
        priority // Esto es útil para optimizar el rendimiento de carga
      />
    </div>
  );
};

export default Logo;