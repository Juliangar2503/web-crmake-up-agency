'use client';

import Link from "next/link";
import styles from "./header.module.css"

// Lista de elementos de navegación
const navItems = [
  { name: 'Cristina Rivero', path: '/cristina-rivero' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contacto', path: '/contacto' },
];

const Header: React.FC = () => {
  return (
    <header className={styles.myHeader}>
      <div className={styles.container}>
        
        <div>
          <nav className={styles.principalNav}>
            {navItems.map((item, index) => (
              <Link key={index} href={item.path} className={styles.myLink}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <button className="block md:hidden">MENU</button>
        </div>
      </div>
      <div className={styles.logo}>LOGO</div>
    </header>
  );
};

export default Header;