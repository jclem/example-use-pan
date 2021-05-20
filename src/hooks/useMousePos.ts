import { RefObject, useCallback, useRef } from "react";
import { ORIGIN } from "../util/point";
import useEventListener from "./useEventListener";

export default function useMousePos(ref: RefObject<HTMLElement | null>) {
  const posRef = useRef(ORIGIN);

  const setMouse = useCallback(
    (evt: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      posRef.current = {
        x: evt.pageX - ref.current.offsetLeft,
        y: evt.pageY - ref.current.offsetTop
      };
    },
    [ref]
  );

  useEventListener(ref, "mousemove", setMouse);
  useEventListener(ref, "wheel", setMouse);

  return posRef;
}
