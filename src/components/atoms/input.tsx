import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../helpers";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, disabled, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "px-4 py-2",
          !error
            ? "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
            : "border-red-200 bg-red-100 text-red-600 placeholder-red-300",
          `rounded-md border w-full`,
          {
            "opacity-50": disabled,
          },
          disabled ? "cursor-not-allowed" : "",
          className,
          "text-md"
        )}
        disabled={disabled}
        type="text"
        {...rest}
      />
    );
  }
);
