import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "../../../core/components/ui/button";
import { Input } from "../../../core/components/ui/form";
import { useLogin } from "../hooks/use-auth";
import { type LoginRequest, loginSchema } from "../schemas/auth-schema";

export default function LoginPage() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(request: LoginRequest) {
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
          Masuk atau buat akun <span className="block">untuk memulai</span>
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-6 pt-12">
          <Input
            autoFocus
            errorMessage={errors.email?.message}
            icon={AtSign}
            placeholder="masukkan email anda"
            {...register("email")}
          />
          <Input
            errorMessage={errors.password?.message}
            icon={Lock}
            placeholder="masukkan password anda"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="mt-12">
          <Button isLoading={isPending} type="submit">
            Login
          </Button>
        </div>
      </form>
      <div className="mt-6">
        <p className="text-center text-gray-400">
          belum punya akun? registrasi di sini{" "}
          <Link
            className="font-semibold text-primary transition-colors duration-300 ease-in-out hover:text-primary/40"
            to="/register"
          >
            di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
