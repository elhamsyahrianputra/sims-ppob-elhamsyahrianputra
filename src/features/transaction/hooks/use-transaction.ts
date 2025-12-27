import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import { transactionService } from "../services/transaction.service";
import { setBalance } from "../store/balance-slice";

export function useTransaction() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const currentBalance = useAppSelector((state) => state.balance.balance);

  return useMutation({
    mutationFn: transactionService.create,
    onSuccess: (response) => {
      toast.success(response.message);

      if (response.data?.total_amount) {
        const newBalance = currentBalance - response.data.total_amount;
        dispatch(setBalance(newBalance));
      }

      queryClient.invalidateQueries({ queryKey: ["balance"] });
      queryClient.invalidateQueries({ queryKey: ["transaction-history"] });
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.message || "Transaksi gagal";
      toast.error(errorMessage);
    },
  });
}

export function useValidateBalance() {
  const currentBalance = useAppSelector((state) => state.balance.balance);

  const validateBalance = (amount: number): { isValid: boolean; message?: string } => {
    if (currentBalance === 0) {
      return {
        isValid: false,
        message: "Saldo Anda kosong. Silakan lakukan top up terlebih dahulu.",
      };
    }

    if (amount > currentBalance) {
      return {
        isValid: false,
        message: `Saldo tidak cukup. Saldo Anda: Rp ${currentBalance.toLocaleString("id-ID")}`,
      };
    }

    return { isValid: true };
  };

  return { validateBalance, currentBalance };
}
