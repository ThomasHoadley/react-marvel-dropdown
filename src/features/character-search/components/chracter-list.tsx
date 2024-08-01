import { CharacterFormatted } from "../../../api/characters/types";
import CharacterCard from "./character-card";

function CharacterList({
  characterList,
  handleRemove,
}: {
  characterList: CharacterFormatted[];
  handleRemove: (id: CharacterFormatted["id"]) => void;
}) {
  return (
    <div className="grid grid-cols-6 gap-4">
      {characterList.map(({ imageUrl, name, id }) => {
        return (
          <CharacterCard
            handleRemove={() => handleRemove(id)}
            characterId={id}
            imageUrl={imageUrl}
            title={name}
            className="col-span-6 sm:col-span-3 md:col-span-2"
          />
        );
      })}
    </div>
  );
}

export default CharacterList;
