import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0
    };
  }
  
  try {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  } catch (error) {
    return {
      width: 0,
      height: 0
    };
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}