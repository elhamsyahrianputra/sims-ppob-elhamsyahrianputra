import { QueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import type { ApiResponse } from "../../types/api.types";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      throwOnError: false,
    },
    mutations: {
      onError: (error: Error) => {
        const axiosError = error as AxiosError<ApiResponse<null>>;
        const message = axiosError.response?.data?.message || "An unexpected error occurred";
        toast.error(message);
      },
    },
  },
});
