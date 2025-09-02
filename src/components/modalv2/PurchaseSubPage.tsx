"use client";
import react, { useContext, useEffect, useState, useCallback } from "react";
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
import AppContext, { SessionObj } from "@/context/appcontext";
import { CalculateTax, states } from "@/functions/calculateTax";
import { FormikHelpers, useFormik } from "formik";
import { postPurchase, Payment, PaymentResponse } from "@/api/payment";
import { useAcceptJs, CardData } from "react-acceptjs";
import { Offer } from "@/types/offer";
import { Updatable } from "@/types/updatable";
import { getCurrentUser } from "aws-amplify/auth";

interface Dict {
  [key: string]: string;
}

interface NonceData extends Updatable {
  dataDescriptor: string;
  dataValue: string;
}

const MERCHANT = "authorize";

const PurchaseSubPage = () => {
  const {
    offerData,
    billing,
    creditcard,
    authData,
    setOfferData,
    selectedProfile,
  } = useContext(OfferContext);
  const { appData, setAppData } = useContext(AppContext);
  const [total, setTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<string>("");

  const { dispatchData, loading, error } = useAcceptJs({
    environment: "PRODUCTION",
    authData: {
      apiLoginID: process.env.NEXT_PUBLIC_LOGIN!,
      clientKey: process.env.NEXT_PUBLIC_KEY!,
    },
  });
  const [nonceData, setNonceData] = useState<NonceData>({
    dataDescriptor: "",
    dataValue: "",
    update: "",
  });

  const getNonce = useCallback(
    async (card: CardData) => {
      let response = await dispatchData({ cardData: card });
      setNonceData({
        dataDescriptor: response.opaqueData.dataDescriptor,
        dataValue: response.opaqueData.dataValue,
        update: nonceData.update + "s",
      });
    },
    [setNonceData, nonceData]
  );

  const convertOffers = (offers: Offer[]): Dict[] => {
    const return_list: Dict[] = [];
    for (const offer of offers) {
      if (!offer.quantity) {
        offer.quantity = 1;
      }
      return_list.push({
        id: offer.id,
        quantity: offer.quantity <= 0 ? "1" : offer.quantity.toString(),
      });
    }
    return return_list;
  };

  const handlePurchaseResponse = useCallback(
    (response: PaymentResponse) => {
      if (response.body.error) {
        if (response.body.data == "EXPIRESESSION") {
          setAppData({
            ...appData,
            session: {
              session_id: "",
              time: 0,
              status: "UNVERIFIED",
              update: appData.session.update + "s",
            },
          });
        }
      }
      if (!response.body.error) {
        const newSession: SessionObj = {
          session_id: "",
          time: 0,
          status: "",
          update: "",
        };
        setAppData({
          ...appData,
          session: newSession,
          //@ts-ignore
          transactionid: response.body.data.transaction_number,
        });

        setOfferData({
          ...offerData,
          selectedOffer: null,
          secondaryOffers: [],
          completedPurchase: {
            //@ts-ignore
            ...response.body.data,
          },
        });
      }
    },
    [appData, setAppData, offerData, setOfferData]
  );

  const formik = useFormik({
    initialValues: {
      id: "",
      app_id: "",
      session: "",
      objoffers: [],

      creditcard: "",
      expiration: "",
      ccv: "",

      taxrate: "",

      firstname: "",
      lastname: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",

      tax: 0,
      total: 0,

      datadescription: "",
      datavalue: "",
      saveProfile: false,
      customerid: "",
      paymentprofile: "",
      phone: "",
    },
    validate: (values) => {
      const errors: {
        id?: string;
        app_id?: string;
        session?: string;
        objoffers?: string;

        creditcard?: string;
        expiration?: string;
        ccv?: string;

        taxrate?: string;
        firstname?: string;
        lastanme?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        country?: string;
        zipcode?: string;

        tax?: string;
        total?: string;

        datadescription?: string;
        datavalue?: string;
        saveProfile?: boolean;
        customerid?: string;
        paymentprofile?: string;
        phone?: string;
      } = {};

      return errors;
    },
    validateOnChange: false,
    onSubmit: async (values) => {
      const purchase: Payment = {
        taxrate: taxRate,
        tax: tax.toString(),
        id: values.id,
        app_id: values.app_id,
        total: total.toString(),
        firstname: values.firstname,
        lastname: values.lastname,
        address1: values.address1,
        city: values.city,
        state: values.state,
        zipcode: values.zipcode,
        session: values.session,
        objoffers: convertOffers([
          offerData.selectedOffer!,
          ...offerData.secondaryOffers,
        ]),
        creditcard: values.creditcard,
        expiration: values.expiration,
        ccv: values.ccv,
        country: "USA",
        datadescription: values.datadescription,
        datavalue: values.datavalue,
        saveProfile: values.saveProfile,
        customerid: values.customerid,
        paymentprofile: values.paymentprofile,
        phone: values.phone,
      };
      console.log(purchase);
      if (purchase.id.length == 0) {
        try {
          const { userId, signInDetails } = await getCurrentUser();
          purchase.id = userId;
        } catch (error) {}
      }
      const response = await postPurchase(purchase);
      console.log(response);
      if (response) {
        handlePurchaseResponse(response);
      }
    },
  });

  useEffect(() => {
    if (!offerData.completedPurchase) return;
    const closebutton = document.getElementById("checkoutButtonTop");
    const checkoutButton = document.getElementById("completedModal");

    if (checkoutButton) {
      checkoutButton.classList.add("show");
      checkoutButton.style.display = "block";
    }

    if (closebutton) {
      closebutton.click();
    }
  }, [offerData.completedPurchase]);

  const calculateTotal = useCallback(() => {
    let subtotal: number = 0;
    subtotal += parseFloat(offerData.selectedOffer?.price!);
    for (const offer of offerData.secondaryOffers) {
      subtotal += parseFloat(offer.price);
    }
    let tax = 0;
    if (billing) {
      tax = CalculateTax(subtotal, billing.state!);
      if (states[billing.state.toUpperCase()]) {
        setTaxRate(states[billing.state.toUpperCase()]);
      }
    }
    if (selectedProfile) {
      tax = CalculateTax(subtotal, selectedProfile.address.state);
      if (states[selectedProfile.address.state.toUpperCase()]) {
        setTaxRate(states[selectedProfile.address.state.toUpperCase()]);
      }
    }
    const total = parseFloat((tax + subtotal).toFixed(2));

    setTax(parseFloat(tax.toFixed(2)));
    setTotal(total);
  }, [offerData, setTotal, setTax, setTaxRate, billing, selectedProfile]);

  useEffect(() => {
    if (!billing) return;
    calculateTotal();

    formik.setFieldValue("firstname", billing.firstname);
    formik.setFieldValue("lastname", billing.lastname);
    formik.setFieldValue("address1", billing.address1);
    formik.setFieldValue("phone", billing.phonenumber);
    formik.setFieldValue("zipcode", billing.zip);
    formik.setFieldValue("city", billing.city);
    formik.setFieldValue("state", billing.state);
    formik.setFieldValue("saveProfile", billing.saveProfile);
  }, [billing]);

  useEffect(() => {
    if (!creditcard) return;
    formik.setFieldValue("creditcard", creditcard.number);
    formik.setFieldValue("expiration", creditcard.expiration);
    formik.setFieldValue("ccv", creditcard.ccv);
  }, [creditcard]);

  // useEffect(() => {
  //   if (offerData.selectedAddress == null) return;
  //   calculateTotal();
  // }, [offerData.selectedAddress]);

  useEffect(() => {
    if (offerData.selectedOffer == null) return;
    calculateTotal();
  }, [offerData.selectedOffer]);

  // useEffect(() => {
  //   if (!selectedProfile) return;
  //   calculateTotal();
  // }, [selectedProfile]);

  useEffect(() => {
    calculateTotal();
  }, [offerData.secondaryOffers.length]);

  useEffect(() => {
    formik.setFieldValue("id", appData.user_id);
  }, [appData.user_id.length]);

  useEffect(() => {
    formik.setFieldValue("app_id", appData.app_id);
  }, []);

  const setSessionData = useCallback(() => {
    formik.setFieldValue("session", appData.session?.session_id);
  }, [formik, appData]);

  const setUserData = useCallback(async () => {
    try {
      const { userId, signInDetails } = await getCurrentUser();

      formik.setFieldValue("email", signInDetails?.loginId);
    } catch (error) {}
  }, [formik]);

  useEffect(() => {
    setSessionData();
  }, [appData.session.update.length]);

  useEffect(() => {
    setUserData();
  }, []);

  useEffect(() => {
    if (
      appData.session.status == "UNVERIFIED" ||
      appData.session.status == "NOUSER"
    )
      setUserData();
  }, [appData.session.update]);

  useEffect(() => {
    if (appData.session?.session_id?.length == 0) return;
    formik.setFieldValue("session", appData.session.session_id);
  }, [appData.session.update.length]);

  useEffect(() => {
    if (!billing && !creditcard) return;
    const cardData: CardData = {
      cardNumber: creditcard!.number,
      month: creditcard!.expiration.split("-")[0],
      year: creditcard!.expiration.split("-")[1],
      zip: billing?.zip!,
      cardCode: creditcard?.ccv!,
      fullName: billing?.firstname! + " " + billing?.lastname!,
    };

    getNonce(cardData);
  }, [billing, creditcard]);

  useEffect(() => {
    if (nonceData.dataDescriptor.length == 0 || nonceData.dataValue.length == 0)
      return;
    formik.setFieldValue("datadescription", nonceData.dataDescriptor);
    formik.setFieldValue("datavalue", nonceData.dataValue);
  }, [nonceData.update.length]);

  useEffect(() => {
    if (!selectedProfile) return;
    calculateTotal();
    switch (MERCHANT) {
      case "authorize":
        formik.setFieldValue("customerid", selectedProfile.contact_id);
        formik.setFieldValue("paymentprofile", selectedProfile.payment_id);
        break;

      default:
        break;
    }
  }, [selectedProfile]);

  return (
    <Flex background={"blue"} height={"100%"} zIndex={100}>
      <Box width={"100%"} top={"87%"} position={"absolute"}>
        <Flex
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"100%"}
          height={24}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spacer />
            <div
              style={{
                opacity: 0.8,
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Total
            </div>
            <div
              style={{
                color: "white",
                fontSize: 36,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              {`$${total}`}
            </div>
            <Spacer />
          </Flex>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              //@ts-ignore
              onClick={formik.handleSubmit}
              padding={4}
              background={"white"}
              borderRadius={20}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#2B1B0C",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  letterSpacing: 0.32,
                  wordWrap: "break-word",
                }}
              >
                Place Order
              </div>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PurchaseSubPage;
