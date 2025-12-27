import { apiClient } from "../../../core/libs/axios/api-client";
import type { ApiResponse } from "../../../core/types/api.types";
import type { History } from "../types/history.types";

export const historyService = {
  getAll: async (offset = 0, limit = 5) => {
    const response = await apiClient.get<ApiResponse<History>>(`/transaction/history?offset=${offset}&limit=${limit}`);
    return response.data;
  },
};
