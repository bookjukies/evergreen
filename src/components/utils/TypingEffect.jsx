import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, typingSpeed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        setDisplayText(""); // Reset the display text
        setCurrentIndex(0); // Reset the index
        return;
      }

      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, typingSpeed]);

  return <div>{displayText}</div>;
};

export default TypingEffect;
