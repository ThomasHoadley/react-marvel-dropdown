import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../helpers";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

function Button({ onClick, children, disabled }: Props) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-red-800 rounded hover:bg-red-500 transition-colors",
        disabled && "cursor-not-allowed opacity-50"
      )}
      onClick={(e) => {
        !disabled && onClick && onClick(e);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
