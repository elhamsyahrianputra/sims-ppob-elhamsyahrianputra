import { useEffect } from "react";
import LogoImage from "/assets/logo/Logo.png";

interface ConfirmationModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	actionType: string;
	amount: number;
	confirmText?: string;
	cancelText?: string;
	isLoading?: boolean;
}

export function ConfirmationModal({
	isOpen,
	onClose,
	onConfirm,
	actionType,
	amount,
	confirmText = "Ya, lanjutkan",
	cancelText = "Batalkan",
	isLoading = false,
}: ConfirmationModalProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && !isLoading) onClose();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, isLoading, onClose]);

	if (!isOpen) return null;

	return (
		<button
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
			onClick={(e) => e.target === e.currentTarget && !isLoading && onClose()}
			type="button"
		>
			<div className="relative w-full max-w-sm rounded-lg bg-white p-8 text-center shadow-xl">
				<div className="mb-6 flex justify-center">
					<img alt="Logo" className="size-16 object-contain" src={LogoImage} />
				</div>

				<div className="mb-6 space-y-2">
					<p className="text-gray-600">Anda yakin untuk {actionType} sebesar</p>
					<p className="font-bold text-2xl">
						Rp{amount.toLocaleString("id-ID")} ?
					</p>
				</div>

				<div className="space-y-3">
					<button
						className="w-full rounded-md px-4 py-2 font-medium text-red-500 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
						disabled={isLoading}
						onClick={onConfirm}
						type="button"
					>
						{isLoading ? "Memproses..." : confirmText}
					</button>
					<button
						className="w-full rounded-md px-4 py-2 font-medium text-gray-400 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
						disabled={isLoading}
						onClick={onClose}
						type="button"
					>
						{cancelText}
					</button>
				</div>
			</div>
		</button>
	);
}
