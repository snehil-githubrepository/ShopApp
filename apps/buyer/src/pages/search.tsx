import SearchBar from "ui/components/SearchBar";
// import axios from "axios";

export default function SearchBarPage() {
  function handleSearch(q: string) {
    console.log(q);
  }

  return (
    <div>
      <SearchBar onSearch={(query) => handleSearch(query)} />
    </div>
  );
}
