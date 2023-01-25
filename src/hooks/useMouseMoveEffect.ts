import { getRandomRGB } from "@/helpers";
import { RefObject, useEffect, useState } from "react";
import { useMouse } from "react-use";


export const useMouseMoveEffect = (ref: RefObject<Element> ) => {
    const [canChange, setCanChange] = useState(true);
    const [fillColors, setFillColors] = useState({
      rec1: "#FD01FD",
      rec2: "#0000FE",
      rec3: "#FE0000",
      rec4: "#02FF02",
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
