import { apiClient } from "../../../core/libs/axios/api-client";
import type { ApiResponse } from "../../../core/types/api.types";
import type { TopUpRequest } from "../schemas/balance.schema";
import type { Balance } from "../types/balance.types";

export const balanceService = {
  get: async () => {
    const response = await apiClient.get<ApiResponse<Balance>>("balance");
    return response.data;
  },

  topUpBalance: async (request: TopUpRequest) => {
    const response = await apiClient.post<ApiResponse<Balance>>("/topup", request);
    return response.data;
  },
};
