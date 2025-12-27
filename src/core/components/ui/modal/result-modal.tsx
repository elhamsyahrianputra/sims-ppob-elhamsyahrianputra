import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect } from "react";

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title: string;
  amount?: number;
  description?: string;
  actionText?: string;
}

export function ResultModal({ isOpen, onClose, type, title, amount, description, actionText = "Kembali ke Beranda" }: ResultModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <button className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && onClose()} type="button">
      <div className="relative w-full max-w-sm rounded-lg bg-white p-8 text-center shadow-xl">
        <div className="mb-6 flex justify-center">
          {type === "success" ? (
            <div className="rounded-full bg-emerald-500 p-4">
              <CheckCircle2 className="size-12 text-white" strokeWidth={2.5} />
            </div>
          ) : (
            <div className="rounded-full bg-red-500 p-4">
              <XCircle className="size-12 text-white" strokeWidth={2.5} />
            </div>
          )}
        </div>

        <div className="mb-6 space-y-2">
          <p className="text-gray-600">{title}</p>
          {amount !== undefined && <p className="font-bold text-2xl">Rp{amount.toLocaleString("id-ID")}</p>}
          <p className="text-gray-500 text-sm">{description || (type === "success" ? "berhasil!" : "gagal")}</p>
        </div>

        <button className="w-full rounded-md px-4 py-2 font-medium text-red-500 transition-colors hover:bg-red-50" onClick={onClose} type="button">
          {actionText}
        </button>
      </div>
    </button>
  );
}
