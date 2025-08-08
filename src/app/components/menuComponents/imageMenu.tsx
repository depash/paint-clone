import styles from '../menuBar.module.css';

export default function ImageMenu() {
    return (
        <li className={styles.menuItemWrapper}>
            <div className={`${styles.menuImage} ${styles.menuItem}`}>
            </div>
            <p className={styles.menuLabel}>Image</p>
        </li>
    );
}