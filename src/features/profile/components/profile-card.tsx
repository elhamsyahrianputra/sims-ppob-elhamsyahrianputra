import { useAppSelector } from "../../../core/store/hooks";
import { useProfile } from "../hooks/use-profile";

export function ProfileCard() {
  useProfile();

  const profile = useAppSelector((state) => state.profile);

  return (
    <div className="flex flex-1 flex-col gap-y-4">
      <div>
        <img alt={`${profile.first_name} ${profile.last_name} avatar`} className="size-16 rounded-full object-cover md:size-18" src={profile.profile_image || "/assets/avatar/Profile Photo.png"} />
      </div>
      <div className="flex flex-col">
        <span className="text-lg md:text-xl">Selamat datang,</span>
        <span className="font-semibold text-xl md:text-2xl lg:text-3xl">
          {profile.first_name} {profile.last_name}
        </span>
      </div>
    </div>
  );
}
