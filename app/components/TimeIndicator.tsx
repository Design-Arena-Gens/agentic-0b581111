"use client";

import { useEffect, useState } from "react";

const formatTime = (date: Date) =>
  date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

export default function TimeIndicator() {
  const [timestamp, setTimestamp] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-indicator" aria-live="polite">
      <span className="time-label">current time</span>
      <span className="time-value">{timestamp}</span>
    </div>
  );
}
