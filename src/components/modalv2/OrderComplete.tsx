"use client";
import react, {
  useEffect,
  useCallback,
  useContext,
  useState,
  useRef,
} from "react";
import { Flex, Spacer, Text, Button, Span, Box } from "@chakra-ui/react";
import OfferContext from "@/context/offerContext";
import { ReducedOffer } from "@/types/reducedOffer";
import AppContext from "@/context/appcontext";
import { getActivity } from "@/api/getActivity";
import * as fbq from "@/functions/fpixel";

interface OrderCompleted {
  order_num: string;
  offers: ReducedOffer[];
  tax: any;
  total: string;
}

const template: OrderCompleted = {
  order_num: "#0000000",
  tax: "9999",
  total: "9999",
  offers: [
    {
      app_id: "asdfaeife",
      itemid: "happy1",
      price: "99.99",
      tags: "OTO",
      title: "Happy 01",
      id: "sdfweief",
      quantity: "4",
      description: "great offer.",
      group: "yyyyy",
    },
    {
      app_id: "asdfaeife",
      itemid: "happy1",
      price: "99.99",
      tags: "OTO",
      title: "Happy 01",
      id: "sdfweief",
      quantity: "4",
      description: "great offer.",
      group: "yyyyy",
    },
    {
      app_id: "asdfaeife",
      itemid: "happy1",
      price: "99.99",
      tags: "OTO",
      title: "Happy 01",
      id: "sdfweief",
      quantity: "4",
      description: "great offer.",
      group: "yyyyy",
    },
  ],
};

