import React from 'react'
import styles from './galeria.module.css'
import Image from 'next/image'

function Galeria() {
  return (
    <div className={styles.container}>
    <section className={styles.section}>
     <Image 
        src="/images/maquillaje1.jpeg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={150}
        height={100}
      />
     <Image 
        src="/images/maquillaje2.jpg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={150}
        height={100}
      />
     <Image 
        src="/images/maquillaje3.jpg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={150}
        height={100}
      />
     <Image 
        src="/images/maquillaje4.jpeg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={180}
        height={100}
      />
     <Image 
        src="/images/maquillaje2.jpg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={180}
        height={100}
      />
     <Image 
        src="/images/maquillaje3.jpg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={180}
        height={100}
      />
     <Image 
        src="/images/maquillaje1.jpeg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={180}
        height={100}
      />
     <Image 
        src="/images/maquillaje1.jpeg" // Cambia el archivo SVG o PNG por tu imagen
        alt="Logo Cristina Rivero"
        width={180}
        height={100}
      />
      
</section>
</div>
  )
}

export default Galeria


