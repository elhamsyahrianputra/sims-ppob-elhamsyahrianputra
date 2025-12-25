import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { balanceService } from "../services/balance.service";

export function useBalance() {
  return useQuery({
    queryKey: ["balance"],
    queryFn: balanceService.get,
  });
}

export function useTopUpBalance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: balanceService.topUpBalance,
    onSuccess: (response) => {
      toast.success(response.message);
      // Invalidate balance query untuk trigger refetch otomatis
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });
}
