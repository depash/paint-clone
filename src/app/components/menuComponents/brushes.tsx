import styles from '../menuBar.module.css';

export default function Brushes() {
    return (
        <li className={styles.menuItemWrapper}>
            <div className={`${styles.menuBrushes} ${styles.menuItem}`}>
            </div>
            <p className={styles.menuLabel}>Brushes</p>
        </li>
    );
}