"use client";
import react, { ReactNode, FC, useContext, useState, Fragment } from "react";
import OfferContext from "@/context/offerContext";
import dynamic from "next/dynamic";
import { AddressAutofill } from "@mapbox/search-js-react";
import Input from "../components/bootstrap/forms/Input";

interface AddressFillProps {
  children: ReactNode;
}

export const AddressFill: FC<AddressFillProps> = ({ children }) => {
  const { mapToken } = useContext(OfferContext);
  return (
    <Fragment>
      {/*
        //@ts-ignore */}
      <AddressAutofill accessToken={mapToken}>
        {/*
        //@ts-ignore */}
        {children}
      </AddressAutofill>
    </Fragment>
  );
};
