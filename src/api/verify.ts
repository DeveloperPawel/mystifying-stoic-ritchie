import { post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

export type OTPRequest = {
  app_id: string;
};

export interface OTPResponse {
  body: {
    error: boolean;
    success: boolean;
    data: string;
  };
  statusCode: number;
}

export const otpsend = async (
  request: OTPRequest
): Promise<OTPResponse | undefined> => {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = post({
      apiName: "main",
      path: "/otp",
      options: {
        headers: {
          Authorization: idToken!,
        },
        body: {...request, token: idToken},
      },
    });

    const { body } = await restOperation.response;

    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};

export type VerifyRequest = {
  app_id: string;
  session_id: string;
  code: string;
};

export interface OTPVerifyReturn {
  body: {
    error: boolean;
    success: boolean;
    status: string;
  };
}

export const otpverify = async (
  request: VerifyRequest
): Promise<OTPVerifyReturn | undefined> => {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = post({
      apiName: "main",
      path: "/otp-verify",
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
