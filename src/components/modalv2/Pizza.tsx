"use client";
import react from "react";
import {
  Flex,
  Box,
  Spacer,
  Image,
  RadioGroup,
  Icon,
  Button,
} from "@chakra-ui/react";

const Pizza = () => {
  return (
    <>
      <div
        style={{
          width: 375,
          height: 500,
          left: 0,
          top: -52,
          position: "absolute",
          boxShadow: "0px 8px 21px #DD4E4E",
          overflow: "hidden",
          borderRadius: 24,
        }}
      >
        <div
          style={{
            width: 375,
            height: 500,
            left: 0,
            top: 51,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 24,
          }}
        />
        <div
          style={{
            left: 21,
            top: 157,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: 14,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 385.74, height: 500.89, position: "relative" }}>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 24,
                paddingBottom: 24,
                left: 0,
                top: 0,
                position: "absolute",
                background: "white",
                boxShadow: "0px 12px 26px rgba(0, 0, 0, 0.05)",
                borderRadius: 18,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 50,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6,
                  display: "inline-flex",
                }}
              >
                <img
                  style={{
                    width: 102,
                    height: 102,
                    transform: "rotate(180deg)",
                    transformOrigin: "top left",
                    boxShadow: "0px 6px 7px rgba(0, 0, 0, 0.10)",
                    borderRadius: 80.19,
                    outline: "2.36px #ECDAD0 solid",
                    outlineOffset: "-1.18px",
                  }}
                  src="https://placehold.co/102x102"
                />
                <div
                  style={{
                    width: 98,
                    paddingLeft: 12.58,
                    paddingRight: 12.58,
                    paddingTop: 7.86,
                    paddingBottom: 7.86,
                    background: "#F8F8F8",
                    borderRadius: 32.23,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 18.87,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontSize: 17.3,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      lineHeight: 17.3,
                      wordWrap: "break-word",
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      lineHeight: 18,
                      wordWrap: "break-word",
                    }}
                  >
                    1
                  </div>
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontSize: 17.3,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      lineHeight: 17.3,
                      wordWrap: "break-word",
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 18,
                    background: "white",
                    borderRadius: 8,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 12,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 6,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#121212",
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        lineHeight: 16,
                        wordWrap: "break-word",
                      }}
                    >
                      Margarita
                    </div>
                    <div
                      style={{
                        width: 175.74,
                        height: 28.24,
                        opacity: 0.8,
                        color: "#121212",
                        fontSize: 12,
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        lineHeight: 15.6,
                        wordWrap: "break-word",
                      }}
                    >
                      Large | Cheese , onion, and <br />
                      tomato pure
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#483649",
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      lineHeight: 18,
                      wordWrap: "break-word",
                    }}
                  >
                    $57
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 19,
                      height: 19,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: 14.25,
                        height: 14.25,
                        left: 2.38,
                        top: 2.38,
                        position: "absolute",
                        outline: "1.71px #535353 solid",
                        outlineOffset: "-0.85px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      opacity: 0.8,
                      color: "#535353",
                      fontSize: 11,
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: 14.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Add Extra Topping{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 24,
                paddingBottom: 24,
                left: 0,
                top: 420,
                position: "absolute",
                background: "white",
                boxShadow: "0px 12px 26px rgba(0, 0, 0, 0.05)",
                borderRadius: 18,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 50,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6,
                  display: "inline-flex",
                }}
              >
                <img
                  style={{
                    width: 102,
                    height: 102,
                    transform: "rotate(180deg)",
                    transformOrigin: "top left",
                    boxShadow:
                      "0px 4.906040191650391px 5.723713397979736px rgba(0, 0, 0, 0.10)",
                    borderRadius: 53.25,
                    border: "0.64px #ECDAD0 solid",
                  }}
                  src="https://placehold.co/102x102"
                />
                <div
                  style={{
                    width: 98,
                    paddingLeft: 12.58,
                    paddingRight: 12.58,
                    paddingTop: 7.86,
                    paddingBottom: 7.86,
                    background: "#F8F8F8",
                    borderRadius: 32.23,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 18.87,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontSize: 17.3,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      lineHeight: 17.3,
                      wordWrap: "break-word",
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      lineHeight: 18,
                      wordWrap: "break-word",
                    }}
                  >
                    1
                  </div>
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontSize: 17.3,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      lineHeight: 17.3,
                      wordWrap: "break-word",
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 18,
                    background: "white",
                    borderRadius: 8,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 12,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 6,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#121212",
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        lineHeight: 16,
                        wordWrap: "break-word",
                      }}
                    >
                      Neapolitan
                    </div>
                    <div
                      style={{
                        width: 175.74,
                        height: 28.24,
                        opacity: 0.8,
                        color: "#121212",
                        fontSize: 12,
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        lineHeight: 15.6,
                        wordWrap: "break-word",
                      }}
                    >
                      Large | Anchovies, Fresh tomatos, Basil & green herbs
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#483649",
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      lineHeight: 18,
                      wordWrap: "break-word",
                    }}
                  >
                    $57
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 19,
                      height: 19,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: 14.25,
                        height: 14.25,
                        left: 2.38,
                        top: 2.38,
                        position: "absolute",
                        outline: "1.71px #535353 solid",
                        outlineOffset: "-0.85px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      opacity: 0.8,
                      color: "#535353",
                      fontSize: 11,
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: 14.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Add Extra Topping{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 24,
                paddingBottom: 24,
                left: 0,
                top: 630,
                position: "absolute",
                background: "white",
                boxShadow: "0px 12px 26px rgba(0, 0, 0, 0.05)",
                borderRadius: 18,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 50,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6,
                  display: "inline-flex",
                }}
              >
                <img
                  style={{
                    width: 102,
                    height: 102,
                    transform: "rotate(180deg)",
                    transformOrigin: "top left",
                    boxShadow:
                      "0px 4.906040191650391px 5.723713397979736px rgba(0, 0, 0, 0.10)",
                    borderRadius: 53.25,
                    border: "0.64px #ECDAD0 solid",
                  }}
                  src="https://placehold.co/102x102"
                />
                <div
                  style={{
                    width: 98,
                    paddingLeft: 12.58,
                    paddingRight: 12.58,
                    paddingTop: 7.86,
                    paddingBottom: 7.86,
                    background: "#F8F8F8",
                    borderRadius: 32.23,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 18.87,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontSize: 17.3,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      lineHeight: 17.3,
                      wordWrap: "break-word",
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      lineHeight: 18,
                      wordWrap: "break-word",
                    }}
                  >
                    1
                  </div>
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontSize: 17.3,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      lineHeight: 17.3,
                      wordWrap: "break-word",
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 18,
                    background: "white",
                    borderRadius: 8,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 12,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 6,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#121212",
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        lineHeight: 16,
                        wordWrap: "break-word",
                      }}
                    >
                      Farmhouse
                    </div>
                    <div
                      style={{
                        width: 175.74,
                        height: 28.24,
                        opacity: 0.8,
                        color: "#121212",
                        fontSize: 12,
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        lineHeight: 15.6,
                        wordWrap: "break-word",
                      }}
                    >
                      Medium | , Fresh vegetables,, Basil & green herbs
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#4A384A",
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      lineHeight: 18,
                      wordWrap: "break-word",
                    }}
                  >
                    $57
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 19,
                      height: 19,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: 14.25,
                        height: 14.25,
                        left: 2.38,
                        top: 2.38,
                        position: "absolute",
                        outline: "1.71px #535353 solid",
                        outlineOffset: "-0.85px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      opacity: 0.8,
                      color: "#535353",
                      fontSize: 11,
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: 14.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Add Extra Topping{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          left: 21,
          top: 52,
          position: "absolute",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 146,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 6,
              height: 12,
              left: 9,
              top: 6,
              position: "absolute",
              outline: "2px #434343 solid",
              outlineOffset: "-1px",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#434343",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "600",
            letterSpacing: 0.4,
            wordWrap: "break-word",
          }}
        >
          Cart
        </div>
        <div
          style={{
            width: 24,
            height: 24,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 2,
              height: 2,
              left: 8,
              top: 20,
              position: "absolute",
              outline: "2px rgba(255, 255, 255, 0) solid",
              outlineOffset: "-1px",
            }}
          />
          <div
            style={{
              width: 2,
              height: 2,
              left: 19,
              top: 20,
              position: "absolute",
              outline: "2px rgba(255, 255, 255, 0) solid",
              outlineOffset: "-1px",
            }}
          />
          <div
            style={{
              width: 22,
              height: 15,
              left: 1,
              top: 1,
              position: "absolute",
              outline: "2px rgba(255, 255, 255, 0) solid",
              outlineOffset: "-1px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Pizza;
