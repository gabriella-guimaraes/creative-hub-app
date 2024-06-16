import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={"/coffee.jpg"} alt="Make the world coffee post" fill  className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Make the world coffee</h1>
                <div className={styles.detail}>
                    <Image src={"/profile_pic1.jpg"} alt="Make the world coffee post" width={50} height={50} className={styles.avatar}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Date</span>
                        <p className={styles.detail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;