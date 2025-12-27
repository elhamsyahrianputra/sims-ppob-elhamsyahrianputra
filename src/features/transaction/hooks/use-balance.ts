import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import { balanceService } from "../services/balance.service";
import { setBalance, setLoading } from "../store/balance-slice";

export function useBalance() {
  const dispatch = useAppDispatch();
  const balanceFromRedux = useAppSelector((state) => state.balance.balance);

  const query = useQuery({
    queryKey: ["balance"],
    queryFn: balanceService.get,
  });

  useEffect(() => {
    if (query.data?.data?.balance !== undefined) {
      dispatch(setBalance(query.data.data.balance));
    }
  }, [query.data, dispatch]);

  useEffect(() => {
    dispatch(setLoading(query.isLoading));
  }, [query.isLoading, dispatch]);

  return {
    ...query,
    balance: balanceFromRedux,
  };
}

export function useTopUpBalance() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: balanceService.topUpBalance,
    onSuccess: (response) => {
      toast.success(response.message);

      if (response.data?.balance !== undefined) {
        dispatch(setBalance(response.data.balance));
      }

      queryClient.invalidateQueries({ queryKey: ["balance"] });
      queryClient.invalidateQueries({ queryKey: ["transaction-history"] });
    },
    onError: () => {
      toast.error("Gagal melakukan top up");
    },
  });
}
