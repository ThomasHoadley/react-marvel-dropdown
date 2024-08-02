import { Dispatch, SetStateAction } from "react";
import { CharacterFormatted } from "../../../api/characters/types";
import CharacterCard from "./character-card";

interface Props {
  characterList: CharacterFormatted[];
  setCharacterList: Dispatch<SetStateAction<CharacterFormatted[]>>;
}

function CharacterList({ characterList, setCharacterList }: Props) {
  const handleRemove = (characterId: CharacterFormatted["id"]) => {
    const updatedCharacterList = characterList.filter(
      (character) => character.id !== characterId
    );
    setCharacterList(updatedCharacterList);
  };

  if (characterList.length === 0) return null;

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
