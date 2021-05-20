import {
  MouseEvent as SyntheticMouseEvent,
  useCallback,
  useRef,
  useState
} from "react";
import { canOverrideInteraction } from "../util/dom";
import { ORIGIN } from "../util/point";

export default function useDrag(
  context: HTMLElement
): [
  { delta: { x: number; y: number }; complete: boolean; isDragging: boolean },
  (e: SyntheticMouseEvent) => void
] {
  const [dragState, setDragState] = useState({
    delta: ORIGIN,
    isDragging: false,
    complete: false
  });

  // Track the last observed mouse position on drag. We don't do this with state
  // because re-renders aren't necessary.
  const lastPointRef = useRef(ORIGIN);
  const drag = useCallback((e: MouseEvent, complete = false) => {
    const lastPoint = lastPointRef.current;
    const point = { x: e.pageX, y: e.pageY };
    lastPointRef.current = point;

    setDragState((dragState) => {
      const delta = {
        x: point.x - lastPoint.x,
        y: point.y - lastPoint.y
      };

      return { ...dragState, delta, complete, isDragging: !complete };
    });
  }, []);

  const endDrag = useCallback(
    (e: MouseEvent) => {
      drag(e, true);

      removeEventListener("mousemove", drag);
      removeEventListener("mouseup", endDrag);
    },
    [drag]
  );

  const startDrag = useCallback(
    (e: SyntheticMouseEvent) => {
      e.stopPropagation();

      if (!canOverrideInteraction(e.nativeEvent)) {
        return;
      }

      context.addEventListener("mousemove", drag);
      context.addEventListener("mouseup", endDrag);

      lastPointRef.current = { x: e.pageX, y: e.pageY };
    },
    [context, drag, endDrag]
  );

  return [dragState, startDrag];
}
