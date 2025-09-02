import { post } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";
import axios from "axios";

export interface DownloadResponse {
  body: {
    success: boolean;
    data: any;
  };
}

export async function Download(
  filename: string
): Promise<DownloadResponse | undefined> {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    const restOperation = post({
      apiName: "main",
      path: "/download",
      options: {
        headers: {
          Authorization: idToken!,
        },
        body: { app_id: process.env.NEXT_APP_ID!, filename: filename },
      },
    });

    const { body } = await restOperation.response;
    //@ts-ignore
    const response = await body.json();
    // console.log(response);
    // await body.json().then(async (respons) => {
    //   console.log(respons);
    //   //@ts-ignore
    //   let response_: DownloadResponse = respons;
    //   const imageUrl = await axios.get(response_.body.data);
    //   console.log(imageUrl);
    // });

    try {
      //@ts-ignore
      const imageUrlresponse = await axios.get(response.body.data, {
        responseType: "arraybuffer",
      });
      //@ts-ignore
      return imageUrlresponse.data;
    } catch (error) {}

    //@ts-ignore
    return response;
  } catch (error: any) {}
}
