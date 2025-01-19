/**
 * Shares content via the Web Share API if supported,
 * otherwise falls back to copying the URL to the clipboard.
 *
 * @param {Object} options - The content to be shared.
 * @param {string} [options.title] - The title of the content (optional).
 * @param {string} [options.text] - A description or message to include with the shared content (optional).
 * @param {string} [options.url] - The URL to share (optional). If fallback is used, this will be copied to the clipboard.
 * 
 * @example
 * // Example usage:
 * shareContent({
 *   title: 'Check out this site!',
 *   text: 'Here’s a cool site I found. Thought you might like it.',
 *   url: 'https://example.com',
 * });
 */
export function shareContent({
    title,
    text,
    url,
  }: {
    title?: string;
    text?: string;
    url?: string;
  }): void {
    if (window.navigator.share) {
      // Use Web Share API if supported
      alert("sharing")
      window.navigator
        .share({ title, text, url })
        .then(() => console.log('Content shared successfully!'))
        .catch((error) => {
          console.error('Error sharing content:', error);
          alert('Sharing failed. Please try again.');
        });
    } else {
      // Fallback: Copy URL to clipboard
      if (url) {
        window.navigator.clipboard
          .writeText(url)
          .then(() => {
            alert('Link copied to clipboard!');
            console.log('URL copied to clipboard:', url);
          })
          .catch((error) => {
            console.error('Error copying to clipboard:', error);
            alert('Failed to copy the link to the clipboard.');
          });
      } else {
        alert('Sharing is not supported, and no URL was provided.');
      }
    }
  }
  