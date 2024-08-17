import { useState } from "react";
import "./App.css";
// import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
    console.log('render')


    {/* Fetching and changing the state causes to a side effect - inifinte loop of rerendering
    That's why it is important to use useEffect and not useState when fetching from an API
    This is what's happening:
    1. Fetching data from API -> 
    2. Changing the state variable -> 
    3. The fetched data and the state data are both pointing on different places in memory hence they are considered as different -> 
    4. React rerenders by calling the entire functional component once again ->
    5. Back to 1.*/}

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//       setMonsters(users);
//     });

  const filteredSearch = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });
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

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredSearch = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">
//             Cats Rolodex
//         </h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search cat"
//         />
//         <CardList monsters={filteredSearch} />
//       </div>
//     );
//   }
// }

export default App;
