import { useState } from 'react';

export const useWindowSizes = (
): { windowWidth: number; windowHeight: number } => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowSizes = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  window.addEventListener('resize', updateWindowSizes);
  return { windowWidth, windowHeight };
};

export default useWindowSizes;
