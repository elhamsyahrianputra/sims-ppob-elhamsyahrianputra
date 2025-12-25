import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Lock, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "../../../core/components/ui/button";
import { Input } from "../../../core/components/ui/form";
import { useRegister } from "../hooks/use-auth";
import { type RegisterRequest, registerSchema } from "../schemas/auth-schema";

export default function RegisterPage() {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(request: RegisterRequest) {
    mutate(request);
  }

  return (
    <div className="flex w-full flex-col sm:max-w-sm md:max-w-md lg:max-w-md">
      <div className="flex flex-col items-center gap-y-6 font-bold">
        <h1 className="flex items-center justify-center gap-x-3 text-xl">
          <img alt="SIMS PPOB Logo" src="/assets/logo/Logo.png" />
          <span>SIMS PPOB</span>
        </h1>
        <h2 className="text-center text-2xl">
          Lengkapi data untuk <span className="block">membuat akun</span>
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-6 pt-12">
          <Input
            errorMessage={errors.email?.message}
            icon={AtSign}
            placeholder="masukkan email anda"
            {...register("email")}
          />
          <Input
            errorMessage={errors.first_name?.message}
            icon={User2}
            placeholder="nama depan"
            {...register("first_name")}
          />
          <Input
            errorMessage={errors.last_name?.message}
            icon={User2}
            placeholder="nama belakang"
            {...register("last_name")}
          />
          <Input
            errorMessage={errors.password?.message}
            icon={Lock}
            placeholder="buat password"
            {...register("password")}
            type="password"
          />
          <Input
            errorMessage={errors.confirm_password?.message}
            icon={Lock}
            placeholder="konfirmasi password"
            {...register("confirm_password")}
            type="password"
          />
        </div>
        <div className="mt-12">
          <Button isLoading={isPending} type="submit">
            Registrasi
          </Button>
        </div>
      </form>
      <div className="mt-6">
        <p className="text-center text-gray-400">
          sudah punya akun? login{" "}
          <Link
            className="font-semibold text-primary transition-colors duration-300 ease-in-out hover:text-primary/40"
            to="/login"
          >
            di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
