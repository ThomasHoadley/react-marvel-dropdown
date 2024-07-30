import { H1 } from "../atoms/typography";

type Props = {
  text: string;
};

function PageTitle({ text }: Props) {
  return (
    <div>
      <H1 className="text-center">{text}</H1>
    </div>
  );
}

export default PageTitle;
