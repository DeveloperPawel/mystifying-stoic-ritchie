import { Offer } from "@/types/offer";
import { get } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

export interface GetOfferResponse {
  body: {
    success: boolean;
    data: Offer[];
  };
}

export const getAppOffers = async (
  app_id: string
): Promise<GetOfferResponse | undefined> => {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = get({
      apiName: "main",
      path: "/offers",
      options: {
        headers: {
          Authorization: idToken!,
        },
        queryParams: {
          id: app_id,
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};
