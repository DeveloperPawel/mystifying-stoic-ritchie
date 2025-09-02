import { get } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

export interface ActivityRequest {
  app_id: string;
  locs?: string;
  id?: string;
}

export interface Activity {
  id?: string;
  user_id?: string;
  app_id?: string;
  type: string;
  value: string | number;
  timestamp?: string;
}

export interface ActivityByType {
  [type: string]: {
    [filename: string]: Activity;
  };
}

export interface AppDataEntry {
  activity: ActivityByType;
  rewards: {
    [filename: string]: string[];
  };
}

export interface ActivityData {
  app_id: string;
  user_id: string;
  filtered_locations: string | null;
  target_id: string;
  appdata_ids: string[];
  appdata: {
    [appdata_id: string]: AppDataEntry;
  };
  total_objects: number;
}

export interface ActivityResponse {
  body: {
    error: boolean;
    success: boolean;
    data: ActivityData;
    message: string;
  };
  headers: {};
  statusCode: number;
  isBase64Encoded: string;
}

export const getActivity = async (
  request: ActivityRequest
): Promise<ActivityResponse | undefined> => {
  try {
    const idToken = (await fetchAuthSession()).tokens!.idToken!.toString();

    // Build query parameters, only including defined values
    const queryParams: Record<string, string> = {
      app_id: request.app_id,
    };

    if (request.locs !== undefined) {
      queryParams.locs = request.locs;
    }

    if (request.id !== undefined) {
      queryParams.id = request.id;
    }

    const restOperation = get({
      apiName: "main",
      path: "/getactivity",
      options: {
        headers: {
          Authorization: idToken!,
        },
        queryParams,
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    //@ts-ignore
    return response;
  } catch (error: any) {
    console.error("Error fetching activity:", error);
  }
};
