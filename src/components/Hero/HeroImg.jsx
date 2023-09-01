import React, { useState, useEffect } from "react";
import "../../styles/HeroImageStyles.css";

const ImageOnScroll = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scale, setScale] = useState(1);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate the new width and height based on the scroll percentage
  useEffect(() => {
    setScale(parseFloat(1 + scrollPercentage / 50));
  }, [scrollPercentage]);
  return (
    <div className="heroImgDiv">
      <img
        src="/images/HeroImg.webp"
        alt="mainImage"
        style={{ transform: `scale(${scale}) translateY(-100px)` }}
      />
      <div className="scroll">SCROLL DOWN</div>
      <div className="scroll_down">
        <h3 className="scroll_dot">.</h3>
      </div>
    </div>
  );
};

export default ImageOnScroll;
