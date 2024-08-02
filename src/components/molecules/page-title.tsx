import { H1 } from "../atoms/typography";

type Props = {
  text: string;
};

function PageTitle({ text }: Props) {
  return <H1 className="text-center mb-4">{text}</H1>;
}

export default PageTitle;
