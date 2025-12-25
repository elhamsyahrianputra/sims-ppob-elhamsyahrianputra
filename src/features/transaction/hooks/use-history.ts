import { useQuery } from "@tanstack/react-query";
import { historyService } from "../services/history.service";

export function useHistories(offset = 0, limit = 5) {
  return useQuery({
    queryKey: ["histories", offset, limit],
    queryFn: () => historyService.getAll(offset, limit),
  });
}
