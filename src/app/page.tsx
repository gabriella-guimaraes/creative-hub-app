import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Hub</h1>
        <p className={styles.desc}>O Creative Hub é o lugar onde mentes criativas se encontram. Compartilhe suas ideias e colabore para construir algo incrível.</p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image className={styles.brandImg} src="/brands.png" fill alt="brands logos" />
        </div>

      </div>

      <div className={styles.imgContainer}>
          <Image className={styles.heroImg} src="/hero.gif" fill unoptimized alt="Creative Hub Hero gif" />
      </div>
      
    </div>
  );
}

export default Home;
