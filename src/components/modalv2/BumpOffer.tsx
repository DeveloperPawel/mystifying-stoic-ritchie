"use client";
import {
  Flex,
  Box,
  Spacer,
  Image,
  RadioGroup,
  Icon,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { MdAddBox, MdCancel } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { Offer } from "@/types/offer";
import OfferContext from "@/context/offerContext";
import AppContext from "@/context/appcontext";

interface BumpInterface {
  offer: Offer;
}

const ASSETS_URL = process.env.NEXT_PUBLIC_FRONT;

const bumpData = {
  text: [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ],
  price: "25.99",
  item_id: "ASDFEVE",
};

const BumpOfferTypes = Object.freeze({
  Selected: Symbol("Selected"),
  NotSelected: Symbol("NotSelected"),
});
const bgColor: string = "rgb(210, 210, 210)";

const BumpOffer: React.FC<BumpInterface> = ({ offer }: { offer: Offer }) => {
  const { appData } = useContext(AppContext);
  const { offerData, setOfferData } = useContext(OfferContext);
  const [selected, setSelected] = useState<Symbol>(BumpOfferTypes.NotSelected);
  const [data, setData] = useState({
    text: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  });

  useEffect(() => {
    setData({
      text: offer.description.split(","),
    });
  }, []);

  const selectBump = useCallback(() => {
    if (selected == BumpOfferTypes.NotSelected) {
      setSelected(BumpOfferTypes.Selected);

      setOfferData({
        ...offerData,
        secondaryOffers: [...offerData.secondaryOffers, offer],
      });
    } else {
      setSelected(BumpOfferTypes.NotSelected);

      setOfferData({
        ...offerData,
        secondaryOffers: offerData.secondaryOffers.filter(
          (offer_) => offer.id !== offer_.id
        ),
      });
    }
  }, [offerData.secondaryOffers]);

  return (
    <Flex
      paddingBottom={0}
      paddingLeft={2}
      paddingRight={2}
      marginTop={6}
      alignItems={"center"}
      borderRadius={4}
      outline={"1px rgb(210, 210, 210) solid"}
      onClick={selectBump}
      width={"100%"}
      height={65}
      background={
        selected == BumpOfferTypes.NotSelected ? "white" : "rgb(210, 210, 210)"
      }
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex gap={1}>
          <Flex flexDirection={"column"}>
            <div
              style={{
                width: 62,
                height: 62,
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                backgroundImage: "url(https://placehold.co/62x62)",
              }}
            >
              {/* <img
                style={{
                  width: 62,
                  height: 62,
                  position: "absolute",
                }}
                src="https://placehold.co/62x62"
              /> */}
              {/* {appData.images[offer.image] ? (
                <Image
                  src={appData.images[offer.image].image}
                  width={62}
                  height={62}
                  alt={offer.image}
                  position={"absolute"}
                />
              ) : (
                <Image
                  src={`/assets/img/purchase-img/${offer.image}`}
                  width={62}
                  height={62}
                  alt={offer.image}
                  position={"absolute"}
                />
              )} */}
              <Image
                  src={`https://${ASSETS_URL}/${offer.image}`}
                  width={62}
                  height={62}
                  alt={offer.image}
                  position={"absolute"}
                />
            </div>
            {/* filler box */}
            <div
              style={{
                width: 60,
                height: 34,
              }}
            />
          </Flex>
          <Flex width={180} marginTop={4} flexDirection={"column"}>
            <div
              style={{
                color: "black",
                fontSize: 13,
              }}
            >
              {data.text[0]}
            </div>
            {data.text[1] && (
              <div
                style={{
                  color: "red",
                  fontSize: 13,
                }}
              >
                {data.text[1]}
              </div>
            )}
            {data.text[2] && (
              <div
                style={{
                  color: "black",
                  fontSize: 13,
                }}
              >
                {data.text[2]}
              </div>
            )}
          </Flex>
          <Spacer height={10} />
          <Flex flexDirection={"column"}>
            <Spacer />
            <Button
              background={
                selected == BumpOfferTypes.NotSelected ? "white" : bgColor
              }
            >
              <Icon
                size="2xl"
                color={
                  selected == BumpOfferTypes.NotSelected ? "green" : "#700806"
                }
              >
                {selected == BumpOfferTypes.NotSelected ? (
                  <IoAddCircle />
                ) : (
                  <MdCancel />
                )}
              </Icon>
            </Button>
            <Spacer />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BumpOffer;
