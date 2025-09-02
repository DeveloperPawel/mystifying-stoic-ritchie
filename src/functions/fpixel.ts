export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL!;

declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options: any = {}) => {
  window.fbq("track", name, options);
};