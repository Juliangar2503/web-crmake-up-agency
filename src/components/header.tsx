'use client';

import Link from "next/link";
import styles from "./header.module.css"
import Image from "next/image";

// Lista de elementos de navegación
const navItems = [
  { name: '/images/cr-name.png', path: '/cristina-rivero' },
  { name: '/images/servicios.png', path: '/servicios' },
  { name: '/images/portfolio.png', path: '/portfolio' },
  { name: '/images/contacto.png', path: '/contacto' },
];

const Header: React.FC = () => {
  return (
    <header className={styles.myHeader}>
      <div className={styles.container}>
        
        <div>
        <nav className="hidden md:flex space-x-8  justify-center ">
            {navItems.map((item, index) => (
              <Link key={index} href={item.path} className={styles.myLink}>
                <Image src={item.name} alt="Logo Cristina Rivero" width={200} height={100} />
              </Link>
            ))}
          </nav>
        </div>
        <div  className="flex justify-end">
          <button className="flex md:hidden justify-end">MENU</button>
        </div>
      </div>
      <div className={styles.logo}>
        <Image src="/icons/logo-cristina-rivero.svg" alt="Logo Cristina Rivero" width={100} height={100} />
      </div>
    </header>
  );
};

export default Header;