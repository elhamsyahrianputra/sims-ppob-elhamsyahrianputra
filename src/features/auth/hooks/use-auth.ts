import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { ApiResponse } from "../../../core/types/api.types";
import { tokenStorage } from "../../../core/utils/token";
import type { LoginRequest, RegisterRequest } from "../schemas/auth-schema";
import { authService } from "../services/auth-service";
import type { LoginResponse } from "../types/auth.types";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation<
    ApiResponse<LoginResponse>,
    AxiosError<ApiResponse<null>>,
    LoginRequest
  >({
    mutationFn: authService.login,
    onSuccess: (response) => {
      if (response.data?.token) {
        tokenStorage.set(response.data.token);
      }
      toast.success(response.message);
      navigate("/");
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<null>>,
    RegisterRequest
  >({
    mutationFn: authService.register,
    onSuccess: (response) => {
      toast.success(response.message);
      navigate("/login");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  return () => {
    tokenStorage.remove();
    toast.success("Logout berhasil");
    navigate("/login");
  };
};
