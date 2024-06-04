import styles from "./footer.module.css";

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Gabriella Guimarães</div>
            <div className={styles.text}>
                Creative Hub @ All rights reserved
            </div>
        </div>
    );
};

export default Footer;