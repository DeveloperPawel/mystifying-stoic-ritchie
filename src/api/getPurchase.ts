import { get } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

export interface PurchaseResponse {
  body: {
    success: boolean;
    error: boolean;
    data: any;
  };
}

export const getPurchase = async (
  transaction: string
): Promise<PurchaseResponse | undefined> => {
  try {
    // const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = get({
      apiName: "game",
      path: "/purchase",
      options: {
        headers: {},
        queryParams: {
          id: transaction,
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};
