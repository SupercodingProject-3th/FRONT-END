import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ScrollButtonProps {
  show: boolean;
}



const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTopButton: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200;
      const shouldShow = scrollY > threshold;
      setShowScrollButton(shouldShow);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollButton show={showScrollButton} id="scroll-top-button" onClick={scrollToTop}>
      ▲
    </ScrollButton>
  );
};

const ScrollButton = styled.button<ScrollButtonProps>`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: ${(props) => (props.show ? "inline" : "none")};
  background-color: #feaa00;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  z-index: 999;

  &:hover {
    background-color: #333;
  }
`;

export default ScrollToTopButton;
