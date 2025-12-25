import { apiClient } from "../../../core/libs/axios/api-client";
import type { ApiResponse } from "../../../core/types/api.types";
import type { LoginRequest, RegisterRequest } from "../schemas/auth-schema";
import type { LoginResponse } from "../types/auth.types";

export const authService = {
  login: async (request: LoginRequest) => {
    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      "/login",
      request,
    );
    return response.data;
  },

  register: async (request: RegisterRequest) => {
    const response = await apiClient.post<ApiResponse<null>>(
      "/registration",
      request,
    );
    return response.data;
  },
};
