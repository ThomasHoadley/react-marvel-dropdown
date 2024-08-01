import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import "../../../../../vitest.setup";
import { mockCharacterApiResponse } from "../../../../tests/characters/mock-data";
import SelectBox from "./select-box";

// todo - mock the api calls on 2 characters input

describe("SelectBox component", () => {
  const setCharacterInput = vi.fn();
  const setDisplaySelectBox = vi.fn();
  const setCharacterList = vi.fn();

  it("renders the search select-box", () => {
    render(
      <SelectBox
        displaySelectBox={false}
        setDisplaySelectBox={setDisplaySelectBox}
        characterInput=""
        setCharacterInput={setCharacterInput}
        characters={undefined}
        isGetCharactersLoading={false}
        characterList={[]}
        setCharacterList={setCharacterList}
      />
    );

    expect(screen.getByTestId("character-input")).toBeInTheDocument();
  });

  it("select-box displays a dropdown when it has the character data", async () => {
    render(
      <SelectBox
        displaySelectBox={true}
        setDisplaySelectBox={setDisplaySelectBox}
        characterInput="Sp"
        setCharacterInput={setCharacterInput}
        characters={mockCharacterApiResponse}
        isGetCharactersLoading={false}
        characterList={[]}
        setCharacterList={setCharacterList}
      />
    );

    expect(
      screen.getByText("Spider-Woman (Charlotte Witter)")
    ).toBeInTheDocument();
  });
});
