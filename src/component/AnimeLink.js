import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnimeList from "./AnimeList";
import AnimeAdd from "./AnimeAdd";
// import App from './App';
// import App from './App';
export default class AnimeLink extends React.Component {
  render() {
    return (
      <Router>
        {/* <Link to="/">Home</Link> */}
        <Link className={"animeButton"} to="/animelist">Anime List</Link>
        <Link to="/animeadd">Anime Add</Link>
        <div>
          {/* <Route exact path="/" component={App} /> */}
          <Route path="/animelist" component={AnimeList} />
          <Route path="/animeadd" component={AnimeAdd} />
        </div>
      </Router>
    );
  }
}
