// src/components/LoadingScreen.jsx
import React, { useState, useEffect, useRef } from "react";

const TOTAL_DURATION = 1200; // общая длительность ~1.2 сек
const STEPS = [
  { upTo: 30, text: "Загрузка..." },
  { upTo: 70, text: "Подготовка данных..." },
  { upTo: 100, text: "Готово" },
];

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const interval = 25;
    const step = (100 / TOTAL_DURATION) * interval;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + step, 100);

        // Обновляем текст
        const newTextIndex = STEPS.findIndex((s) => next <= s.upTo);
        setTextIndex(newTextIndex === -1 ? STEPS.length - 1 : newTextIndex);

        if (next >= 100) {
          clearInterval(timerRef.current);
          // Задержка перед скрытием
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              onFinish?.();
            }, 600);
          }, 200);
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [onFinish]);

  return (
    <div
      className={`loading-screen${fadeOut ? " loading-screen--fade-out" : ""}`}
    >
      <div className="loading-screen__content">
        <img src="/logo.png" alt="Логотип" className="loading-screen__logo" />
        <div className="loading-screen__text">
          {STEPS[textIndex]?.text || "Загрузка..."}
        </div>
        <div className="loading-screen__progress">
          <div
            className="loading-screen__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
