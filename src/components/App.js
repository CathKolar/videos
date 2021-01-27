import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onTermSubmit = (term) => {};
  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
