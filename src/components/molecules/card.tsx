import { HTMLAttributes } from "react";
import { P } from "../atoms/typography";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle?: string;
  imageUrl: string;
}

function Card({ imageUrl, title, className, ...rest }: CardProps) {
  return (
    <div className={`${className} flex flex-col border rounded`} {...rest}>
      <div className="h-[200px] w-full relative">
        <img
          src={imageUrl}
          alt={`Image of ${title}`}
          className="object-cover object-center absolute top-0 right-0 bottom-0 left-0 h-full w-full"
        />
      </div>
      <div className="text-center space-y-6 p-6">
        <P className="font-bold text-[20px]">{title}</P>
      </div>
    </div>
  );
}

export default Card;
