import Image from "next/image";
import styles from "./pagePrincipal.module.css"

import Link from "next/link";
import Galeria from "@/components/galeria";


export default function Home() {
  return (
    <div>
     <div>
      <h1 className={styles.ClaimPrincipal}>AGENCIA DE MAQUILLAJE</h1>
   
    </div>
    <div>
      <h1>Photo Gallery</h1>
   <Galeria></Galeria>
    </div>
    
    </div>
  );
}
