/**
 * Umami Analytics utility
 * Tracks custom events using the Umami analytics script
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

/**
 * Track a custom event with Umami
 * @param eventName - The name of the event to track
 * @param eventData - Optional data object to send with the event
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, eventData);
  }
};
