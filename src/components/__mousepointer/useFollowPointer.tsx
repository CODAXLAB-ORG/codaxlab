import { useFrame } from "@react-three/fiber";
import { RefObject, useEffect, useRef } from "react";

/**
 * Custom hook: Makes an HTML element follow the position of the user's pointer (mouse or touch).
 * 
 * @param ref - A reference to the HTML element that should follow the pointer.
 */
export function useFollowPointer(ref: RefObject<HTMLElement | null>) {
  // Store the current pointer (mouse or touch) position in the `x` and `y` variables.
  // Initially set to the center of the screen.
  const x = useRef(window.innerWidth / 2 | 0);
  const y = useRef(window.innerHeight / 2 | 0);

  /**
   * This function is called on every animation frame (about 60 times per second).
   * It updates the position of the referenced HTML element to follow the pointer.
   */
  useFrame(() => {
    const pointerElement = ref.current; // Get the HTML element from the reference.
    if (pointerElement) {
      const { clientWidth, clientHeight } = pointerElement;

      // Adjust the position of the element so it stays centered around the pointer.
      pointerElement.style.transform = `translate(${
        x.current - clientWidth / 2
      }px, ${y.current - clientHeight / 2}px)`;
    }
  });

  /**
   * Adds event listeners for pointer (mouse) and touch movement.
   * These listeners update the `x` and `y` coordinates when the user moves their pointer or touches the screen.
   */
  useEffect(() => {
    // Function to handle pointer (mouse) movement.
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      x.current = clientX; // Update the pointer's horizontal position.
      y.current = clientY; // Update the pointer's vertical position.
    };

    // Function to handle touch movement on devices like phones and tablets.
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        x.current = event.touches[0].clientX; // Update using the first touch point.
        y.current = event.touches[0].clientY;
      }
    };

    // Add the event listeners to the window (global) object.
    window.addEventListener("pointermove", handlePointerMove); // Listen for mouse movements.
    window.addEventListener("touchmove", handleTouchMove); // Listen for touch movements.

    // Cleanup function: Removes the event listeners when the component is unmounted.
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [ref]); // The `ref` dependency ensures the effect is re-applied if the reference changes.

  return null; // This hook does not return any visible UI elements.
}
