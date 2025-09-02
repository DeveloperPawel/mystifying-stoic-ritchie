import { get, post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";
import { Address, CreditCard } from "@/context/offerContext";
import { ReturnCC } from "@/types/returncc";

interface ExProfile {
  merchant: string;
  payment_id: string;
  contact_id: string;
  address: Address;
  creditcard: ReturnCC;
}

export interface Profile {
  email: string;
  billing: Address[];
  creditcards: CreditCard[];
  profiles: ExProfile[];
}

export type ProfileRequest = {
  id: string;
};

export interface ProfileReturn {
  body: {
    success: boolean;
    data: Profile;
  };
  statusCode: number;
}

// export const getUserPofile = async (
//   request: ProfileRequest
// ): Promise<ProfileReturn | undefined> => {
//   try {
//     const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

//     const restOperation = post({
//       apiName: "main",
//       path: "/profile",
//       options: {
//         headers: {
//           Authorization: idToken!,
//         },
//         body: request,
//       },
//     });

//     const { body } = await restOperation.response;

//     const response = await body.json();
//     //@ts-ignore
//     return response;
//   } catch (error: any) {}
// };

export const getUserPofile = async (): Promise<ProfileReturn | undefined> => {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = get({
      apiName: "main",
      path: "/profile",
      options: {
        headers: {
          Authorization: idToken!,
        },
      },
    });

    const { body } = await restOperation.response;

    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {}
};