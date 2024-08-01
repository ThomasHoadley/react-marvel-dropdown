import {
  CharacterFormatted,
  CharactersApiResponse,
} from "../../../api/characters/types";

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

export const formatCharacterData = (characters: CharactersApiResponse) =>
  characters?.data.results.map((character) => {
    const data: CharacterFormatted = {
      id: character.id,
      name: character.name,
      imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    };
    return data;
  });
