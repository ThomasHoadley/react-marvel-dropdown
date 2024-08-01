import { useState } from "react";
import { CharacterFormatted } from "../../api/characters/types";
import { P } from "../../components/atoms/typography";
import SelectBox from "./components/character-select/select-box";
import CharacterList from "./components/chracter-list";
import useGetCharacters from "./hooks/useGetCharacters";

function CharacterSearch() {
  const [characterInput, setCharacterInput] = useState<string>("");
  const [displaySelectBox, setDisplaySelectBox] = useState(false);
  const [characterList, setCharacterList] = useState<CharacterFormatted[]>([]);
  const { characters, isGetCharactersError, isGetCharactersLoading } =
    useGetCharacters({ characterInput });

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
        setCharacterList={setCharacterList}
      />
      <CharacterList
        characterList={characterList}
        setCharacterList={setCharacterList}
      />
      {isGetCharactersError && <P>There has been an error</P>}
    </div>
  );
}

export default CharacterSearch;
