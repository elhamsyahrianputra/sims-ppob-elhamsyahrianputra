import { TopUpForm } from "../components/topup-form";

export default function TopUpPage() {
  return (
    <>
      <div className="mt-16 flex flex-1 flex-col gap-y-4">
        <div className="flex flex-col">
          <span className="text-lg md:text-xl">Silahkan masukan</span>
          <span className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Nominal Top Up
          </span>
        </div>
      </div>
      <div className="mt-12">
        <TopUpForm />
      </div>
    </>
  );
}
