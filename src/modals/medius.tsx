import React, { FC } from 'react';
import { HUDState } from '@/types/hudstate';
import { Box } from '@chakra-ui/react';
import OfferModal from '@/components/modalv2/OfferModal';
import OrderComplete from '@/components/modalv2/OrderComplete';
import PaymentInput from '@/components/modalv2/PaymentInput';
import Checkout from '@/components/checkout';
import PurchaseSubPage from '@/components/modalv2/PurchaseSubPage';
import { LoginMainModal } from '@/components/modalv2/LoginMainModal';

const SELECTED_OFFER=process.env.NEXT_PUBLIC_SELECTED_OFFER

interface MediusProps {
    type: Symbol
}
 
export const Medius: FC<MediusProps> = ({ type }) => {
    if (type == HUDState.LOGINMAIN) {
        return <>
            <Box
                className="modal fade"
                id="loginMainModal"
                data-bs-backdrop="static"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                overflow={"hidden"}
                // onClick={(e) => e.preventDefault()}
            >
                <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <LoginMainModal />
                </div>
                </div>
            </Box>
        </>
    }

    if (type == HUDState.OFFER) {
        return <>
            <Box
                className="modal fade"
                id="offerModal"
                data-bs-backdrop="static"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                overflow={"hidden"}
                // onClick={(e) => e.preventDefault()}
            >
                <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <OfferModal offer_id={SELECTED_OFFER!} />
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
        </>
    }
    return <></>
}