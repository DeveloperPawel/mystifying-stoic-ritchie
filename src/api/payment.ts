import { CompletedPurchase } from "@/types/completedPurchase";
import { post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

interface Dict {
  [key: string]: string;
}

export type Payment = {
  id: string;
  app_id: string;
  session: string;
  objoffers: Dict[];

  creditcard: string;
  expiration: string;
  ccv: string;

  taxrate: string;
  firstname: string;
  lastname: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  phone: string;

  tax: string;
  total: string;
  saveProfile?: boolean;

  datadescription?: string;
  datavalue?: string;
  customerid?: string;
  paymentprofile?: string;
  merch?: string;
};

export interface PaymentResponse {
  body: {
    error: boolean;
    success: boolean;
    data: string | CompletedPurchase;
  };
  statusCode: number;
}

export const postPurchase = async (
  request: Payment
): Promise<PaymentResponse | undefined> => {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = post({
      apiName: "main",
      path: "/purchase",
      options: {
        headers: {
          Authorization: idToken!,
        },
        body: request,
      },
    });

    const { body } = await restOperation.response;

    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};
