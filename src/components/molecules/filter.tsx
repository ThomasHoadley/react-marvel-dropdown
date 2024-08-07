import { Dispatch, SetStateAction } from "react";
import { SortFiterValue } from "../../features/character-search/components/character-filter";
import { P } from "../atoms/typography";

type SortField = {
  value: string;
  label: string;
};

export type SortState = {
  sortValues: SortField[];
  sortState: {
    sortValue: string;
    setSortValue: Dispatch<SetStateAction<SortFiterValue>>;
  };
};

function Filter({ sortValues, sortState }: SortState) {
  console.log(sortValues, sortState);
  return (
    <div className="bg-slate-400 px-4 py-8">
      <P className="font-bold">Sort</P>
      <form>
        <fieldset>
          <legend>Sort characters:</legend>
          {sortValues.map((item, index) => {
            return (
              <div className="space-x-2" key={index}>
                <input
                  checked={item.value === sortState.sortValue}
                  type="radio"
                  id={item.value}
                  name="sort"
                  value={item.value}
                  onChange={(e) =>
                    sortState.setSortValue(e.target.value as SortFiterValue)
                  }
                />
                <label htmlFor="contactChoice1">{item.label}</label>
              </div>
            );
          })}
        </fieldset>
      </form>
    </div>
  );
}

export default Filter;
