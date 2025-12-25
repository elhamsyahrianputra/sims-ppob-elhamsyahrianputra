import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { profileService } from "../services/profile.service";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: profileService.get,
  });
}

export function useUpdateProfile() {
  return useMutation({
    mutationFn: profileService.update,
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });
}
