import React from "react";
import dynamic from "next/dynamic";

const Address = dynamic(
  //@ts-ignore
  () =>
    import("@mapbox/search-js-react").then((module) => module.AddressAutofill),
  {
    ssr: false,
  }
);

export default Address;
