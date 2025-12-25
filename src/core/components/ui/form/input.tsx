import type { LucideIcon } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  icon: LucideIcon;
  errorMessage?: string;
}

export function Input({ errorMessage, icon, ...props }: InputProps) {
  const InputIcon = icon;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // Scroll input ke posisi yang visible, terutama untuk mobile landscape
    setTimeout(() => {
      e.target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);

    // Call original onFocus if provided
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          className={cn(
            "peer w-full rounded-sm border-2 py-3 pr-4 pl-9 text-sm",
            "placeholder:text-gray-400 hover:border-gray-500 focus:border-black focus:outline-0",
            "transition-colors duration-150 ease-in-out",
            errorMessage ? "border-primary/80!" : "border-gray-300",
          )}
          {...props}
          onFocus={handleFocus}
        />
        <InputIcon
          className={cn(
            "absolute top-1/2 left-3 -translate-y-1/2",
            "peer-focus:text-black peer-[:not(:placeholder-shown)]:text-black",
            "transition-colors duration-150 ease-in-out",
            errorMessage ? "text-primary/80!" : "text-gray-400",
          )}
          size={18}
        />
      </div>
      {errorMessage && (
        <div className="text-right">
          <p className="mt-1.5 font-medium text-primary text-xs">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}
