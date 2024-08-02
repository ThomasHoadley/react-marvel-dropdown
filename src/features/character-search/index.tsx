import { useState } from "react";
import { CharacterFormatted } from "../../api/characters/types";
import Button from "../../components/atoms/button";
import { P } from "../../components/atoms/typography";
import PageTitle from "../../components/molecules/page-title";
import SelectBox from "./components/character-select-box/select-box";
import CharacterList from "./components/chracter-list";
import MissionIntro from "./components/mission-intro";
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
  const handleDeploy = () => {
    alert(
      "Operation Save The World is in progress. Thank you for your services."
    );
  };

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
              onClick={handleDeploy}
            >
              Deploy
            </Button>
            {isGetCharactersError && <P>There has been an error</P>}
          </div>
        </>
      ) : (
        <MissionIntro setMissionAccepted={setMissionAccepted} />
      )}
    </div>
  );
}

export default CharacterSearch;
