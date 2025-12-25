import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "../../../core/types/api.types";
import { bannerService } from "../services/banner.service";
import type { Banner } from "../types/banner.types";

export function useBanners() {
  return useQuery<ApiResponse<Banner[]>>({
    queryKey: ["banners"],
    queryFn: bannerService.getAll,
  });
}
