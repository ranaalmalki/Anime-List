import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnimeList from "./AnimeList";
import AnimeUser from "./AnimeUser";
export default class AnimeLink extends React.Component {
  render() {
    return (
      <Router>
        <nav>
        <Link to="/">Home</Link>
        <Link className={"animeButton"} to="/animelist">
          Anime List
        </Link>
        <Link to="/animeuser">Anime User</Link>
        </nav>

        <div>
          <Route
            path="/animelist"
            component={() => (
              <AnimeList
                list={this.props.listing}
                tofaves={this.props.faves}
                onFaveToggle1={this.props.onFaveToggle}
              />
            )}
          />

          <Route
            path="/animeuser"
            component={() => (
              <AnimeUser
              list = {this.props.listing}
                tofaves={this.props.faves}
                onFaveToggle1={this.props.onFaveToggle}
                handleRemove = {this.props.handleRemove}
                handleClear ={this.props.handleClear}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
