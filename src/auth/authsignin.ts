import { post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";
import { SiginBody } from "./signinbody";

export interface SigninResponse {
  body: {
    error: boolean;
    success: boolean;
    data: {
      session_id: string;
      user_id: string;
      isNew: boolean;
    };
  };
  statusCode: number;
}

export async function authSignin(
  signin_body: SiginBody
): Promise<SigninResponse | undefined> {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();
    const restOperation = post({
      apiName: "main",
      path: "/signin",
      options: {
        headers: {
          Authorization: idToken!,
        },
        body: {...signin_body, token: idToken},
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    // console.log("POST call succeeded");
    // console.log(response);
    //@ts-ignore
    return response;
  } catch (e: any) {
    // console.log("POST call failed: ", JSON.parse(e.response.body));
  }
}
