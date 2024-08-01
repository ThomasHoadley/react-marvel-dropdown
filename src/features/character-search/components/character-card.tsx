import { CircleX } from "lucide-react";
import { CharacterFormatted } from "../../../api/characters/types";
import Card, { CardProps } from "../../../components/molecules/card";

interface Props extends CardProps {
  characterId: CharacterFormatted["id"];
  handleRemove: (id: number) => void;
}

function CharacterCard({
  handleRemove,
  characterId,
  className,
  ...rest
}: Props) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <button
        className="absolute top-5 right-5 z-10 bg-white rounded-full"
        onClick={() => handleRemove(characterId)}
      >
        <CircleX className="text-red-600 cursor-pointer" />
      </button>
      <Card {...rest} />
    </div>
  );
}

export default CharacterCard;
