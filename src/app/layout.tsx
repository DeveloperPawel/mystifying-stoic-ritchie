"use client";
import "../styles/index.scss";
import "../styles/index.css";
import React, { ReactNode, useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";
import { PostHogProvider } from "./hog";
import { Amplify, type ResourcesConfig } from "aws-amplify";
import { CookieStorage } from "aws-amplify/utils";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import { AppContextProvider } from "@/context/appcontext";
import { OfferContextProvider } from "@/context/offerContext";
import Script from "next/script";
import * as fbq from "@/functions/fpixel";

const authConfig: ResourcesConfig["Auth"] = {
  Cognito: {
    userPoolId: process.env.NEXT_PUBLIC_POOL_ID!,
    userPoolClientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
  },
};

Amplify.configure({
  Auth: authConfig,
  API: {
    REST: {
      main: {
        endpoint: process.env.NEXT_PUBLIC_MAIN_API!,
        region: process.env.NEXT_PUBLIC_MAIN_REGION!,
      },
      game: {
        endpoint: process.env.NEXT_PUBLIC_GAME_API!,
        region: process.env.NEXT_PUBLIC_GAME_REGION!,
      },
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      fbq.pageview();
    }
  }, []);

  return (
    <html id="previewPage" data-theme="dark" lang="en">
      <head>
      <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Global Site Code Pixel - Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${fbq.FB_PIXEL_ID});
            `,
          }}
        />
        <PostHogProvider>
          <AppContextProvider>
            <OfferContextProvider>
              <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
            </OfferContextProvider>
          </AppContextProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
