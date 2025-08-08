import styles from '../menuBar.module.css';

export default function Shapes() {
    return (
        <li className={styles.menuItemWrapper}>
            <div className={`${styles.menuShapes} ${styles.menuItem}`}>
            </div>
            <p className={styles.menuLabel}>Shapes</p>
        </li>
    );
}