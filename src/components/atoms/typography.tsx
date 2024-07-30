import { ReactNode } from "react";
import { cn } from "../../helpers";

// used shadcn defaults - https://ui.shadcn.com/docs/components/typography

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

export function H1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        `pb-2 text-3xl font-semibold tracking-tight first:mt-0`,
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: Props) {
  return (
    <h1
      className={cn(
        `pb-2 text-2xl font-semibold tracking-tight first:mt-0`,
        className
      )}
    >
      {children}
    </h1>
  );
}

export function P({ children, className }: Props) {
  return (
    <p className={cn(`leading-7 [&:not(:first-child)]:mt-6`, className)}>
      {children}
    </p>
  );
}
