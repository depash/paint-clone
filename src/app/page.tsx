"use client";
import styles from "./page.module.css";
import MenuBar from './components/menuBar';
import Canvas from './components/canvas';
import StatusBar from './components/statusBar';
import React from 'react';
import { useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState(1152);
  const [height, setHeight] = useState(648);
  const [color, setColor] = useState('#000000')
  const [brushSize, setBrushSize] = useState(10);

  return (
    <div className={styles.page}>
      <MenuBar />
      <Canvas
        width={width}
        height={height}
        color={color}
        brushSize={brushSize}
      />
      <StatusBar />
    </div>
  );
}