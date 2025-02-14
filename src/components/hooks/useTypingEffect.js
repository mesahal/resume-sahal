import { useState, useEffect } from "react";

export function useTypingEffect(text, delay = 75, startDelay = 0) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShouldStart(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!shouldStart) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, shouldStart]);

  return currentText;
}
