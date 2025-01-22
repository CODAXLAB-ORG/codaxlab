/**
 * Scrolls a target element to a specified position.
 *
 * @param {string | HTMLElement} targetElement - The target element to scroll, specified as a CSS selector or HTMLElement.
 * @param {number} to - The target scroll position. Can be a number in pixels or a percentage (0 to 1).
 */
export function scrollTo(targetElement: string | HTMLElement, to: number): void {
  // Find the element using the selector or use the provided HTMLElement.
  const element =
    typeof targetElement === "string"
      ? document.querySelector(targetElement)
      : targetElement;

  if (!element) {
    console.warn("scrollTo: Target element not found.");
    return;
  }

  const { scrollHeight, clientHeight } = element;
  const maxScrollTop = scrollHeight - clientHeight;

  // Calculate the target scroll position.
  const targetScrollTop = to <= 1 ? maxScrollTop * to : to;

  // Scroll smoothly to the target position.
  element.scrollTo({
    top: targetScrollTop,
    behavior: "smooth",
  });
}
