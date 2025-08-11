import styles from '../menuBar.module.css';
import React from 'react';
import { useState } from 'react'

type menuBarProps = {
    colorOptions: Array<String>,
    additionalColors: Array<String>,
    brushColor: String,
    setBrushColor: React.Dispatch<React.SetStateAction<string>>,
}

export default function Colors({ colorOptions, additionalColors, brushColor, setBrushColor }: menuBarProps) {
    const [selectedBrushColor, setSelectedBrushColor] = useState(brushColor);
    const [secondaryBrushColor, setSecondaryBrushColor] = useState('white');

    return (
        <li className={styles.menuItemWrapper}>
            <div className={`${styles.menuColors} ${styles.menuItem}`}>
                <div className={styles.primaryColorOptions}>
                    <div className={styles.colorCircle} style={{ backgroundColor: `black` }}></div>
                    <div className={styles.colorCircle} style={{ backgroundColor: `${secondaryBrushColor}` }}></div>
                </div>
                <div className={styles.allColorOptions}>
                    {colorOptions.map((color, index) => (
                        <div className={styles.colorCircle} style={{ backgroundColor: `${color}` }}></div>
                    ))}
                    {additionalColors.map((color, index) => (
                        <div className={styles.colorCircle} style={{ backgroundColor: `${color}` }}></div>
                    ))}
                </div>
                <div className={styles.colorPicker}></div>
            </div>
            <p className={styles.menuLabel}>Colors</p>
        </li>
    );
}
