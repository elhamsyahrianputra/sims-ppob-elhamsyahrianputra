import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { formatRupiah } from "../../../core/utils/format-rupiah";
import { useBalance } from "../hooks/use-balance";

export function BalanceCard() {
  const { data: balance, isLoading } = useBalance();
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="flex flex-1 flex-col rounded-lg bg-[url(/assets/bg/Background-Saldo.png)] bg-cover bg-right bg-no-repeat md:rounded-xl">
      <div className="flex h-full flex-col justify-between p-5 text-white md:p-6">
        <span className="text-sm md:text-base">Saldo anda</span>
        <div className="flex gap-x-1.5 font-bold text-semibold">
          <span className="text-2xl md:text-3xl">Rp</span>
          <span className="text-3xl leading-7 tracking-wider md:text-4xl">
            {showBalance
              ? formatRupiah(balance?.data?.balance || 0)
              : "•••••••"}
          </span>
        </div>
        <button
          className="inline-flex w-fit cursor-pointer bg-transparent py-1 pr-7 text-xs transition-colors hover:opacity-80"
          onClick={() => setShowBalance(!showBalance)}
          type="button"
        >
          <div className="flex items-center gap-2">
            <span>{showBalance ? "Tutup Saldo" : "Lihat Saldo"}</span>
            {showBalance ? <EyeOff size={12} /> : <Eye size={12} />}
          </div>
        </button>
      </div>
    </div>
  );
}
