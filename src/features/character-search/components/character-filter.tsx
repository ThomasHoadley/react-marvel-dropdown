import Filter, { SortState } from "../../../components/molecules/filter";

export enum SortFiterLabel {
  Default = "Default",
  Alphabetical = "Alphabetical",
  ReverseAlphabetical = "Reverse Alphabetical",
}

export enum SortFiterValue {
  Default = "default",
  Alphabetical = "alphabetical",
  ReverseAlphabetical = "reverse-alphabetical",
}

function CharacterFilter({ sortValues, sortState }: SortState) {
  return <Filter sortState={sortState} sortValues={sortValues} />;
}

export default CharacterFilter;
