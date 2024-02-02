import React from 'react';
import { ReactComponent as MoonSVG } from '../../shared/images/MainPage/darkMode/moon.svg';
import { ReactComponent as SunSVG } from '../../shared/images/MainPage/darkMode/sun.svg';

interface ImageProps {
  isDarkMode: boolean;
  width: number;
  height: number;
}

const Image: React.FC<ImageProps> = ({ isDarkMode, width, height }) => {
  return isDarkMode ? <MoonSVG width={width} height={height} /> : <SunSVG width={width} height={height} />;
}

export default Image;
