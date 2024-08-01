import { useQuery } from "@tanstack/react-query";
import { useClickAway, useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { getCharacters } from "../../api/characters/characters.api";
import {
  CharacterFormatted,
  CharactersApiResponse,
} from "../../api/characters/types";
import { P } from "../../components/atoms/typography";
import Card from "../../components/molecules/card";
import SearchInput from "./components/search-input";
import { isCharacterSelected, sortCharactersByName } from "./helpers";

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
        limit: 10, // added artificial limit as Marvel API was very slow
      });

      return response.json();
    },
  });

  const formattedCharacterData = characters?.data.results.map((character) => {
    const data: CharacterFormatted = {
      id: character.id,
      name: character.name,
      imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    };
    return data;
  });

  useEffect(() => {
    if (characters) {
      setDisplaySelectBox(true);
    }
  }, [characters]);

  function handleSelect(character: CharacterFormatted) {
    if (!isCharacterSelected(characterList, character))
      setCharacterList((prevState) => [...prevState, character]);
  }

  /**
   * todo
   * add icon to close dropdown
   * improve the error and loading state
   * add ability to remove card
   * refactor code to make more modular
   * improve UI UX experience - i.e. some on brand user loading states etc.
   */
  return (
    <div className="space-y-10">
      <aside className="relative w-[400px] max-w-full mx-auto z-10">
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
            className="flex flex-col border rounded absolute top-0 mt-[42px] w-full bg-white max-h-[206px] overflow-auto"
            ref={selectBoxRef}
          >
            {/* NOTE: I did not think this sort function qualified memoization as it is quick enough */}
            {formattedCharacterData
              ?.sort(sortCharactersByName)
              .map((character) => {
                return (
                  <button
                    className={`border-b py-2 px-2 cursor-pointer hover:bg-slate-100 text-left last:border-0 ${
                      isCharacterSelected(characterList, character)
                        ? "bg-gray-100"
                        : ""
                    }`}
                    // todo - handle enter press
                    onClick={() => handleSelect(character)}
                  >
                    {character.name}
                  </button>
                );
              })}
          </div>
        )}
      </aside>
      <div className="grid grid-cols-6 gap-4">
        {characterList.map(({ imageUrl, name }) => {
          return (
            <Card imageUrl={imageUrl} title={name} className="col-span-2" />
          );
        })}
        {isGetCharactersError && <P>There has been an error</P>}
      </div>
    </div>
  );
}

export default CharacterSearch;
