import { get } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

export interface RewardRequest {
  app_id: string;
}

export interface RewardResponse {
  body: {
    error: boolean;
    success: boolean;
    message: string;
    data: object[] | string;
  };
  statusCode: number;
  isBase64Encoded: string;
}

export const getReward = async (
  request: RewardRequest
): Promise<RewardResponse | undefined> => {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = get({
      apiName: "main",
      path: "/reward",
      options: {
        headers: {
          Authorization: idToken!,
        },
        queryParams: {
          app_id: request.app_id,
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {
    console.error("Error fetching reward:", error);
  }
}; 