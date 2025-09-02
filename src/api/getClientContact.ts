import { get } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

export interface ContactResponse {
  email: string;
  time: string;
}

export interface GETGameContactResponse {
  body: {
    success: boolean;
    error: boolean;
    data: string | ContactResponse;
  };
}

export const getClientContact = async (
  idToken: string,
  id:string
): Promise<GETGameContactResponse | undefined> => {
  try {
    // const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = get({
      apiName: "game",
      path: "/profile",
      options: {
        headers: {
            Authorization: idToken,
        },
        queryParams: {
          id: id,
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};
