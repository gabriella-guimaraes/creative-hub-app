import styles from "./Navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>Creative Hub</div>

            <ul>
            <Links />
        </ul>
        </div>
    )
}

export default Navbar;