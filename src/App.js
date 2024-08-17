import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredSearch, setfilteredSearch] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredSearch = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setfilteredSearch(newFilteredSearch);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Cats Rolodex</h1>

      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search cat"
      />

      <CardList monsters={filteredSearch} />
    </div>
  );
};

export default App;
