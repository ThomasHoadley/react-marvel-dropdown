import { useClickAway } from "@uidotdev/usehooks";
import {
  CharacterFormatted,
  CharactersApiResponse,
} from "../../../../api/characters/types";
import { P } from "../../../../components/atoms/typography";
import {
  formatCharacterData,
  isCharacterSelected,
  sortCharactersByName,
} from "../../helpers";
import SearchInput from "./search-input";

interface SelectBoxProps {
  displaySelectBox: boolean;
  setDisplaySelectBox: (value: boolean) => void;
  characterInput: string;
  setCharacterInput: (value: string) => void;
  characters?: CharactersApiResponse;
  isGetCharactersLoading: boolean;
  characterList: CharacterFormatted[];
  handleSelect: (character: CharacterFormatted) => void;
}

function SelectBox({
  displaySelectBox,
  setDisplaySelectBox,
  characterInput,
  setCharacterInput,
  characters,
  isGetCharactersLoading,
  characterList,
  handleSelect,
}: SelectBoxProps) {
  const selectBoxRef = useClickAway<HTMLDivElement>(() => {
    setDisplaySelectBox(false);
  });
  const formattedCharacterData = characters && formatCharacterData(characters);

  return (
    <aside className="relative w-[400px] max-w-full mx-auto z-20">
      <SearchInput
        value={characterInput}
        onChange={(e) => setCharacterInput(e.target.value)}
        onFocus={() => {
          if (characters) {
            setDisplaySelectBox(true);
          }
        }}
        loading={isGetCharactersLoading}
        placeholder="Search for your heroes..."
      />
      {characters && characters.data.results.length <= 0 && (
        <P className="text-red-400 text-center !mt-2">
          No results for search term
        </P>
      )}

      {displaySelectBox && formattedCharacterData && (
        <div
          className="flex flex-col border rounded absolute top-0 mt-[42px] w-full bg-white max-h-[206px] overflow-auto"
          ref={selectBoxRef}
        >
          {/* NOTE: I did not think this sort function qualified memoization as it is quick enough */}
          {formattedCharacterData
            ?.sort(sortCharactersByName)
            .map((character) => {
              // todo make the button component reusable
              return (
                <button
                  className={`border-b py-2 px-2 cursor-pointer hover:bg-slate-100 text-left last:border-0 ${
                    isCharacterSelected(characterList, character)
                      ? "bg-gray-100 !cursor-not-allowed"
                      : ""
                  }`}
                  // todo - handle enter key press
                  onClick={() => handleSelect(character)}
                >
                  {character.name}
                </button>
              );
            })}
        </div>
      )}
    </aside>
  );
}

export default SelectBox;