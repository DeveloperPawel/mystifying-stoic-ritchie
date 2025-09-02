"use client";
import react, { useState, useContext, useEffect } from "react";
import {
  Flex,
  Box,
  Spacer,
  Image,
  RadioGroup,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FormikHelpers, useFormik, Form, Field } from "formik";
import OfferContext from "@/context/offerContext";
import { SearchBox } from "@mapbox/search-js-react";
import Address from "./Address";
import FormGroup from "../components/bootstrap/forms/FormGroup";
import Input from "../components/bootstrap/forms/Input";
import { AddressFill } from "./AddressFill";
import * as cardValidator from "card-validator";

const positions = {
  topLabel: "4%",
  name: "8%",
  number: "19%",
  valid: "30%",
  addressLabel: "41%",
  address: "45%",
  city: "55%",
  state: "55%",
  zip: "66%",
  phone: "77%",
};

const PaymentInput = () => {
  const { setcreditCard, setBilling, billing, creditcard, mapToken } =
    useContext(OfferContext);
  const [creditCard, setCreditCard] = useState({
    number: "",
    formated: "",
  });

  const closeModal = () => {
    document
      .getElementById("paymentInput")
      ?.style.setProperty("bottom", "100%");
  };

  const onClose = () => {
    closeModal();
  };
  const formatCC = () => {};
  const validateCardNumber = (number: any): boolean => {
    return true;
    // Use Luhn algorithm or similar to validate card number
  };
  const formatCardNumber = (number: any) => {
    // Format number for display, e.g., "1234 5678 9012 3456"
    const numberWithoutSpaces = number.replace(/\s+/g, "");
    return numberWithoutSpaces.replace(/(\d{4})/g, "$1 ").trim();
  };

  const formik = useFormik({
    initialValues: {
      creditcard: "",
      month: "",
      year: "",
      ccv: "",

      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phonenumber: "",
      saveProfile: false,
    },
    validate: (values) => {
      const errors: {
        creditcard?: string;
        month?: string;
        year?: string;
        ccv?: string;

        name?: string;
        address?: string;
        city?: string;
        state?: string;
        zip?: string;
        phonenumber?: string;
        saveProfile?: string;
      } = {};

      if (values.creditcard.length > 15) {
        const validator = cardValidator.number(values.creditcard);

        if (!validator.isValid) {
          errors.creditcard = "Card is not valid";
        }
      }

      if (values.month.length > 0 && values.year.length > 0) {
        if (values.month.length == 1) {
          errors.month = "format should be XX";
        }
        if (values.year.length == 2 || values.year.length == 1) {
          errors.year = "format should be 20XX";
        }

        const expiration = cardValidator.expirationDate(
          { month: values.month, year: values.year },
          6
        );
        if (!expiration.isValid) {
          errors.year = "not valid";
        }
      }

      if (values.ccv.length > 2) {
        const ccv = cardValidator.cvv(values.ccv);
        if (!ccv.isValid) {
          errors.ccv = "not valid";
        }
      }
      return errors;
    },
    validateOnChange: false,
    onSubmit: (values) => {
      const firstname = values.name.split(" ")[0];
      const lastname = values.name.split(" ").at(-1);
      setcreditCard({
        number: values.creditcard,
        formated: creditCard.formated,
        expiration: `${values.month}-${values.year}`,
        ccv: values.ccv,
      });

      setBilling({
        firstname: firstname,
        lastname: lastname,
        address1: values.address,
        address2: "",
        state: values.state,
        city: values.city,
        zip: values.zip,
        phonenumber: values.phonenumber,
        saveProfile: values.saveProfile,
      });
    },
  });

  const checkBox = () => {
    const currentVal: boolean = formik.values.saveProfile;

    formik.setFieldValue("saveProfile", !currentVal);
  };

  useEffect(() => {
    if (!billing && !creditcard) return;
    onClose();
  }, [billing, creditcard]);

  // Modify handleInputChange to include formatting
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    let formattedValue = value;

    const newCC = {
      number: value,
      formated: formatCardNumber(value),
    };

    formik.setFieldValue("creditcard", value);

    setCreditCard(newCC);

    if (name === "number") {
      if (!validateCardNumber(value)) {
        // Handle invalid card number case
      }
      formattedValue = formatCardNumber(value);
    }
  };

  return (
    <>
      <Flex
        zIndex={1000}
        height={"100%"}
        width={"100%"}
        position={"absolute"}
        bottom={"100%"}
        background={"#FAFAFA"}
        transition={"bottom 0.5s ease-out"}
        id="paymentInput"
      >
        {/* close button block */}
        <div
          style={{
            padding: 4,
            left: 334,
            top: 10,
            position: "absolute",
            background: 'grey',
            borderRadius: 100,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="modal"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <Flex flexDirection={"column"}>
          <Flex flexDirection={"column"}>
            <div
              style={{
                height: "60px",
              }}
            />
            <div
              style={{
                // left: 24,
                top: "4%",
                justifyContent: "flex-start",
                alignItems: "center",
                // gap: 4,
                display: "inline-flex",
                paddingLeft: 24,
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 16,
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Add New Card
              </div>
            </div>

            <div
              style={{
                paddingLeft: 24,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              {/* <div
                style={{
                  width: 140,
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Card Holder’s Name
              </div> */}
              <FormGroup id="name" label="name" isFloating>
                <Input
                  style={{
                    width: 327,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                    background: "white",
                    borderRadius: 12,
                    outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                    outlineOffset: "-1px",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                  type="text"
                  placeholder="Name on card"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={formik.isValid}
                  isTouched={formik.touched.name}
                  invalidFeedback={formik.errors.name}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>

            <div
              style={{
                paddingLeft: 24,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              {/* <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Card Number
              </div> */}
              <FormGroup id="creditcard" label="Credit Card Number" isFloating>
                <Input
                  style={{
                    width: "90%",
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                    background: "white",
                    borderRadius: 12,
                    outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                    outlineOffset: "-1px",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                  type="text"
                  placeholder="Credit Card Number"
                  onChange={handleInputChange}
                  value={creditCard.formated}
                  onBlur={formik.handleBlur}
                  isValid={formik.isValid}
                  isTouched={formik.touched.creditcard}
                  invalidFeedback={formik.errors.creditcard}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>
          </Flex>

          <div
            style={{
              paddingLeft: 24,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              {/* <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Valid Thru
              </div> */}
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <FormGroup id="month" label="Month" isFloating>
                  <Input
                    style={{
                      width: "60%",
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 10,
                      paddingBottom: 10,
                      background: "white",
                      borderRadius: 12,
                      outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                      outlineOffset: "-1px",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                      display: "flex",
                    }}
                    placeholder="Month"
                    type="text"
                    value={formik.values.month}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.isValid}
                    isTouched={formik.touched.month}
                    invalidFeedback={formik.errors.month}
                    validFeedback="Looks good"
                  />
                </FormGroup>

                <FormGroup id="year" label="Year" isFloating>
                  <Input
                    style={{
                      width: "60%",
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 10,
                      paddingBottom: 10,
                      background: "white",
                      borderRadius: 12,
                      outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                      outlineOffset: "-1px",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                      display: "flex",
                    }}
                    placeholder="Year"
                    type="text"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.isValid}
                    isTouched={formik.touched.year}
                    invalidFeedback={formik.errors.year}
                    validFeedback="Looks good"
                  />
                </FormGroup>
              </div>
            </div>

            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              {/* <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                CVV
              </div> */}
              <FormGroup id="ccv" label="CCV" isFloating>
                <Input
                  style={{
                    width: 102,
                    flex: "1 1 0",
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                    background: "white",
                    borderRadius: 12,
                    outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                    outlineOffset: "-1px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                  placeholder="CVV Code"
                  type="text"
                  value={formik.values.ccv}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={formik.isValid}
                  isTouched={formik.touched.ccv}
                  invalidFeedback={formik.errors.ccv}
                  validFeedback="Looks good"
                />
              </FormGroup>
            </div>
          </div>

          {/* <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              // gap: 4,
              display: "inline-flex",
              paddingLeft: 24,
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Billing Address
            </div>
          </div> */}

          <div
            style={{
              paddingLeft: 24,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // gap: 8,
              display: "inline-flex",
              width: "90%",
            }}
          >
            {/* <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 14,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Address
            </div> */}

            <FormGroup id="address" label="Address" isFloating>
              <Input
                style={{
                  width: "100%",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 10,
                  paddingBottom: 10,
                  background: "white",
                  borderRadius: 12,
                  outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                  outlineOffset: "-1px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                }}
                autoComplete="address"
                placeholder="Address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.isValid}
                isTouched={formik.touched.address}
                invalidFeedback={formik.errors.address}
                validFeedback="Looks good!"
              />
            </FormGroup>
          </div>

          <div
            style={{
              paddingLeft: 24,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
              width: "100%",
            }}
          >
            {/* <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 14,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Zip Code
            </div> */}
            <FormGroup id="zip" label="ZipCode" isFloating>
              <Input
                style={{
                  width: "90%",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 10,
                  paddingBottom: 10,
                  background: "white",
                  borderRadius: 12,
                  outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                  outlineOffset: "-1px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                }}
                placeholder="Zip Code"
                type="text"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.isValid}
                isTouched={formik.touched.zip}
                invalidFeedback={formik.errors.zip}
                validFeedback="Looks good"
              />
            </FormGroup>
          </div>

          <div
            style={{
              paddingLeft: 24,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                left: "50%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
                width: "40%",
              }}
            >
              {/* <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                State
              </div> */}
              <FormGroup id="state" label="State" isFloating>
                <Input
                  style={{
                    width: "100%",
                    flex: "1 1 0",
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                    background: "white",
                    borderRadius: 12,
                    outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                    outlineOffset: "-1px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                  placeholder="State"
                  type="text"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={formik.isValid}
                  isTouched={formik.touched.state}
                  invalidFeedback={formik.errors.state}
                  validFeedback="Looks good"
                />
              </FormGroup>
            </div>
            <div
              style={{
                left: "6%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
                width: "40%",
              }}
            >
              {/* <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                City
              </div> */}
              <FormGroup id="city" label="City" isFloating>
                <Input
                  style={{
                    width: "100%",
                    flex: "1 1 0",
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                    background: "white",
                    borderRadius: 12,
                    outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                    outlineOffset: "-1px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                  placeholder="City"
                  type="text"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={formik.isValid}
                  isTouched={formik.touched.city}
                  invalidFeedback={formik.errors.city}
                  validFeedback="Looks good"
                />
              </FormGroup>
            </div>
          </div>

          <div
            style={{
              paddingLeft: 24,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // gap: 8,
              display: "inline-flex",
              width: "90%",
            }}
          >
            {/* <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 14,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Phone Number
            </div> */}
            <FormGroup id="phonenumber" label="PhoneNumber" isFloating>
              <Input
                style={{
                  width: "100%",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 10,
                  paddingBottom: 10,
                  background: "white",
                  borderRadius: 12,
                  outline: "1px rgba(9.56, 9.56, 9.56, 0.12) solid",
                  outlineOffset: "-1px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                }}
                placeholder="Enter phone number"
                type="text"
                value={formik.values.phonenumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.isValid}
                isTouched={formik.touched.phonenumber}
                invalidFeedback={formik.errors.phonenumber}
                validFeedback="Looks good"
              />
            </FormGroup>
          </div>

          <div
            style={{
              paddingLeft: 24,
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input form-check-dark"
                id="darkCheckbox"
                type="checkbox"
                value=""
                defaultChecked
                checked={formik.values.saveProfile}
                onChange={checkBox}
              />
              <label className="form-check-label" htmlFor="darkCheckbox">
                <div
                style={{
                  // textAlign: "center",
                  color: "black",
                  fontSize: 16,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Save Payment Info
              </div>
              </label>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: 84,
              left: 0,
              bottom: 0,
              overflow: "hidden",
            }}
          >
            <Button
              data-property-1="Default"
              //@ts-ignore
              onClick={formik.handleSubmit}
              style={{
                width: "90%",
                paddingLeft: 38,
                paddingRight: 38,
                paddingTop: 14,
                paddingBottom: 14,
                left: "5%",
                top: 18,
                background: "#027FEE",
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Save card and Proceed
              </div>
            </Button>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default PaymentInput;
