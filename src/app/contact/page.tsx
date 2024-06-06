import styles from "./contact.module.css";
import Image from "next/image";

export const metadata = {
    title: "Página de Contato",
    description: "Página de Contato da Creative Hub"
}

//TODO: Adicionar o https://web3forms.com/ para o envio de emails!

const ContactPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="Contact Creative Hub" fill className={styles.img} />
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" name="name" id="" placeholder="Nome Completo" />
                    <input type="text" name="email" id="" placeholder="Endereço de Email" />
                    <input type="number" name="number" id="" placeholder="Número de Telefone (Opcional)" />
                    <textarea name="message" id="" cols={30} rows={10} placeholder="Mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;