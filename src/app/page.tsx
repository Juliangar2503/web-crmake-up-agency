import Image from "next/image";


export default function Home() {
  return (
    <div>
     <div>
      <h1>Bienvenido a mi página</h1>
      <Image src="/icons/logo-cristina-rivero.svg" alt="Logo Cristina Rivero" width={100} height={100} />
    </div>
    </div>
  );
}
