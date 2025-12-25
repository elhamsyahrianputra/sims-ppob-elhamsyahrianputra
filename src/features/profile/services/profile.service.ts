import { apiClient } from "../../../core/libs/axios/api-client";
import type { ApiResponse } from "../../../core/types/api.types";
import type { Profile, UpdateImageRequest } from "../types/profile.types";

export const profileService = {
  get: async () => {
    const response = await apiClient.get<ApiResponse<Profile>>("/profile");
    return response.data;
  },

  update: async () => {
    const response =
      await apiClient.put<ApiResponse<Profile>>("/profile/update");
    return response.data;
  },

  updateImage: async (request: UpdateImageRequest) => {
    const response = await apiClient.put<ApiResponse<Profile>>(
      "/profile/image",
      request,
    );
    return response.data;
  },
};
