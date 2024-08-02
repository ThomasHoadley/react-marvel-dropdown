import { Trash2 } from "lucide-react";
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
        className="absolute top-4 right-4 z-10 bg-white rounded-full h-8 w-8 flex justify-center items-center"
        onClick={() => handleRemove(characterId)}
      >
        <Trash2 className="text-red-600 cursor-pointer h-5" />
      </button>
      <Card {...rest} />
    </div>
  );
}

export default CharacterCard;
