"use client";
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { Suspense } from "react";
import { Offer } from "@/types/offer";
import { CompletedPurchase } from "@/types/completedPurchase";

export interface Profile {
  payment_id: string;
  contact_id: string;
  address: Address;
}

export interface CreditCard {
  number: string;
  formated?: string;
  expiration: string;
  ccv: string;
}

export interface Address {
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  zip: string;
  phonenumber: string;
  saveProfile: boolean;
}

export interface OfferData {
  selectedOffer: Offer | null;
  secondaryOffers: Offer[];
  completedPurchase: CompletedPurchase | null;
}

interface AuthData {
  apiLoginID: string;
  clientKey: string;
}

export interface IOfferProps {
  offerData: OfferData;
  billing: Address | null;
  creditcard: CreditCard | null;
  authData: AuthData;
  mapToken: string;
  selectedProfile: Profile | null;
  setOfferData(...args: unknown[]): unknown;
  setBilling(...args: unknown[]): unknown;
  setcreditCard(...args: unknown[]): unknown;
  setSelectedProfile(...args: unknown[]): unknown;
}

const OfferContext = createContext<IOfferProps>({} as IOfferProps);

interface IOfferContextProviderProps {
  children: ReactNode;
}

export const OfferContextProvider: FC<IOfferContextProviderProps> = ({
  children,
}) => {
  const [offerData, setOfferData] = useState<OfferData>({
    selectedOffer: null,
    secondaryOffers: [],
    completedPurchase: null,
  });
  const [billing, setBilling] = useState<Address | null>(null);
  const [creditcard, setcreditCard] = useState<CreditCard | null>(null);
  const [authData, setAuthData] = useState({
    apiLoginID: "",
    clientKey: "",
  });
  const [mapToken, setMapToken] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  /** get auth token */
  useEffect(() => {
    setAuthData({
      apiLoginID: process.env.LOGIN!,
      clientKey: process.env.KEY!,
    });
  }, []);

  /** get map token */
  useEffect(() => {
    setMapToken(process.env.MAP_BOX!);
  }, []);

  const value = useMemo(
    () => ({
      offerData,
      billing,
      creditcard,
      authData,
      mapToken,
      selectedProfile,
      setBilling,
      setcreditCard,
      setOfferData,
      setSelectedProfile,
    }),
    [offerData, billing, creditcard, authData, mapToken, selectedProfile]
  );
  return (
    <OfferContext.Provider value={value}>{children}</OfferContext.Provider>
  );
};

export default OfferContext;
