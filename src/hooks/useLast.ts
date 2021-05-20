import { useEffect, useRef } from "react";

export default function useLast<T>(value: T, onSet?: (v: T) => void) {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
    if (onSet) onSet(ref.current);
  });

  return ref.current;
}
