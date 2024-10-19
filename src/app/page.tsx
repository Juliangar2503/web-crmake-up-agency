import styles from "./pagePrincipal.module.css"
import Logo from "@/components/logo";


export default function Home() {
  return (
    <div className={styles.ClaimPrincipal}>
      <div className={styles.logoContainer}>
        <Logo></Logo><br/>
      </div>
      <div className={styles.galeriaContainer}>
        
      </div>
    </div>
  );
}
