import { signIn } from "aws-amplify/auth";

export async function handleSignIn(username: string) {
  try {
    const { nextStep } = await signIn({
      username,
      password: undefined,
      options: {
        authFlowType: "CUSTOM_WITHOUT_SRP",
      },
    });

    console.log(nextStep);
    return { nextStep };
  } catch (error) {
    // console.log("error signing in", error);
  }
}
