import { zodResolver } from "@hookform/resolvers/zod";
import { Banknote } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button } from "../../../core/components/ui/button";
import { Input } from "../../../core/components/ui/form";
import { ConfirmationModal, ResultModal } from "../../../core/components/ui/modal";
import { formatRupiah } from "../../../core/utils/format-rupiah";
import { useTopUpBalance } from "../hooks/use-balance";
import { type TopUpRequest, topUpSchema } from "../schemas/balance.schema";

interface TopUpFormProps {
  onAmountChange?: (amount: number) => void;
}

export function TopUpForm({ onAmountChange }: TopUpFormProps) {
  const navigate = useNavigate();
  const { mutate, isPending } = useTopUpBalance();
  const [displayValue, setDisplayValue] = useState("");
  const [amount, setAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultModal, setResultModal] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    amount?: number;
  }>({
    isOpen: false,
    type: "success",
    amount: 0,
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(topUpSchema),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const numericValue = rawValue ? Number.parseInt(rawValue, 10) : 0;

    setValue("top_up_amount", numericValue, { shouldValidate: true });
    setAmount(numericValue);
    onAmountChange?.(numericValue);

    setDisplayValue(rawValue ? formatRupiah(numericValue) : "");
  };

  const handleQuickAmount = (selectedAmount: number) => {
    setValue("top_up_amount", selectedAmount, { shouldValidate: true });
    setAmount(selectedAmount);
    setDisplayValue(formatRupiah(selectedAmount));
    onAmountChange?.(selectedAmount);
  };

  const handleTopUpClick = handleSubmit(() => {
    setIsModalOpen(true);
  });

  const handleConfirmTopUp = () => {
    const topUpAmount = amount;
    const request: TopUpRequest = { top_up_amount: topUpAmount };
    mutate(request, {
      onSuccess: () => {
        setIsModalOpen(false);
        setResultModal({
          isOpen: true,
          type: "success",
          amount: topUpAmount,
        });
        setAmount(0);
        setDisplayValue("");
        setValue("top_up_amount", 0);
      },
      onError: () => {
        setIsModalOpen(false);
        setResultModal({
          isOpen: true,
          type: "error",
          amount: topUpAmount,
        });
      },
    });
  };

  const handleCloseResultModal = () => {
    setResultModal({ isOpen: false, type: "success", amount: 0 });
    if (resultModal.type === "success") {
      navigate("/");
    }
  };

  const isButtonDisabled = amount === 0 || isPending;

  return (
    <div className="flex gap-x-8">
      <div className="flex-1">
        <form className="flex flex-col gap-y-5" onSubmit={(e) => e.preventDefault()}>
          <Input errorMessage={errors.top_up_amount?.message} icon={Banknote} onChange={handleInputChange} placeholder="masukan nominal Top Up" type="text" value={displayValue} />
          <div>
            <Button disabled={isButtonDisabled} isLoading={isPending} onClick={handleTopUpClick} type="button">
              Top Up
            </Button>
          </div>
        </form>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-x-2 gap-y-5">
          {[10000, 20000, 50000, 100000, 250000, 500000].map((quickAmount) => (
            <li key={quickAmount}>
              <button className="w-full rounded-sm border-2 border-gray-300 px-5 py-3 font-medium text-gray-500 text-sm transition-colors hover:border-primary hover:text-primary" onClick={() => handleQuickAmount(quickAmount)} type="button">
                Rp{new Intl.NumberFormat("id-ID").format(quickAmount)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal actionType="Top Up" amount={amount} isLoading={isPending} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleConfirmTopUp} />

      {/* Result Modal */}
      <ResultModal
        actionText={resultModal.type === "success" ? "Kembali ke Beranda" : "Kembali ke Halaman Top Up"}
        amount={resultModal.amount}
        description={resultModal.type === "success" ? "berhasil!" : "gagal. Silakan coba beberapa saat lagi"}
        isOpen={resultModal.isOpen}
        onClose={handleCloseResultModal}
        title={resultModal.type === "success" ? "Top Up sebesar" : "Top Up sebesar"}
        type={resultModal.type}
      />
    </div>
  );
}
