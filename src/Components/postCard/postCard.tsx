import Link from "next/link";
import styles from "./postCard.module.css";
import Image from "next/image";

interface postProps {
    title: string;
    body: string;
    img: string;
    createdAt: Date;
    slug: string;
}

// const postCard = ( {post}: {post : postProps}) => {
const postCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {/* {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="post cover image" fill className={styles.img}/>
            </div>} */}
            <div className={styles.imgContainer}>
                <Image src="/stray1.png" alt="post cover image" fill className={styles.img}/>
            </div>
            {/* <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span> */}
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            {/* <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p> */}
            <h1 className={styles.title}>Cyberpunk from the view of a cat</h1>
            <p className={styles.desc}>A dystopian future from the perspective of a cat.</p>
            {/* <Link className={styles.link} href={`/blog/${post.slug}`}>VER MAIS</Link> */}
        </div>
    </div>
  )
}

export default postCard