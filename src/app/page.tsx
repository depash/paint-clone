import styles from "./page.module.css";
import MenuBar from './components/menuBar';
import Canvas from './components/canvas';
import StatusBar from './components/statusBar';

export default function Home() {
  return (
    <div className={styles.page}>
      <MenuBar />
      <Canvas />
      <StatusBar />
    </div>
  );
}