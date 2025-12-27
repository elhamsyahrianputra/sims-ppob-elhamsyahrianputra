import type { LucideIcon } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  icon: LucideIcon;
  label?: string;
  errorMessage?: string;
}

export function Input({ errorMessage, icon, label, ...props }: InputProps) {
  const InputIcon = icon;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      e.target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);

    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 font-medium text-sm" htmlFor="">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={cn(
            "peer w-full rounded-sm border-2 py-3 pr-4 pl-9 text-sm",
            "placeholder:text-gray-400 hover:border-gray-500 focus:border-black focus:outline-0",
            "transition-colors duration-150 ease-in-out",
            "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
            errorMessage ? "border-primary/80!" : "border-gray-300",
          )}
          {...props}
          onFocus={handleFocus}
        />
        <InputIcon className={cn("absolute top-1/2 left-3 -translate-y-1/2", "peer-focus:text-black peer-[:not(:placeholder-shown)]:text-black", "peer-disabled:text-gray-300", "transition-colors duration-150 ease-in-out", errorMessage ? "text-primary/80!" : "text-gray-400")} size={18} />
      </div>
      {errorMessage && (
        <div className="text-right">
          <p className="mt-1.5 font-medium text-primary text-xs">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
