import styles from '../menuBar.module.css';
import React from 'react';
import { useState } from 'react'

type menuBarProps = {
    colorOptions: Array<string>,
    additionalColors: Array<string>,
    brushColor: string,
    setBrushColor: React.Dispatch<React.SetStateAction<string>>,
}

export default function Colors({ colorOptions, additionalColors, brushColor, setBrushColor }: menuBarProps) {
    const [primaryBrushColor, setPrimaryBrushColor] = useState(brushColor);
    const [secondaryBrushColor, setSecondaryBrushColor] = useState('white');
    const [selectedPrimaryColorOption, setSelectedPrimaryColorOption] = useState(true)

    const handlePrimaryOptionsClicked = (selected: boolean) => {
        setSelectedPrimaryColorOption(selected)
        if (selected) {
            setBrushColor(primaryBrushColor)
        }
        else {
            setBrushColor(secondaryBrushColor)
        }
    }

    const handleColorOptionsClicked = (color: string) => {
        if (!color) return

        if (selectedPrimaryColorOption) {
            setPrimaryBrushColor(color)
            setBrushColor(color)
        }
        else {
            setSecondaryBrushColor(color)
            setBrushColor(color)
        }
    }

    return (
        <li className={styles.menuItemWrapper}>
            <div className={`${styles.menuColors} ${styles.menuItem}`}>
                <div className={styles.primaryColorOptions}>
                    <div className={`${selectedPrimaryColorOption ? styles.mainColorCircleSelected : ""} ${styles.mainColorCircleBackground}`}>
                        <div
                            className={styles.mainColorCircle}
                            onClick={() => { handlePrimaryOptionsClicked(true) }}
                            style={{ backgroundColor: `${primaryBrushColor}` }}
                        />
                    </div>
                    <div className={`${selectedPrimaryColorOption ? styles.mainColorCircleSelected : ""} ${styles.mainColorCircleBackground}`}>
                        <div
                            className={styles.mainColorCircle}
                            onClick={() => { handlePrimaryOptionsClicked(false) }}
                            style={{ backgroundColor: `${secondaryBrushColor}` }}
                        />
                    </div>
                </div>
                <div className={styles.allColorOptions}>
                    {colorOptions.map((color, index) => (
                        <div className={styles.colorCircleBackground}>
                            <div
                                onClick={() => { handleColorOptionsClicked(color) }}
                                className={styles.colorCircle}
                                style={{ backgroundColor: `${color}` }}
                            />
                        </div>
                    ))}
                    {additionalColors.map((color, index) => (
                        <div className={styles.colorCircleBackground}>
                            <div
                                onClick={() => { handleColorOptionsClicked(color) }}
                                className={styles.colorCircle}
                                style={{ backgroundColor: `${color}` }}
                            />
                        </div>
                    ))}
                </div>
                {/* <div className={styles.colorPicker}></div> */}
            </div>
            <p className={styles.menuLabel}>Colors</p>
        </li>
    );
}
