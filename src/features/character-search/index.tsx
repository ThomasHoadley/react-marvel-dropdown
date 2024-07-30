import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCharacters } from "../../api/characters/characters.api";
import { P } from "../../components/atoms/typography";
import SearchInput from "./components/SearchInput/SearchInput";

function CharacterSearch() {
  const [characterInput, setCharacterInput] = useState<string>("");

  const getCharactersQueryKey = [
    "characters",
    {
      character: characterInput,
    },
  ];

  const {
    data: characters = [],
    isPending: isGetCharactersPending,
    isError: isGetCharactersError,
  } = useQuery<any, Error>({
    queryKey: getCharactersQueryKey,
    queryFn: async () => {
      const response = await getCharacters({
        nameStartsWith: characterInput,
        limit: 5, // added artificial limit as Marvel API was very slow
      });
      const data = response.data;

      return data;
    },
  });

  return (
    <div>
      <P>Characters</P>
      <SearchInput value={characterInput} onChange={setCharacterInput} />
      {isGetCharactersPending ? (
        <P>...Loading</P>
      ) : (
        JSON.stringify(characters, null, 2)
      )}
    </div>
  );
}

export default CharacterSearch;