const OrderComplete = ({ func }: {func:()=>void}) => {
  const { offerData, setOfferData } = useContext(OfferContext);
  const [data, setData] = useState<OrderCompleted>(template);
  const { appData, setAppData } = useContext(AppContext);
  const purchaseRef = useRef<NodeJS.Timeout>();
  const pollStartTime = useRef<number>(0);

  useEffect(() => {
    if (!offerData.completedPurchase) return;
    const newData: OrderCompleted = {
      order_num: offerData.completedPurchase.ref,
      //@ts-ignore
      offers: [...offerData.completedPurchase.offers],
      tax: offerData.completedPurchase.tax_amount,
      total: offerData.completedPurchase.total,
    };
    setData(newData);

    fbq.event('Purchase', {
      currency: "USD",
      value: parseFloat(offerData.completedPurchase.total),
      content_ids: [offerData.completedPurchase.ref],
      content_type: "product",
      num_items: offerData.completedPurchase.offers.length
    });

  }, [offerData.completedPurchase]);

  const closeModal = useCallback(() => {
    const checkoutButton = document.getElementById("completedModal");

    if (checkoutButton) {
      checkoutButton.classList.remove("show");
      checkoutButton.style.display = "";
    }

    setOfferData({
      ...offerData,
      completedPurchase: null,
    });

    func()
  }, [offerData, setOfferData]);

  // const closeModal = () => {
  //   const checkoutButton = document.getElementById("completedModal");

  //   if (checkoutButton) {
  //     checkoutButton.classList.remove("show");
  //     checkoutButton.style.display = "";
  //   }

  //   removeCompletedOffer();
  // };



  // useEffect(() => {
  //   if (appData.transactionid.length == 0) return;

  //   const fetchPurchase = async () => {
  //     try {
  //       const response = await getActivity({
  //         app_id: appData.app_id,
  //         id: appData.transactionid
  //       });
  //       if (!response) return;
  //       if (response.body.error) return;
  //       if (!response.body.error && !response.body.success) return;
  //       //@ts-ignore
  //       setAppData({ ...appData, purchase: response.body.data });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   // Set the start time for polling
  //   pollStartTime.current = Date.now();

  //   // Start polling immediately
  //   fetchPurchase();

  //   // Set up interval to poll every second
  //   purchaseRef.current = setInterval(() => {
  //     // Check if 5 seconds have passed since polling started
  //     if (Date.now() - pollStartTime.current >= 5000) {
  //       clearInterval(purchaseRef.current);
  //       return;
  //     }
  //     fetchPurchase();
  //   }, 1000);

  //   return () => clearInterval(purchaseRef.current); // Cleanup on unmount
  // }, [appData.transactionid.length]);

  // useEffect(() => {
  //   if (!appData.purchase) return;
  //   setAppData({ ...appData, tranactionid: "" });
  //   clearInterval(purchaseRef.current);
  // }, [appData.purchase]);

  return (
    <>
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "white",
          overflow: "hidden",
        }}
      > */}
      {/* <div
        style={{
          left: 98,
          top: 260,
          position: "absolute",
          color: "#9FC78A",
          fontSize: 22,
          fontFamily: "Brown",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Order completed!
      </div> */}
      <Text
        style={{
          left: 98,
          top: 100,
          position: "absolute",
          color: "#9FC78A",
          fontSize: 22,
          fontFamily: "Brown",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Order completed!
      </Text>
      <div
        style={{
          left: 109,
          top: 129,
          position: "absolute",
          color: "#BBBBBB",
          fontSize: 13,
          fontFamily: "Graphik",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Order number: {data.order_num}
      </div>
      <div
        style={{
          width: 375,
          height: 1,
          left: 0,
          top: 420,
          position: "absolute",
          outline: "1px #F5F5F5 solid",
          outlineOffset: "-0.50px",
        }}
      />
      <div
        style={{
          width: 375,
          height: 1,
          left: 0,
          top: 160,
          position: "absolute",
          outline: "1px #F5F5F5 solid",
          outlineOffset: "-0.50px",
        }}
      />
      <div
        style={{
          width: 375,
          height: 1,
          left: 0,
          top: 533,
          position: "absolute",
          outline: "1px #F5F5F5 solid",
          outlineOffset: "-0.50px",
        }}
      />
      <div
        style={{
          left: 24,
          top: 168,
          position: "absolute",
          color: "#424347",
          fontSize: 16,
          fontFamily: "Graphik",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Ordered Items
      </div>

      <Flex
        flexDirection={"column"}
        width={375}
        height={200}
        top={200}
        position={"absolute"}
        paddingRight={6}
        paddingLeft={6}
      >
        {data.offers.map((item, i) => {
          return (
            <Flex key={i} flexDirection={"column"}>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                {item.title}
              </div>
              <Flex>
                <Flex>
                  <div>Qty:</div>
                  <Spacer width={"2px"} /> <div>{item.quantity}</div>
                </Flex>
                <Spacer />
                <Flex>
                  <div>Price:</div>
                  <Spacer width={"2px"} /> <div>{item.price}</div>
                </Flex>
              </Flex>

              <div
                style={{
                  height: "4px",
                }}
              />
              <div
                style={{
                  height: "1px",
                  backgroundColor: "black",
                }}
              />
            </Flex>
          );
        })}
      </Flex>

      <Flex
        flexDirection={"column"}
        width={375}
        height={68}
        top={445}
        position={"absolute"}
        overflow={"hidden"}
        paddingRight={6}
        paddingLeft={6}
      >
        <Flex>
          Tax
          <Spacer />
          {`${data.tax}`}$
        </Flex>

        {/* <Flex>
          Delivery
          <Spacer />
          {data.total}$
        </Flex> */}

        <Flex>
          Total
          <Spacer />
          {data.total}$
        </Flex>
      </Flex>

      <div
        style={{
          width: 338,
          height: 60,
          left: 19,
          top: 570,
          position: "absolute",
        }}
      >
        <Button
          style={{
            width: 338,
            height: 60,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#8688BC",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.10)",
            borderRadius: 4,
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
          onClick={closeModal}
          data-bs-dismiss="modal"
        >
          <Spacer />
          <Box
            position={"absolute"}
            textAlign={"center"}
            color={"white"}
            fontSize={18}
            fontFamily={"Brown"}
            fontWeight={"700"}
            wordWrap={"break-word"}
            width={50}
          >
            Close
          </Box>
          <Spacer />
        </Button>
      </div>
      <div
        style={{
          width: 338,
          height: 60,
          left: 19,
          top: 629,
          position: "absolute",
        }}
      ></div>
      {/* </div> */}
    </>
  );
};

export default OrderComplete;
