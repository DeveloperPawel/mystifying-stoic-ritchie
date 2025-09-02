import { signUp } from "aws-amplify/auth";

type SignUpParameters = {
  username: string;
  fullName: string;
};

const intToHex = (nr: number) => {
  return nr.toString(16).padStart(2, "0");
};

export const getRandomString = (bytes: number) => {
  const randomValues = new Uint8Array(bytes);
  window.crypto.getRandomValues(randomValues);
  return Array.from(randomValues).map(intToHex).join("");
};

export async function handleSignUp({
  username,
  fullName = getRandomString(7),
}: SignUpParameters) {
  try {
    // { isSignUpComplete, userId, nextStep }
    const user = await signUp({
      username,
      password: getRandomString(30),
      options: {
        userAttributes: {
          name: fullName, // E.164 number convention
        },
        // optional
        // autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });
    console.log(user);
    return user;
  } catch (error) {
    // console.log("error signing up:", error);
  }
}
