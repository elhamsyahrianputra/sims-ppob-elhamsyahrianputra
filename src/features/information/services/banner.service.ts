import { apiClient } from "../../../core/libs/axios/api-client";
import type { ApiResponse } from "../../../core/types/api.types";
import type { Banner } from "../types/banner.types";

export const bannerService = {
  getAll: async () => {
    const response = await apiClient.get<ApiResponse<Banner[]>>("/banner");
    return response.data;
  },
};
