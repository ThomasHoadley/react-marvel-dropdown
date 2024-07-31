import { useQuery } from "@tanstack/react-query";
import { useClickAway, useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { getCharacters } from "../../api/characters/characters.api";
import {
  CharacterFormatted,
  CharactersApiResponse,
} from "../../api/characters/types";
import { P } from "../../components/atoms/typography";
import SearchInput from "./components/search-input/SearchInput";

function CharacterSearch() {
  const [characterInput, setCharacterInput] = useState<string>("");
  const debouncedSearchTerm = useDebounce(characterInput, 400); // debounce the entry put to prevent unecessary API calls. could spend more time reviewing a different
  const [displaySelectBox, setDisplaySelectBox] = useState(false);
  const [characterList, setCharacterList] = useState<CharacterFormatted[]>([]);
  const selectBoxRef = useClickAway<HTMLDivElement>(() => {
    setDisplaySelectBox(false);
  });

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
        limit: 5, // added artificial limit as Marvel API was very slow
      });

      return response.json();
    },
  });

  const formattedCharacterData = characters?.data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      imageUrl: character.thumbnail.path + character.thumbnail.extension,
    } as CharacterFormatted;
  });

  useEffect(() => {
    if (characters) {
      setDisplaySelectBox(true);
    }
  }, [characters]);

  function handleSelect(options: CharacterFormatted) {
    const alreadySelected = characterList.find(
      (character) => character.id === options.id
    );
    if (!alreadySelected)
      setCharacterList((prevState) => [...prevState, options]);
  }

  /**
   * todo
   * improve the error and loading state
   * add icon to close dropdown
   * style the character list and add ability to remove
   * refactor code to make more modular
   * improve UI UX experience
   */
  return (
    <div>
      <div className="relative">
        <SearchInput
          value={characterInput}
          onChange={(e) => setCharacterInput(e.target.value)}
          onFocus={() => {
            if (characters) {
              setDisplaySelectBox(true);
            }
          }}
          loading={isGetCharactersLoading}
          placeholder="Search characters..."
        />

        {displaySelectBox && formattedCharacterData && (
          <div
            className="flex flex-col border rounded absolute top-0 mt-[42px] w-full bg-white"
            ref={selectBoxRef}
          >
            {formattedCharacterData?.map((options) => {
              return (
                <button
                  className="border-b py-2 px-2 cursor-pointer hover:bg-slate-100 text-left last:border-0"
                  onClick={() => handleSelect(options)}
                >
                  {options.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <P>You have chosen:</P>
      {characterList.map((character) => {
        return <P>{character.name}</P>;
      })}
      {isGetCharactersError && <P>There has been an error</P>}
    </div>
  );
}

export default CharacterSearch;
