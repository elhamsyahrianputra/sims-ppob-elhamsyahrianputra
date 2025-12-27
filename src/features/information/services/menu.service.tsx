import { apiClient } from "../../../core/libs/axios/api-client";
import type { ApiResponse } from "../../../core/types/api.types";
import type { Menu } from "../types/menu.types";

export const menuService = {
  getAll: async () => {
    const response = await apiClient.get<ApiResponse<Menu[]>>("/services");
    return response.data;
  },
};
