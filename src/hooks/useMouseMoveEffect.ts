import { getRandomRGB } from "@/helpers";
import { RefObject, useEffect, useState } from "react";
import { useMouse } from "react-use";


export const useMouseMoveEffect = (ref: RefObject<Element>) => {
    const [canChange, setCanChange] = useState(true);
    const [fillColors, setFillColors] = useState({
      rec1: getRandomRGB(),
      rec2: getRandomRGB(),
      rec3: getRandomRGB(),
      rec4: getRandomRGB(),
    });
    const { docX } = useMouse(ref)

    useEffect(() => {
      if (canChange) {

        setCanChange(false)
        setFillColors({
          rec1: getRandomRGB(),
          rec2: getRandomRGB(),
          rec3: getRandomRGB(),
          rec4: getRandomRGB(),
        });

        setTimeout(() => setCanChange(true), 100)

      }
      // eslint-disable-next-line
    }, [docX]);

  return {fillColors}
}
