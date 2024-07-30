import { marvelApiRequest } from "../helpers";
import { CharacterArgs } from "./types";

export async function getCharacters(args: CharacterArgs) {
  const charactersRequest = await marvelApiRequest("characters", {
    ...args,
    orderBy: "name",
  });
  const data = charactersRequest.json();
  return data;
}
