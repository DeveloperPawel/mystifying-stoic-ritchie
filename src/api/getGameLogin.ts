import { get } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";
import { GameLoginData } from "@/types/gamelogindata";

export interface GameLoginResponse {
  body: {
    success: boolean;
    error: boolean;
    data: string | GameLoginData;
  };
}

export const getGameLogin = async (
  session: string
): Promise<GameLoginResponse | undefined> => {
  return;
  try {
    // const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = get({
      apiName: "game",
      path: "/login",
      options: {
        headers: {},
        queryParams: {
          session: session,
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};
