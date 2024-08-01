import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { getCharacters } from "../../api/characters/characters.api";
import {
  CharacterFormatted,
  CharactersApiResponse,
} from "../../api/characters/types";
import { P } from "../../components/atoms/typography";
import SelectBox from "./components/character-select/select-box";
import CharacterList from "./components/chracter-list";
import { isCharacterSelected } from "./helpers";

function CharacterSearch() {
  const [characterInput, setCharacterInput] = useState<string>("");
  const [displaySelectBox, setDisplaySelectBox] = useState(false);
  const debouncedSearchTerm = useDebounce(characterInput, 400); // debounce the entry put to prevent unecessary API calls. could spend more time reviewing a different

  const [characterList, setCharacterList] = useState<CharacterFormatted[]>([]);

  const getCharactersQueryKey = [
    "characters",
    {
      character: debouncedSearchTerm,
    },
  ];

  const {
    data: characters,
    isLoading: isGetCharactersLoading,
    isError: isGetCharactersError,
  } = useQuery<CharactersApiResponse, Error>({
    queryKey: getCharactersQueryKey,
    enabled: !!debouncedSearchTerm && debouncedSearchTerm.length > 1, // ensure user has entered 2 or more characters
    queryFn: async () => {
      const response = await getCharacters({
        nameStartsWith: debouncedSearchTerm,
      });

      return response.json();
    },
  });

  useEffect(() => {
    if (characters && characters.data.results.length > 0) {
      setDisplaySelectBox(true);
    }
  }, [characters]);

  const handleSelect = (character: CharacterFormatted) => {
    if (!isCharacterSelected(characterList, character))
      setCharacterList((prevState) => [...prevState, character]);
  };
  const handleRemove = (characterId: CharacterFormatted["id"]) => {
    const updatedCharacterList = characterList.filter(
      (character) => character.id !== characterId
    );
    setCharacterList(updatedCharacterList);
  };

  /**
   * todo
   * improve the error and loading state
   * improve UI UX experience - i.e. some on brand user loading states etc.
   * write tests
   * consider scenario if user only enters 1 character
   */
  return (
    <div className="space-y-10">
      <SelectBox
        displaySelectBox={displaySelectBox}
        setDisplaySelectBox={setDisplaySelectBox}
        characterInput={characterInput}
        setCharacterInput={setCharacterInput}
        characters={characters}
        isGetCharactersLoading={isGetCharactersLoading}
        characterList={characterList}
        handleSelect={handleSelect}
      />
      <CharacterList
        characterList={characterList}
        handleRemove={handleRemove}
      />
      {isGetCharactersError && <P>There has been an error</P>}
    </div>
  );
}

export default CharacterSearch;
