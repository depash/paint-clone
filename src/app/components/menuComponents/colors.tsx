import styles from '../menuBar.module.css';

type menuBarProps = {
    colorOptions: Array<String>,
    additionalColors: Array<String>,
    setBrushColor: React.Dispatch<React.SetStateAction<string>>,
}

export default function Colors({ colorOptions, additionalColors, setBrushColor }: menuBarProps) {
    return (
        <li className={styles.menuItemWrapper}>
            <div className={`${styles.menuColors} ${styles.menuItem}`}>
                <div className={styles.primaryColorOptions}></div>
                <div className={styles.allColorOptions}></div>
                <div className={styles.colorPicker}></div>
            </div>
            <p className={styles.menuLabel}>Colors</p>
        </li>
    );
}
