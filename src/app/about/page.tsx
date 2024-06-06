import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
    title: "Página Sobre",
    description: "Sobre a Creative Hub"
}

const AboutPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Sobre nós</h2>
                <h1 className={styles.title}>Ideias que Movem, Pessoas que Inspiram.</h1>
                <p className={styles.desc}>
                No Creative Hub, acreditamos no poder das ideias. Criamos um espaço onde suas ideias podem ser maiores, 
                mais ousadas, mais corajosas e melhores. Aqui, a flexibilidade e a precisão se unem para dar vida a 
                pensamentos inovadores.
                O Creative Hub é um blog dedicado ao compartilhamento e à troca de ideias entre pessoas de todos os cantos 
                do mundo. Nossa comunidade vibrante é composta por pensadores criativos que buscam inspirar e ser inspirados.
                Nossa missão é conectar mentes criativas, promovendo a colaboração e transformando conceitos em realidades 
                impactantes. No Creative Hub, cada ideia conta e tem o potencial de fazer a diferença.
                Junte-se a nós e faça parte de um ambiente acolhedor e dinâmico, onde suas ideias podem ganhar vida e 
                contribuir para um futuro mais inovador e criativo.
                </p>

                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10.5</h1>
                        <p>Anos de experiência</p>
                    </div>

                    <div className={styles.box}>
                        <h1>234 mil +</h1>
                        <p>Pessoas alcançadas</p>
                    </div>

                    <div className={styles.box}>
                        <h1>5K +</h1>
                        <p>Serviços e plugins</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Creative Hub" fill className={styles.img} />
            </div>
        </div>
    )
}

export default AboutPage;