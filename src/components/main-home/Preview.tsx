"use client";

import VideoPopup from "@/modals/VideoPopup";
import Link from "next/link";
import React, { useState } from "react";

const version = process.env.NEXT_PUBLIC_VERSION!

const Preview = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="preview-hero-area">
        <span className="big-shadow-text">Crust Keeper</span>
        <div className="container demo-container direction-rtl">
          <div className="row g-2 align-items-center justify-content-between">
            <div className="col-12 col-lg-3"></div>

            <div className="col-12 col-lg-5">
              <div className="text-center">
                <iframe className="shadow-lg" src="/hero-blocks"></iframe>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="text-lg-end">
                <div className="qr-code-wrapper shadow border">
                  <img src={`/assets/img/demo-img/qr-code${version}.png`} alt="" />
                  <h6 className="mb-0">
                    Scan this QR code to view <br /> on your mobile device.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      {/* <VideoPopup
				isVideoOpen={isVideoOpen}
				setIsVideoOpen={setIsVideoOpen}
				videoId={"-D6QFpH7zCA"}
			/> */}
      {/* video modal end  */}
    </>
  );
};

export default Preview;
