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
  const [brushColor, setBrushColor] = useState('black')
  const [brushSize, setBrushSize] = useState(10);
  const [colorOptions, setColorOptions] = useState(
    [
      'black',
      'grey',
      'darkred',
      'red',
      'orange',
      'yellow',
      'green',
      'turquoise',
      '#3f48cc',
      'purple',
      'white',
      'lightgray',
      '#b97a57',
      '#ffaec9',
      'gold',
      'lightyellow',
      'lime',
      '#99d9ea',
      'cadetblue',
      '#c8bfe7',
    ]
  );
  const [additionalColors, setAdditionalColors] = useState(['', '', '', '', '', '', '', '', '', ''])

  return (
    <div className={styles.page}>
      <MenuBar
        colorOptions={colorOptions}
        additionalColors={additionalColors}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
      />
      <Canvas
        width={width}
        height={height}
        brushColor={brushColor}
        brushSize={brushSize}
      />
      <StatusBar />
    </div>
  );
}