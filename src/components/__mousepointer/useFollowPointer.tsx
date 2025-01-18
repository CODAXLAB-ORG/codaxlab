import { useFrame } from "@react-three/fiber";
import { RefObject, useEffect, useRef } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement | null>) {
  const x = useRef(window.innerWidth/2|0);
  const y = useRef(window.innerHeight/2|0);
  useFrame(() => {
    const pointerElement = ref.current;
    if (pointerElement) {
      const { clientWidth, clientHeight } = pointerElement;

      pointerElement.style.transform = `translate(${
        x.current - clientWidth / 2
      }px, ${y.current - clientHeight / 2}px)`;
    }
  });

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      x.current = clientX;
      y.current = clientY;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref]);

  return null;
}
