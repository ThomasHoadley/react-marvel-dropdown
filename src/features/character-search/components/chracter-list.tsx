import { Dispatch, SetStateAction } from "react";
import { CharacterFormatted } from "../../../api/characters/types";
import CharacterCard from "./character-card";
import { SortFiterValue } from "./character-filter";

interface Props {
  characterList: CharacterFormatted[];
  setCharacterList: Dispatch<SetStateAction<CharacterFormatted[]>>;
  sortValue: SortFiterValue;
}

function sortAlphabetically(a: CharacterFormatted, b: CharacterFormatted) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function CharacterList({ characterList, setCharacterList, sortValue }: Props) {
  const handleRemove = (characterId: CharacterFormatted["id"]) => {
    const updatedCharacterList = characterList.filter(
      (character) => character.id !== characterId
    );
    setCharacterList(updatedCharacterList);
  };

  console.log("review", sortValue);

  if (characterList.length === 0) return null;

  if (sortValue === SortFiterValue.Alphabetical) {
    characterList.sort((a, b) => sortAlphabetically(a, b));
  }

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
