"use client";

import { useEffect, useState } from "react";

export default function ProjectSlideshow({ screenshots, initialDelay = 0 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer;
    const scheduleNext = () => {
      timer = window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % screenshots.length);
        scheduleNext();
      }, 6000 + Math.random() * 4000);
    };
    const startTimer = window.setTimeout(scheduleNext, initialDelay);
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(timer);
    };
  }, [initialDelay, screenshots.length]);

  return <div className="projectScreens" aria-label="Project interface preview">
    {screenshots.map((screenshot, index) => <i className={index === activeIndex ? "isActive" : ""} key={screenshot} style={{ backgroundImage: `url(/${screenshot})` }} aria-hidden={index !== activeIndex} />)}
  </div>;
}
