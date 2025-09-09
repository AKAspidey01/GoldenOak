import { createContext, useContext, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <LenisContext.Provider value={null}>{children}</LenisContext.Provider>;
}

export const useLenisContext = () => useContext(LenisContext);