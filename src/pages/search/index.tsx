import PageTitle from "../../components/molecules/page-title";
import CharacterSearch from "../../features/character-search";

function SearchPage() {
  return (
    <>
      <PageTitle text="Marvel Search" />
      <CharacterSearch />
    </>
  );
}

export default SearchPage;
