"use client";
import react, { FC, useContext, useEffect, useState } from "react";
import {
  Flex,
  Box,
  Spacer,
  Image,
  RadioGroup,
  Icon,
  Button,
} from "@chakra-ui/react";
import { PaymentIcon, PaymentType } from "react-svg-credit-card-payment-icons";
import OfferContext, { CreditCard } from "@/context/offerContext";
import * as cardValidator from "card-validator";

interface ViewConfig {
  logoSize: number;
  fontSize: number;
  padding: number;
}

const normalSize: ViewConfig = {
  logoSize: 38,
  fontSize: 16,
  padding: 2,
};

const firstSize: ViewConfig = {
  logoSize: 38,
  fontSize: 14,
  padding: 1,
};

interface FCreditCard extends CreditCard {
  card_type?: string;
}

interface PaymentBoxProps {
  payment?: FCreditCard;
}

export const PaymentBox: FC<PaymentBoxProps> = ({ payment }) => {
  const { offerData, creditcard } = useContext(OfferContext);
  const [cardType, setCardType] = useState<PaymentType>("Visa");

  useEffect(() => {
    if (!creditcard) return;
    const card = cardValidator.number(creditcard.number);
    //@ts-ignore
    let value: PaymentType = card.card?.niceType!;
    //@ts-ignore
    if (value == "American Express") {
      setCardType("Amex");
      return;
    }
    //@ts-ignore
    if (value == "JCB") {
      setCardType("Jcb");
      return;
    }
    setCardType(value);
  }, [creditcard]);

  useEffect(() => {
    if (!payment?.card_type) return;
    if (payment.card_type == "NONE") return;
    //@ts-ignore
    setCardType(payment?.card_type!);
  }, [creditcard]);

  const getConfig = () => {
    switch (offerData.secondaryOffers.length) {
      case 0:
        return normalSize;

      case 1:
        return firstSize;

      case 2:
        return firstSize;

      default:
        return normalSize;
    }
  };

  return (
    <Flex
      width={"100%"}
      padding={getConfig().padding}
      marginTop={4}
      alignItems={"center"}
      borderRadius={4}
      outline={"1px rgb(210, 210, 210) solid"}
      flexDirection={"column"}
    >
      {offerData.secondaryOffers.length == 0 && <div>Payment</div>}
      <Flex>
        <PaymentIcon
          //@ts-ignore
          type={cardType}
          format="logo"
          width={getConfig().logoSize}
        />
        {/* <div
          style={{
            paddingRight: 2,
            paddingLeft: 2,
          }}
        >
          Chase Bank
        </div> */}
        <div
          style={{
            fontSize: getConfig().fontSize,
          }}
        >
          **** **** **** {payment?.number.slice(-4)}
        </div>
        <Spacer width={"12px"} />
        <div
          style={{
            fontSize: getConfig().fontSize,
          }}
        >
          {payment?.expiration}
        </div>
      </Flex>
    </Flex>
  );
};
