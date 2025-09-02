"use client";
import react, { FC, useContext } from "react";
import {
  Flex,
  Box,
  Spacer,
  Image,
  RadioGroup,
  Icon,
  Button,
} from "@chakra-ui/react";
import OfferContext, { Address } from "@/context/offerContext";

interface ViewConfig {
  fontSize: number;
  padding: number;
}

const normalSize: ViewConfig = {
  fontSize: 16,
  padding: 2,
};

const firstSize: ViewConfig = {
  fontSize: 14,
  padding: 2,
};

const secondSize: ViewConfig = {
  fontSize: 14,
  padding: 0,
};

interface BillingBoxProps {
  billing: Address;
}

export const BillingBox: FC<BillingBoxProps> = ({ billing }) => {
  const { offerData } = useContext(OfferContext);
  const getConfig = () => {
    switch (offerData.secondaryOffers.length) {
      case 0:
        return normalSize;

      case 1:
        return firstSize;

      case 2:
        return secondSize;

      default:
        return normalSize;
    }
  };
  const billingFontSize = (
    configFontSize: number,
    addressLength: number
  ): number => {
    if (addressLength > 34) {
      return configFontSize - 1;
    }
    return configFontSize;
  };
  return (
    <Flex
      width={"100%"}
      padding={getConfig().padding}
      marginTop={2}
      alignItems={"center"}
      borderRadius={4}
      outline={"1px rgb(210, 210, 210) solid"}
      flexDirection={"column"}
    >
      {offerData.secondaryOffers.length == 0 && <div>Billing</div>}
      <div
        style={{
          fontSize: billingFontSize(
            getConfig().fontSize,
            billing?.address1.length
          ),
        }}
      >
        {billing?.address1}
      </div>
      <Flex>
        <div
          style={{
            fontSize: getConfig().fontSize,
          }}
        >
          {billing?.city}
          {","}
        </div>
        <Spacer width={1} />
        <div
          style={{
            fontSize: getConfig().fontSize,
          }}
        >
          {" "}
          {billing?.state}
        </div>
        <Spacer width={2} />
        <div
          style={{
            fontSize: getConfig().fontSize,
          }}
        >
          {billing?.zip}
        </div>
      </Flex>
    </Flex>
  );
};
