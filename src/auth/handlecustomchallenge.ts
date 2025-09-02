import { confirmSignIn } from "aws-amplify/auth";

type Response = {
  status: boolean;
};

export const completeChallenge = async (code: string) => {
  try {
    const user = await confirmSignIn({
      challengeResponse: code,
      //   options: {
      //     authFlowType: "CUSTOM_WITHOUT_SRP",
      //   },
    });
    // console.log(user);
    const response: Response = {
      status: true,
    };
    return response;
  } catch (error) {
    console.log(error);
    const response: Response = {
      status: false,
    };
    return response;
  }
};
