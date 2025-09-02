"use client";
import React, { useRef } from "react";
import OfferModal from "../modalv2/OfferModal";
import CartOrder from "../modalv2/Checkout";
import { Box } from "@chakra-ui/react";
import OrderComplete from "../modalv2/OrderComplete";
import Checkout from "../modalv2/Checkout";
import Pizza from "../modalv2/Pizza";
import PurchaseSubPage from "../modalv2/PurchaseSubPage";
import PaymentInput from "../modalv2/PaymentInput";

const ModalArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="page-content-wrapper py-3">
        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading">
            <h6>Bootstrap Basic Modal</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Bootstrap Basic Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#bootstrapBasicModal"
              >
                Bootstrap Basic Modal
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading mt-3">
            <h6>Fullscreen Modal</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Fullscreen Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#fullscreenModal"
              >
                Offer Modal
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="element-heading mt-3">
            <h6>Completed Modal</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Fullscreen Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#completedModal"
              >
                Completed Modal
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="element-heading mt-3">
            <h6>Checkout Modal</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Fullscreen Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#checkoutModal"
              >
                Checkout Modal
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="element-heading mt-3">
            <h6>Pizza Modal</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Fullscreen Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#pizzaModal"
              >
                Pizza Modal
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="element-heading mt-3">
            <h6>subpage Modal</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Fullscreen Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#subpageModal"
              >
                Subpage Modal
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading mt-3">
            <h6>Static Backdrop</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Static Backdrop Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Static Backdrop Modal
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading mt-3">
            <h6>Bottom Align Modal</h6>
          </div>
        </div>

        <div className="container">
          <div className="card direction-rtl">
            <div className="card-body">
              {/* <!-- Bottom Align Modal Trigger Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#bottomAlignModal"
              >
                Bottom Align Modal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <div
        className="modal fade"
        id="bootstrapBasicModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Bootstrap Basic Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">This is a Bootstrap basic modal.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={(e) => console.log(e)}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Box
        className="modal fade"
        id="fullscreenModal"
        data-bs-backdrop="static"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        overflow={"hidden"}
        // onClick={(e) => e.preventDefault()}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <OfferModal offer_id={"09cd1250-a188-4c78-977a-705ed12ae90d"} />
          </div>
        </div>
      </Box>

      <Box
        className="modal fade"
        id="completedModal"
        data-bs-backdrop="static"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        overflow={"hidden"}
        // onClick={(e) => e.preventDefault()}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <OrderComplete func={() => {}} />
          </div>
        </div>
      </Box>

      <Box
        className="modal fade"
        id="checkoutModal"
        data-bs-backdrop="static"
        tabIndex={0}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        overflow={"hidden"}
        // onClick={(e) => e.preventDefault()}
      >
        <div className="modal-dialog modal-fullscreen">
          <div
            style={{
              background: "blue",
            }}
            className="modal-content"
          >
            <PaymentInput />
            <Checkout />
            <PurchaseSubPage />
          </div>
        </div>
      </Box>

      <Box
        className="modal fade"
        id="paymentInputFake"
        data-bs-backdrop="static"
        tabIndex={-1}
        aria-labelledby="paymentInputFakeLabel"
        aria-hidden="true"
        overflow={"hidden"}
        // onClick={(e) => e.preventDefault()}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <PaymentInput />
          </div>
        </div>
      </Box>

      <Box
        className="modal fade"
        id="pizzaModal"
        data-bs-backdrop="static"
        tabIndex={0}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // overflow={"hidden"}
        // onClick={(e) => e.preventDefault()}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <Pizza />
          </div>
        </div>
      </Box>

      <Box
        className="modal fade"
        id="subpageModal"
        data-bs-backdrop="static"
        tabIndex={0}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // overflow={"hidden"}
        // onClick={(e) => e.preventDefault()}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <PurchaseSubPage />
          </div>
        </div>
      </Box>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Static Backdrop Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              This is a static backdrop modal. Click outside will not close this
              modal.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="bottomAlignModal"
        tabIndex={1}
        aria-labelledby="bottomAlignModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-bottom">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bottomAlignModalLabel">
                Bottom Align Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">This is a bottom align modal.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalArea;
