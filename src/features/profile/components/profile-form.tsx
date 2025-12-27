import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../core/components/ui";
import { type UpdateProfileRequest, updateProfileSchema } from "../schemas/profile-schema";

type DefaultValues = {
  first_name?: string;
  last_name?: string;
  email?: string;
};

type Props = {
  defaultValues: DefaultValues;
  isEditing: boolean;
  onSubmit: (data: UpdateProfileRequest) => void;
  isUpdating?: boolean;
  onCancel?: () => void;
};

export default function ProfileForm({ defaultValues, isEditing, onSubmit, isUpdating, onCancel }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileRequest>({
    resolver: zodResolver(updateProfileSchema),
    values: {
      first_name: defaultValues.first_name ?? "",
      last_name: defaultValues.last_name ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <Input disabled icon={AtSign} label="Email" value={defaultValues.email ?? ""} />
        <Input disabled={!isEditing} errorMessage={errors.first_name?.message} icon={User} label="Nama Depan" {...register("first_name")} />
        <Input disabled={!isEditing} errorMessage={errors.last_name?.message} icon={User} label="Nama Belakang" {...register("last_name")} />

        {isEditing && (
          <div className="flex gap-2">
            <Button disabled={isUpdating} isLoading={isUpdating} type="submit">
              Simpan
            </Button>
            <Button className="border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={onCancel} type="button">
              Batalkan
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}
