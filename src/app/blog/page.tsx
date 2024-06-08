import styles from "./blog.module.css";
import PostCard from "@/Components/postCard/postCard";


const BlogPage = () => {
    return(
        <div className={styles.container}>
            {/* <h1>Posts:</h1> */}

            <div className={styles.post}>
                <PostCard />
            </div>

            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>

        </div>
    )
}

export default BlogPage;