import { useState } from "react";
import { toast } from "sonner";
import { usePageTitle } from "../../../core/hooks/use-page-title";
import { useAppSelector } from "../../../core/store/hooks";
import { useLogout } from "../../auth/hooks/use-auth";
import AvatarUpload from "../components/avatar-upload";
import ProfileActions from "../components/profile-actions";
import ProfileForm from "../components/profile-form";
import { useProfile, useUpdateProfile, useUpdateProfileImage } from "../hooks/use-profile";
import type { UpdateProfileRequest } from "../schemas/profile-schema";

export default function ProfilePage() {
  usePageTitle({ title: "Akun" });

  useProfile();

  const profile = useAppSelector((state) => state.profile);

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfile();
  const { mutate: updateImage, isPending: isUploadingImage } = useUpdateProfileImage();
  const logout = useLogout();

  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const MAX_SIZE = 100 * 1024;

      if (file.size > MAX_SIZE) {
        toast.error("Ukuran file maksimal 100KB");
        e.target.value = "";
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      updateImage(formData, {
        onSuccess: () => {
          e.target.value = "";
        },
      });
    }
  };

  const handleSubmit = (data: UpdateProfileRequest) => {
    updateProfile(data, {
      onSuccess: () => setIsEditing(false),
    });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <AvatarUpload isUploading={isUploadingImage} onFileChange={handleFileChange} src={profile.profile_image} />
        <span className="font-semibold text-2xl">{`${profile.first_name} ${profile.last_name}`}</span>
      </div>

      <ProfileForm
        defaultValues={{
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
        }}
        isEditing={isEditing}
        isUpdating={isUpdatingProfile}
        onCancel={() => setIsEditing(false)}
        onSubmit={handleSubmit}
      />

      <ProfileActions isEditing={isEditing} onEdit={() => setIsEditing(true)} onLogout={logout} />
    </div>
  );
}
