import { post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

export interface POSTGameContactResponse {
  body: {
    success: boolean;
    error: boolean;
    data: string | null;
  };
}

export const postClientContact = async (
  idToken: string,
  email: string,
  id: string,
  type: "EMAIL" | "RESEND" | "DELETE" = "EMAIL"
): Promise<POSTGameContactResponse | undefined> => {
  try {
    // const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = post({
      apiName: "game",
      path: "/profile",
      options: {
        headers: {
            Authorization: idToken,
        },
        body: {
            email: email,
            id: id,
            type: type
        }
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};
