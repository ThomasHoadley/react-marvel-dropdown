import { marvelApiRequest } from "../helpers";
import { CharacterQueryArgs } from "./types";

export function getCharacters(args: CharacterQueryArgs) {
  return marvelApiRequest("characters", {
    ...args,
    // orderBy: "name",
  });
}
