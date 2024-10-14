import React from 'react'
import Image from "next/image";
import styles from './ContactPage.module.css';
 

const ContactPage = () => {
  return (
<div className="text-white">Esta es la página de contacto
<div className={styles.hola}>
<Image
            
            src='/images/cristina-rivero-make-up-school-removebg-preview.png'
            alt="Next.js logo"
            width={180}
            height={38}
          />
</div>
</div>


  )
}

export default ContactPage