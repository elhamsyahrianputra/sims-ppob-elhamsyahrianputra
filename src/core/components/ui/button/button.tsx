import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isLoading?: boolean;
}

export function Button({ children, isLoading, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn("flex not-even:w-full cursor-pointer items-center justify-center gap-x-2 rounded-sm bg-primary px-4 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400", className)}
      disabled={props.disabled || isLoading}
      type="submit"
      {...props}
    >
      {isLoading && (
        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Loading...</title>
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
        </svg>
      )}
      {children}
    </button>
  );
}
