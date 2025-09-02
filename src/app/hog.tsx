"use client";
import react, { createContext, useState } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export interface Session {
  session_id: string | null;
  distict_id: string;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [sessionData, setSessionData] = useState<Session>({
    session_id: null,
    distict_id: "",
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const myKey: string = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
      const ph = posthog.init(myKey, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        session_recording: {
          captureCanvas: {
            // accepts a number between 0 and 12
            // if not set locally, when canvas recording is enabled, remote config sets this to 4
            canvasFps: 2,
            // accepts a decimal number between 0 and 1 as a string
            // if not set locally, when canvas recording is enabled, remote config sets this to "0.4"
            canvasQuality: "0.2",
          },
        },
      });
      console.log(
        "session_id: ",
        ph.sessionManager?.checkAndGetSessionAndWindowId().sessionId
      );
      console.log("distinct_id: ", ph.get_distinct_id());
      setSessionData({
        session_id:
          ph.sessionManager?.checkAndGetSessionAndWindowId().sessionId ?? null,
        distict_id: ph.get_distinct_id(),
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
