import { Pencil } from "lucide-react";
import type React from "react";
import { useRef } from "react";

type Props = {
  src?: string | null;
  isUploading?: boolean;
  onClick?: () => void;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AvatarUpload({ src, isUploading, onClick, onFileChange }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (!isUploading) {
      fileRef.current?.click();
      onClick?.();
    }
  };

  return (
    <div className="relative">
      <button className="group relative size-32 cursor-pointer overflow-hidden rounded-full focus:outline-none" disabled={isUploading} onClick={handleClick} type="button">
        <img alt="Avatar Profile" className="size-full object-cover transition-opacity group-hover:opacity-80" src={src ?? undefined} />
      </button>

      <button className="absolute right-0 bottom-0 flex size-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50" disabled={isUploading} onClick={handleClick} type="button">
        <Pencil size={14} />
      </button>

      <input accept="image/png,image/jpeg" className="hidden" onChange={onFileChange} ref={fileRef} type="file" />
    </div>
  );
}
