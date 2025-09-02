"use client";
import react, { useContext, useEffect, useCallback } from "react";
import {
  Flex,
  Box,
  Spacer,
  Image,
  RadioGroup,
  Icon,
  Button,
} from "@chakra-ui/react";
import OfferContext from "@/context/offerContext";
import AppContext from "@/context/appcontext";
import { Offer } from "@/types/offer";

const ASSETS_URL = process.env.NEXT_PUBLIC_FRONT;

const offer = {
  id: "#4543234",
  description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  amount: 1,
  price: 3.99,
};

interface ConfigData {
  imageSize: number;
  quantityPriceMargin: number;
  quantityPriceHeight: number;
  quantityPriceSize: number;
  offerFontWeight: string;
  offerFontSize: number;
  descriptionHeight: number;
}

const normalSize: ConfigData = {
  imageSize: 74,
  quantityPriceMargin: 12,
  quantityPriceHeight: 18,
  quantityPriceSize: 12,
  offerFontWeight: "700",
  offerFontSize: 14,
  descriptionHeight: 18,
};

const first: ConfigData = {
  imageSize: 54,
  quantityPriceMargin: 0,
  quantityPriceHeight: 14,
  quantityPriceSize: 12,
  offerFontWeight: "500",
  offerFontSize: 12,
  descriptionHeight: 16,
};

const second: ConfigData = {
  imageSize: 42,
  quantityPriceMargin: 0,
  quantityPriceHeight: 12,
  quantityPriceSize: 12,
  offerFontWeight: "400",
  offerFontSize: 12,
  descriptionHeight: 16,
};

const CheckoutItem = ({ offer }: { offer: Offer }) => {
  const { offerData } = useContext(OfferContext);
  const { appData } = useContext(AppContext);

  const getConfig = useCallback((): ConfigData => {
    switch (offerData.secondaryOffers.length) {
      case 0:
        return normalSize;

      case 1:
        return first;

      case 2:
        return second;

      default:
        return normalSize;
    }
  }, [offerData.secondaryOffers]);

  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 16,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: getConfig().imageSize,
              height: getConfig().imageSize,
              position: "relative",
              overflow: "hidden",
              borderRadius: 16,
              backgroundImage: `url(https://placehold.co/${
                getConfig().imageSize
              }x${getConfig().imageSize})`,
            }}
          >
            {/* <img
              style={{
                width: getConfig().imageSize,
                height: getConfig().imageSize,
                position: "absolute",
              }}
              src={`https://placehold.co/${getConfig().imageSize}x${
                getConfig().imageSize
              }`}
            /> */}

            {/* {appData.images[offer.image] ? (
              <Image
                src={appData.images[offer.image].image}
                width={getConfig().imageSize}
                height={getConfig().imageSize}
                alt={offer.image}
                position={"absolute"}
              />
            ) : (
              <Image
                src={`/assets/img/purchase-img/${offer.image}`}
                width={getConfig().imageSize}
                height={getConfig().imageSize}
                alt={offer.image}
                position={"absolute"}
              />
            )} */}
            <Image
                src={`https://${ASSETS_URL}/${offer.image}`}
                width={getConfig().imageSize}
                height={getConfig().imageSize}
                alt={offer.image}
                position={"absolute"}
              />
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // gap: 4,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: getConfig().offerFontSize,
                fontWeight: getConfig().offerFontWeight,
                wordWrap: "break-word",
              }}
            >
              Offer: {offer.itemid}
            </div>
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                // gap: 4,
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 192,
                  height: getConfig().descriptionHeight,
                  color: "#606060",
                  fontSize: 12,
                  fontWeight: "400",
                  wordWrap: "break-word",
                  lineHeight: "130%",
                }}
              >
                {offer.description.split(",")[0]}
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginTop: getConfig().quantityPriceMargin,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    height: getConfig().quantityPriceHeight,
                    color: "#606060",
                    fontSize: getConfig().quantityPriceSize,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Qty: {1}
                </div>
                <div
                  style={{
                    flex: "1 1 0",
                    height: getConfig().quantityPriceHeight,
                    color: "#606060",
                    fontSize: getConfig().quantityPriceSize,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Price: ${offer.price}
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
      <Spacer
        style={{
          width: "100%",
          height: 1,
          // position: "absolute",
          outline: "1px #F5F5F5 solid",
          outlineOffset: "-0.50px",
          marginTop: 4,
          marginBottom: 4,
        }}
      />
    </>
  );
};

export default CheckoutItem;
