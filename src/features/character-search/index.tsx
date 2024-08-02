import { useState } from "react";
import { CharacterFormatted } from "../../api/characters/types";
import Button from "../../components/atoms/button";
import { P } from "../../components/atoms/typography";
import PageTitle from "../../components/molecules/page-title";
import SelectBox from "./components/character-select-box/select-box";
import CharacterList from "./components/chracter-list";
import useGetCharacters from "./hooks/useGetCharacters";

function CharacterSearch() {
  const [characterInput, setCharacterInput] = useState<string>("");
  const [displaySelectBox, setDisplaySelectBox] = useState(false);
  const [characterList, setCharacterList] = useState<CharacterFormatted[]>([]);
  const {
    data: characters,
    isLoading: isGetCharactersLoading,
    isError: isGetCharactersError,
  } = useGetCharacters({ characterInput });
  const [missionAccepted, setMissionAccepted] = useState(false);

  /**
   * todo
   * write api checking tests
   * improve the error and loading state
   * improve UI UX experience - i.e. some on brand user loading states etc.
   * consider scenario if user only enters 1 character
   */
  return (
    <div className="space-y-6">
      {missionAccepted ? (
        <>
          <PageTitle text="Assemble your team" />
          {characterList.length === 0 && (
            <div className="text-center space-y-0 text-xl">
              <P>Build your team using the search bar.</P>
              <P>When you are ready, deploy your team.</P>
            </div>
          )}
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
          <div className="text-center text-xl">
            <Button
              disabled={characterList.length === 0}
              onClick={() =>
                alert(
                  "Operation Save The World is in progress. Thank you for your services."
                )
              }
            >
              Deploy
            </Button>
            {isGetCharactersError && <P>There has been an error</P>}
          </div>
        </>
      ) : (
        <div className="text-xl text-center w-[400px] mx-auto space-y-8">
          <PageTitle text="Private & Confidential" />
          <P>
            Your mission, should you choose to accept it, is to select a crack
            team of super heroes to save the world. Do you accept?
          </P>
          <Button onClick={() => setMissionAccepted(true)}>I accept</Button>
        </div>
      )}
    </div>
  );
}

export default CharacterSearch;
