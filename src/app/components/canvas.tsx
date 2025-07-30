"use client";
import styles from './canvas.module.css'
import React from 'react';
import { useState, useRef, useEffect } from 'react'

type canvasProps = {
    width: number,
    height: number,
    color: string,
    brushSize: number
}

export default function canvas({ width, height, color, brushSize }: canvasProps) {
    const [undoStack, setUndoStack] = useState<Array<string | null>>([])
    const [redoStack, setRedoStack] = useState<Array<string | null>>([])
    const x = useRef<number>(0)
    const y = useRef<number>(0)
    const drawing = useRef<boolean>(false)

    const onMouseDown = (e: React.MouseEvent<Element, MouseEvent>) => {
        const canvas = e.target as HTMLCanvasElement;

        const ctx = canvas.getContext("2d")!!;

        const bounding = canvas.getBoundingClientRect();

        x.current = e.clientX - bounding.left
        y.current = e.clientY - bounding.top

        if (!undoStack.length) {
            canvas.toBlob((blob) => {
                if (blob) {
                    const newImg = document.createElement("img");
                    const url = URL.createObjectURL(blob);
                    console.log(url)
                    newImg.src = url;
                    document.body.appendChild(newImg);
                    setUndoStack((prev) => [...prev, url])
                }
            });
        }

        drawing.current = true
    }

    const onMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
        const canvas = e.target as HTMLCanvasElement;

        const ctx = canvas.getContext("2d")!!;

        const bounding = canvas.getBoundingClientRect();

        const newX = e.clientX - bounding.left
        const newY = e.clientY - bounding.top

        if (drawing.current) {
            drawLine(ctx, x.current, y.current, newX, newY);
            x.current = e.clientX - bounding.left
            y.current = e.clientY - bounding.top
        }
    }

    function drawLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = brushSize;
        context.lineJoin = "round";
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.closePath();
        context.stroke();
    }

    const onMouseUp = (e: React.MouseEvent<Element, MouseEvent>) => {
        const canvas = e.target as HTMLCanvasElement;

        const ctx = canvas.getContext("2d")!!;

        drawing.current = false
        ctx.save();
        if (!undoStack.length) {
            canvas.toBlob((blob) => {
                if (blob) {
                    const newImg = document.createElement("img");
                    const url = URL.createObjectURL(blob);

                    newImg.src = url;
                    document.body.appendChild(newImg);
                    setUndoStack((prev) => [...prev, url])
                }
            });
        }
    }

    const onMouseLeave = (e: React.MouseEvent<Element, MouseEvent>) => {
        const canvas = e.target as HTMLCanvasElement;

        const ctx = canvas.getContext("2d");
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
                event.preventDefault();
                const canvas = document.getElementById("canvas") as HTMLCanvasElement;
                const ctx = canvas.getContext("2d")!!;
                // undoStack.current.pop()
                console.log(undoStack)
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <div className={styles.canvasContainer}>
            <div className={styles.canvasWrapper} style={{ width: width, height: height }}>
                <canvas className={styles.canvas} id={'canvas'} width={width} height={height} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseLeave} onMouseDown={onMouseDown}></canvas>
                <div className={`${styles.edgeBox} ${styles.topLeft}`}></div>
                <div className={`${styles.edgeBox} ${styles.topRight}`}></div>
                <div className={`${styles.edgeBox} ${styles.centerLeft}`}></div>
                <div className={`${styles.edgeBox} ${styles.centerRight}`}></div>
                <div className={`${styles.edgeBox} ${styles.bottomLeft}`}></div>
                <div className={`${styles.edgeBox} ${styles.bottomRight}`}></div>
            </div>
        </div>
    );
}