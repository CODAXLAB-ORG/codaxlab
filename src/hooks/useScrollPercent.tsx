import { useEffect, useState } from "react";

/**
 * Custom React hook to track the scroll percentage of a specified element
 * and detect the scroll direction (up or down).
 *
 * @param {string | HTMLElement | null} targetElement - The selector string or the HTMLElement to observe.
 * @returns {{
 *   scrollPercentage: number;
 *   isScrollingUp: boolean;
 * }} - An object containing the scroll percentage and scroll direction.
 */
export default function useScrollPercent(
  targetElement: string | HTMLElement | null
): { scrollPercentage: number; isScrollingUp: boolean } {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  useEffect(() => {
    if (targetElement) {
      const elementToObserve =
        typeof targetElement === "string"
          ? document.querySelector(targetElement)
          : targetElement;

      if (!elementToObserve) return;

      const handleScroll = (): void => {
        const scrollTop = elementToObserve.scrollTop;
        const scrollHeight = elementToObserve.scrollHeight;
        const clientHeight = elementToObserve.clientHeight;

        // Calculate scroll percentage
        const percentage = Math.floor(
          (scrollTop / (scrollHeight - clientHeight)) * 100
        );
        setScrollPercentage(percentage);

        // Determine scroll direction
        setIsScrollingUp(scrollTop > prevScrollTop);
        setPrevScrollTop(scrollTop);
      };

      // Attach the scroll event listener
      elementToObserve.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on unmount
      return () => {
        elementToObserve.removeEventListener("scroll", handleScroll);
      };
    }
  }, [targetElement, prevScrollTop]);

  return {
    scrollPercentage,
    isScrollingUp,
  };
}
