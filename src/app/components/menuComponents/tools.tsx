import styles from '../menuBar.module.css';

export default function Tools() {
    return (
        <li className={styles.menuItemWrapper}>
            <div className={`${styles.menuTools} ${styles.menuItem}`}>
            </div>
            <p className={styles.menuLabel}>Tools</p>
        </li>
    );
}
