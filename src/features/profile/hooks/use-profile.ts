import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import { profileService } from "../services/profile.service";
import { setLoading, setProfile, updateProfileImage } from "../store/profile-slice";

export function useProfile() {
  const dispatch = useAppDispatch();
  const profileFromRedux = useAppSelector((state) => state.profile);

  const query = useQuery({
    queryKey: ["profile"],
    queryFn: profileService.get,
  });

  useEffect(() => {
    if (query.data?.data) {
      dispatch(
        setProfile({
          email: query.data.data.email,
          first_name: query.data.data.first_name,
          last_name: query.data.data.last_name,
          profile_image: query.data.data.profile_image,
        }),
      );
    }
  }, [query.data, dispatch]);

  useEffect(() => {
    dispatch(setLoading(query.isLoading));
  }, [query.isLoading, dispatch]);

  return {
    ...query,
    profile: profileFromRedux,
  };
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: profileService.update,
    onSuccess: (response) => {
      if (response.data) {
        dispatch(
          setProfile({
            email: response.data.email,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            profile_image: response.data.profile_image,
          }),
        );
      }
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success(response.message);
    },
  });
}

export function useUpdateProfileImage() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: profileService.updateImage,
    onSuccess: (response) => {
      if (response.data?.profile_image) {
        dispatch(updateProfileImage(response.data.profile_image));
      }
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success(response.message);
    },
  });
}
