import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "../../../core/types/api.types";
import { menuService } from "../services/menu.service";
import type { Menu } from "../types/menu.types";

export function useMenus() {
  return useQuery<ApiResponse<Menu[]>>({
    queryKey: ["menu"],
    queryFn: menuService.getAll,
  });
}
