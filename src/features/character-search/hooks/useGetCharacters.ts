import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { getCharacters } from "../../../api/characters/characters.api";
import { CharactersApiResponse } from "../../../api/characters/types";

function useGetCharacters({ characterInput }: { characterInput: string }) {
  const debouncedSearchTerm = useDebounce(characterInput, 400); // debounce the entry put to prevent unecessary API calls. could spend more time reviewing a different
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
  return { characters, isGetCharactersLoading, isGetCharactersError };
}

export default useGetCharacters;
