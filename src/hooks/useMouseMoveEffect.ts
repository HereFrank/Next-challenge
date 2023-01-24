import { getRandomRGB } from "@/helpers";
import { useEffect, useState } from "react";


export const useMouseMoveEffect = () => {
    const [canChange, setCanChange] = useState(true);
    const [fillColors, setFillColors] = useState({
      rec1: getRandomRGB(),
      rec2: getRandomRGB(),
      rec3: getRandomRGB(),
      rec4: getRandomRGB(),
    });
  
    const handleMouseMove = (event: any) => {
      if (canChange) {
        setCanChange(false);
        setFillColors({
          rec1: getRandomRGB(),
          rec2: getRandomRGB(),
          rec3: getRandomRGB(),
          rec4: getRandomRGB(),
        });
      } else {
        return;
      }
    };
  
    useEffect(() => {
      if (canChange === false) {
        setTimeout(() => setCanChange(true), 100);
      }
    }, [canChange]);

  return {fillColors, handleMouseMove}
}
