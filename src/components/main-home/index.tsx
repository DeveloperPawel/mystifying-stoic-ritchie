"use client";
import React, { useEffect, useContext, useCallback, useRef } from "react";
import Preview from "./Preview";
import Features from "./Features";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Templates from "../common/Templates";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Hero from "../../app/hero-blocks/page";

const MainHome = () => {

  return (
    <>
      <BrowserView>
        <div className="preview-iframe-wrapper">
          <Preview />
        </div>
      </BrowserView>
      <MobileView>
        <Hero />
      </MobileView>
    </>
  );
};

export default MainHome;
