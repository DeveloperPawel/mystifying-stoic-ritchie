"use client";
import React, {
  ElementRef,
  ElementType,
  useEffect,
  useContext,
  useState,
  useCallback,
} from "react";
import { Box, Flex, Text, Button, Icon, Spacer, Image } from "@chakra-ui/react";
import { Offer } from "@/types/offer";
import { Dict } from "@/types/dict";
import AppContext from "@/context/appcontext";
import OfferContext from "@/context/offerContext";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

interface OfferResource {
  image: string;
  description: string;
  amount: string;
}

interface OfferModal extends Offer {
  resources: OfferResource[];
}

const ASSETS_URL = process.env.NEXT_PUBLIC_FRONT;

const OfferModal = ({ offer_id }: { offer_id: string }) => {
  const { height, width } = useWindowDimensions();
  const { appData } = useContext(AppContext);
  const { offerData, setOfferData } = useContext(OfferContext);
  const [offer, setOffer] = useState<OfferModal | null>(null);

  // selectOffer
  useEffect(() => {
    if (offer_id.length == 0) return;

    let offer_ = null;
    let offers: Offer[] = [];
    offers = [...appData.offers, ...appData.fixed_offers];
    offer_ = offers.filter((offer) => offer.id == offer_id);

    if (offer_.length == 0) return;
    setOffer({ ...offer_[0], resources: createResources(offer_[0]) });
  }, [offer_id, appData.offers, appData.fixed_offers]);

  const createResources = (offer: Offer): OfferResource[] => {
    const description_list = offer.description.split(",");
    description_list.shift();

    const return_list = description_list.map((item) => {
      const subList = item.split(";");
      const oResource: OfferResource = {
        image: subList[1],
        description: subList[2],
        amount: subList[0],
      };
      return oResource;
    });

    return return_list;
  };

  const closeButtonClick = () => {
    const element = document.getElementById('offerModal')
    if (element) {
      element.classList.remove("show");
      element.style.display = "";
    }
  }

  const selectOffer = useCallback(
    (offer: Offer) => {
      setOfferData({
        ...offerData,
        selectedOffer: offer,
      });
    },
    [offerData, setOfferData]
  );

  const leftOffset = (width:number) => {
    let offset = 0;

    if (width > 0) {
      offset = (width - 375) / 2
    }

    return offset;
  }

  useEffect(() => {
    if (!offerData.selectedOffer) return;
    const closebutton = document.getElementById("offerCloseButton");
    const checkoutButton = document.getElementById("checkoutModal");

    if (checkoutButton) {
      checkoutButton.classList.add("show");
      checkoutButton.style.display = "block";
    }

    if (closebutton) {
      closebutton.click();
    }
  }, [offerData.selectedOffer]);

  return (
    <>
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "black",
          overflow: "hidden",
        }}
      > */}
      {/* image container */}
      <div
        data-count="4"
        data-mode="Dark"
        data-use-for="New Year"
        style={{
          width: 375,
          height: 549,
          left: leftOffset(width),
          top: 0,
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: 375,
            height: 549,
            left: 0,
            top: 0,
            position: "absolute",
          }}
          src={
            offer
              // ? `/assets/img/purchase-img/${offer.image}`
              ? `https://${ASSETS_URL}/${offer.image}`
              : "./assets/img/purchase-img/ck-backwards-45.png"
          }
        />
      </div>
      {/* new years block */}
      <div
        data-color-scheme="Golden"
        data-size="Large"
        data-style="Full"
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 12,
          paddingBottom: 12,
          left: 79.5,
          top: 44,
          position: "absolute",
          background: "linear-gradient(90deg, #C5A75A 0%, #A06B2C 100%)",
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
          height: 32,
        }}
      >
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: 15,
            fontFamily: "Lato",
            fontWeight: "700",
            lineHeight: 22,
            letterSpacing: 1.8,
            wordWrap: "break-word",
          }}
        >
          Limited Time Offer
        </div>
      </div>
      {/* close button block */}
      <div
        style={{
          padding: 4,
          left: 314,
          top: 10,
          position: "absolute",
          background: "rgba(255, 255, 255, 0.50)",
          borderRadius: 100,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
        }}
      >
        {/* <button
          id="offerCloseButton"
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button> */}
        <Button
          className="btn-close"
          aria-label="Close"
          onClick={closeButtonClick}
          style={{
            width: '28px',
            height: '28px',
          }}
        >
        </Button>
      </div>

      {/* remaining block */}
      <div
        style={{
          left: leftOffset(width),
          top: 283,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "inline-flex",
        }}
      >
        <div
          data-counter="False"
          data-mode="Dark"
          style={{
            width: 375,
            paddingTop: 16,
            paddingBottom: 16,
            gap: 10,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Box
          width={375}
          paddingTop={16}
          paddingBottom={16}
          gap={10}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          > */}
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              color: "#A06B2C",
              fontSize: 44,
              fontFamily: "Lato",
              fontWeight: "900",
              lineHeight: 56,
              wordWrap: "break-word",
              height: 28,
            }}
          >
            71% OFF
          </div>
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              color: "#A06B2C",
              fontSize: 16,
              fontFamily: "Lato",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            {" "}
            Get this exclusive limited offer!
          </div>
          {/* </Box> */}
        </div>
        <div
          data-color-scheme="Golden"
          data-free-trial="True"
          data-mode="Dark"
          data-orientation="Vertical boxes"
          data-plans="2 (yearly selected)"
          style={{
            width: 375,
            paddingTop: 24,
            paddingBottom: 16,
            paddingLeft: 24,
            paddingRight: 24,
            background: "black",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            // gap: 12,
            display: "flex",
          }}
        >
          <div
            data-color-scheme="Golden"
            data-mode="Dark"
            data-selected="Yearly"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // gap: 12,
              display: "flex",
              background: "yellow",
            }}
          >
            {/* box 1 */}
            <Box
              width={327}
              paddingLeft={4}
              paddingRight={4}
              // paddingTop={12}
              // paddingBottom={12}
              background={"black"}
              borderRadius={4}
              outline={"1px rgb(235, 215, 215) solid"}
              // outlineOffset={"-1px"}
              // justifyContent={"flex-start"}
              // alignItems={"flex-end"}
              // gap={42}
              // display={"inline-flex"}
              height={230}
            >
              <Flex paddingTop={2} flexDirection={"column"}>
                {offer?.resources.map((resource, i) => {
                  return (
                    <Flex key={i} alignItems={"center"}>
                      <Text fontSize={26}>{resource.amount}</Text>
                      <Box height={54} paddingBottom={4}>
                        <Image
                          src={`./assets/img/purchase-img/${resource.image}`}
                          boxSize={50} // Sets both width and height to 100px
                          objectFit="cover" // Ensures the image covers the entire box
                          borderRadius={15} // Applies a medium border radius
                        />
                      </Box>
                      <Text fontSize={14}>{resource.description}</Text>
                    </Flex>
                  );
                })}
                {/* <Flex alignItems={"center"}>
                  <Text fontSize={26}>3x</Text>
                  <Box height={54} paddingBottom={4}>
                    <Image
                      src={"./assets/img/purchase-img/icon_clock_LP.png"}
                      boxSize={50} // Sets both width and height to 100px
                      objectFit="cover" // Ensures the image covers the entire box
                      borderRadius={15} // Applies a medium border radius
                    />
                  </Box>
                  <Text fontSize={14}>Decrease time.</Text>
                </Flex>
                <Flex alignItems={"center"}>
                  <Text fontSize={26}>3x</Text>
                  <Box height={54} paddingBottom={4}>
                    <Image
                      src={
                        "./assets/img/purchase-img/icon_dynamite-pack_LP.png"
                      }
                      boxSize={50} // Sets both width and height to 100px
                      objectFit="cover" // Ensures the image covers the entire box
                      borderRadius={15} // Applies a medium border radius
                    />
                  </Box>
                  <Text fontSize={14}>Remove enemies.</Text>
                </Flex>
                <Flex alignItems={"center"}>
                  <Text fontSize={26}>3x</Text>
                  <Box height={54} paddingBottom={4}>
                    <Image
                      src={
                        "./assets/img/purchase-img/icon_lighting-bold_LP.png"
                      }
                      boxSize={50} // Sets both width and height to 100px
                      objectFit="cover" // Ensures the image covers the entire box
                      borderRadius={15} // Applies a medium border radius
                    />
                  </Box>
                  <Text fontSize={14}>Play more games.</Text>
                </Flex>
                <Flex alignItems={"center"}>
                  <Text fontSize={26}>3x</Text>
                  <Box height={54} paddingBottom={4}>
                    <Image
                      src={
                        "./assets/img/purchase-img/icon_magic-earth-heal_LP.png"
                      }
                      boxSize={50} // Sets both width and height to 100px
                      objectFit="cover" // Ensures the image covers the entire box
                      borderRadius={15} // Applies a medium border radius
                    />
                  </Box>
                  <Text fontSize={14}>Heal to stay in the game longer</Text>
                </Flex> */}
              </Flex>
            </Box>
            {/* END BOX */}
          </div>
          <Flex
            marginTop={2}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            // gap={12}
            display={"flex"}
            // background={"green"}
          >
            {/* <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 12,
              display: "flex",
              background: "green",
            }}
          > */}
            <Button
              width={327}
              height={12}
              paddingLeft={36}
              paddingRight={36}
              // paddingTop={4}
              // paddingBottom={2}
              background={"linear-gradient(90deg, #C5A75A 0%, #A06B2C 100%)"}
              borderRadius={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              onClick={(e) => {
                if (!offer) return;
                selectOffer(offer);
              }}
              fontSize={18}
            >
              Buy
            </Button>

            {/* <Button
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              marginTop={2}
              background={"transparent"}
              height={8}
              // onClick={(e) => console.log("no thanks")}
              // textDecoration={"underline"}
              fontSize={12}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              No thanks
            </Button> */}
            <Button
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              marginTop={2}
              background={"transparent"}
              height={8}
              onClick={closeButtonClick}
              // textDecoration={"underline"}
              fontSize={12}
            >
              No thanks
            </Button>
            {/* </div> */}
          </Flex>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default OfferModal;
