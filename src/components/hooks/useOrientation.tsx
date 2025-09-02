import { useState, useEffect } from 'react';

function getOrientation() {
    if (typeof window === "undefined" || typeof screen === "undefined") {
        return "portrait-primary";
    }
    
    try {
        return screen.orientation.type; // "portrait-primary", "landscape-secondary"
    } catch (error) {
        return "portrait-primary";
    }
}

export const useOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    if (typeof window !== "undefined") {
      function orientate(event:MediaQueryListEvent) {
          setOrientation(getOrientation())
      }
      window.matchMedia("(orientation: portrait)").addEventListener("change", orientate);
      return () => window.matchMedia("(orientation: portrait)").removeEventListener("change", orientate);
    }
  }, []);

  return orientation;
}