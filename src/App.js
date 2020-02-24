import React from "react";
import AnimeList from "./component/AnimeList";
import AnimeLink from "./component/AnimeLink";
import './App.css';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }
  // print one time before the render
  componentDidMount() {
    console.log("getAllPosts");
    axios({
      method: "get",
      url: "https://api.jikan.moe/v3/season"
    })
      .then(res => {
        console.log("RESPONSE: ", res);
        console.log("DATA: ", res.data.anime);
        this.setState({ list: res.data.anime });
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  }
  
  render() {
    const list =this.state.list.map(i=>(
      <div key={i.mal_id}>
<h2>{i.title}</h2>
      </div>
    ))
    return (
      <div>
        <AnimeLink />
        
        <hr />
            <p>{list}</p>

      </div>
    );
  }
}
