import styles from './menuBar.module.css';
import Colors from './menuComponents/colors';
import Brushes from './menuComponents/brushes';
import Tools from './menuComponents/tools';
import Shapes from './menuComponents/shapes';
import ImageMenu from './menuComponents/imageMenu';

type menuBarProps = {
    colorOptions: Array<String>,
    additionalColors: Array<String>,
    setBrushColor: React.Dispatch<React.SetStateAction<string>>,
}

export default function MenuBar({ colorOptions, additionalColors, setBrushColor }: menuBarProps) {
    return (
        <nav className={styles.menuBarContainer}>
            <ul className={styles.menuBarWrapper}>
                <ImageMenu />
                <Tools />
                <Brushes />
                <Shapes />
                <Colors
                    colorOptions={colorOptions}
                    additionalColors={additionalColors}
                    setBrushColor={setBrushColor}
                />
            </ul>
        </nav>
    );
}