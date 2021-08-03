import { useRef, useEffect } from "react";

export function usePrevious(value: any): number {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
