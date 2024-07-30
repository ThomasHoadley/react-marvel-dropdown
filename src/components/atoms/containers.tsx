import { ReactNode } from "react";
import { cn } from "../../helpers";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

function PageContainer({ children, className }: Props) {
  return (
    <div
      className={cn(`w-[1100px] max-w-full mx-auto px-4 md:px-8`, className)}
    >
      {children}
    </div>
  );
}

function CardGridContainer({ children, className }: Props) {
  return (
    <div
      className={cn(`w-[1100px] max-w-full mx-auto px-4 md:px-8`, className)}
    >
      {children}
    </div>
  );
}

export { CardGridContainer, PageContainer };
