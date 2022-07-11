import { FoodContext } from "../context/context";
import { useContext } from "react";

const Search = () => {
  const { setSearchValue, searchValue } = useContext(FoodContext);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-filed"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        <button
          className="btn"
          onClick={handleSubmit}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
