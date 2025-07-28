import styles from './canvas.module.css'

export default function canvas() {
    return (
        <div className={styles.canvasContainer}>
            <div className={styles.canvas}>
                <div className={`${styles.edgeBox} ${styles.topLeft}`}></div>
                <div className={`${styles.edgeBox} ${styles.topRight}`}></div>
                <div className={`${styles.edgeBox} ${styles.centerLeft}`}></div>
                <div className={`${styles.edgeBox} ${styles.centerRight}`}></div>
                <div className={`${styles.edgeBox} ${styles.bottomLeft}`}></div>
                <div className={`${styles.edgeBox} ${styles.bottomRight}`}></div>
            </div>
        </div>
    );
}