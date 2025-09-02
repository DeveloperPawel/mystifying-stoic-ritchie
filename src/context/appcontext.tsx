"use client";
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
  useCallback,
  EffectCallback,
  useRef,
  use,
} from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Offer } from "@/types/offer";
import { Updatable } from "@/types/updatable";

import { useDebouncedCallback } from "use-debounce";
import { GameLoginData } from "@/types/gamelogindata";

export interface FImage {
  filename: string;
  image: any;
}

export interface SessionObj extends Updatable {
  session_id: string;
  time: number;
  status: string;
}

export interface ContactObj {
  email: string;
  verified: boolean;
}

interface Dict {
  [key: string]: any;
}

export interface AppData {
  app_id: string;
  affiliate_id: string;
  user_id: string;
  email: string;
  session: SessionObj;
  offers: Offer[];
  fixed_offers: Offer[];
  images: Dict;
  loginData: GameLoginData | null;
  transactionid: string;
  purchase: object | null;
  contact: ContactObj | null;
  reward: object | null;
}

export interface IAppProps {
  appData: AppData;
  setAppData(...args: unknown[]): unknown;
}

const AppContext = createContext<IAppProps>({} as IAppProps);

interface IAppContextProviderProps {
  children: ReactNode;
}

// Separate component to handle search params
const SearchParamsHandler: FC<{ setAppData: (data: AppData) => void; appData: AppData }> = ({ setAppData, appData }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const aff_id = searchParams.get("aff");
    if (typeof window !== "undefined" && aff_id) {
      // Save data to localStorage
      localStorage.setItem(
        appData.app_id + "data",
        JSON.stringify({ affiliate_id: aff_id })
      );
      
      // Update the context with the affiliate ID
      setAppData({
        ...appData,
        affiliate_id: aff_id
      });
    }
  }, [searchParams, setAppData, appData]);

  return null;
};

export const AppContextProvider: FC<IAppContextProviderProps> = ({
  children,
}) => {
  const [appData, setAppData] = useState<AppData>({
    app_id: process.env.NEXT_APP_ID!,
    affiliate_id: "",
    user_id: "",
    session: {
      session_id: "",
      time: 0,
      status: "NOUSER", // "NOUSER", "VERIFIED", "UNVERIFIED"
      update: "",
    },
    images: {},
    email: "",
    offers: [],
    fixed_offers: [],
    loginData: null,
    transactionid: "",
    purchase: null,
    contact: null,
    reward: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get data from localStorage
      const storedData = localStorage.getItem(appData.app_id + "data");
      if (storedData) {
        const { affiliate_id } = JSON.parse(storedData);
        setAppData((prevData) => ({ ...prevData, affiliate_id }));
      }
    }
  }, [appData.app_id, setAppData]);

  //get the fixed offers
  // useEffect(() => {
  //   const fOffers: Offer[] = JSON.parse(
  //     process.env.NEXT_PUBLIC_FIXED_OFFERS! || "[]"
  //   );

  //   const f_Offers: Offer[] = [];
  //   for (const offer of fOffers) {
  //     const _offer: Offer = {
  //       ...offer,
  //       quantity: 1,
  //     };
  //     f_Offers.push(_offer);
  //   }

  //   setAppData((prevData) => ({
  //     ...prevData,
  //     fixed_offers: [...f_Offers],
  //   }));
  // }, [setAppData]);

  const value = useMemo(
    () => ({
      appData,
      setAppData,
    }),
    [appData]
  );
  
  return (
    <AppContext.Provider value={value}>
      <Suspense fallback={null}>
        <SearchParamsHandler setAppData={setAppData} appData={appData} />
      </Suspense>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
