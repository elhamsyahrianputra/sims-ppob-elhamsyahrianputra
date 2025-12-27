interface QuickAmountButtonProps {
  amount: number;
  onClick: (amount: number) => void;
}

export function QuickAmountButton({ amount, onClick }: QuickAmountButtonProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat("id-ID").format(value);
  };

  return (
    <button className="w-full rounded-sm border-2 border-gray-300 px-5 py-3 font-medium text-gray-500 text-sm transition-colors hover:border-primary hover:text-primary" onClick={() => onClick(amount)} type="button">
      Rp{formatAmount(amount)}
    </button>
  );
}
