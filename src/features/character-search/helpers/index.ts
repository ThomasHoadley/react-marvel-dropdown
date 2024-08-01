import { CharacterFormatted } from "../../../api/characters/types";

export const isCharacterSelected = (
  characterList: CharacterFormatted[],
  selectedCharacter: CharacterFormatted
) => characterList.find((character) => character.id === selectedCharacter.id);

export const sortCharactersByName = (
  a: CharacterFormatted,
  b: CharacterFormatted
) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};
