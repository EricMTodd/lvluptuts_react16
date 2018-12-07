import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "No Country For Old Men",
    desc: "Good psychopath film"
  },
  {
    id: 2,
    title: "Pulp Fiction"
  },
  {
    id: 3,
    title: "Spider-Man"
  },
  {
    id: 4,
    title: "Resevoir Dogs"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default App;
