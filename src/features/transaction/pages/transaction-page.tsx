import { Banknote } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { Button, Input } from "../../../core/components/ui";
import { ConfirmationModal, ResultModal } from "../../../core/components/ui/modal";
import { usePageTitle } from "../../../core/hooks/use-page-title";
import { formatRupiah } from "../../../core/utils/format-rupiah";
import { useMenus } from "../../information/hooks/user-menu";
import { useTransaction, useValidateBalance } from "../hooks/use-transaction";

export default function TransactionPage() {
  const { serviceCode } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultModal, setResultModal] = useState<{
    isOpen: boolean;
    type: "success" | "error";
  }>({
    isOpen: false,
    type: "success",
  });

  const { data: services } = useMenus();
  const { mutate, isPending } = useTransaction();
  const { validateBalance } = useValidateBalance();

  const service = services?.data?.find((service) => {
    return service.service_code === serviceCode?.toUpperCase();
  });

  const serviceTariff = service?.service_tariff || 0;

  usePageTitle({ title: service?.service_name || "Pembayaran" });

  const handleSubmitClick = () => {
    if (!service?.service_code) {
      toast.error("Service tidak ditemukan");
      return;
    }

    const validation = validateBalance(serviceTariff);
    if (!validation.isValid) {
      toast.error(validation.message);
      return;
    }

    setIsModalOpen(true);
  };

  const handleConfirmTransaction = () => {
    if (!service?.service_code) return;

    mutate(
      { service_code: service.service_code },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          setResultModal({
            isOpen: true,
            type: "success",
          });
        },
        onError: () => {
          setIsModalOpen(false);
          setResultModal({
            isOpen: true,
            type: "error",
          });
        },
      },
    );
  };

  const handleCloseResultModal = () => {
    setResultModal({ isOpen: false, type: "success" });
    navigate("/");
  };

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl">PemBayaran</h3>
        <div className="flex items-center gap-3">
          <img alt={`${service?.service_name} Icon`} className="size-10" src={service?.service_icon} />
          <span className="font-semibold text-lg">{service?.service_name}</span>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col gap-4">
          <Input disabled icon={Banknote} value={formatRupiah(serviceTariff)} />
          <Button disabled={isPending || !service} onClick={handleSubmitClick} type="button">
            Bayar
          </Button>
        </div>
      </div>

      <ConfirmationModal actionType={`Pembayaran ${service?.service_name || ""}`} amount={serviceTariff} isLoading={isPending} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleConfirmTransaction} />

      {/* Result Modal */}
      <ResultModal
        actionText={resultModal.type === "success" ? "Kembali ke Beranda" : "Kembali ke Beranda"}
        amount={serviceTariff}
        description={resultModal.type === "success" ? "berhasil!" : "gagal. Silakan coba beberapa saat lagi"}
        isOpen={resultModal.isOpen}
        onClose={handleCloseResultModal}
        title={resultModal.type === "success" ? `Pembayaran ${service?.service_name} sebesar` : `Pembayaran ${service?.service_name} sebesar`}
        type={resultModal.type}
      />
    </div>
  );
}
