import Image from 'next/image';
import styles from './Logo.module.css'; // Archivo CSS para estilos opcionales

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
       <div className="text-lg font-semibold text-center mb-4">El poder del maquillaje en manos expertas.</div>
      <div className={styles.imgLogo}>
        <Image
          src="/icons/logo-blanco-solo.png" // Cambia el archivo SVG o PNG por tu imagen
          alt="CR Makeup Agency Logo"
          width={200}  // Cambia estos valores según el tamaño que desees
          height={200}
          priority // Esto es útil para optimizar el rendimiento de carga
        />
      </div>
      <div className={styles.stringLogo}>
      <h1 className="text-4xl font-bold">MAKE UP AGENCY</h1>
      <h3 className="text-2xl text-gray-600">By Cristina Rivero</h3>
      </div>
    </div>

  );
};

export default Logo;