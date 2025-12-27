import { apiClient } from "../../../core/libs/axios/api-client";
import type { ApiResponse } from "../../../core/types/api.types";
import type { Transaction, TransactionRequest } from "../types/transaction.types";

export const transactionService = {
  create: async (request: TransactionRequest) => {
    const response = await apiClient.post<ApiResponse<Transaction>>("/transaction", request);
    return response.data;
  },
};
