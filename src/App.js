import React from "react";
import AnimeLink from "./component/AnimeLink";
import "./App.css";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      favorites: []
      
    };
  }
  // function for the add a new fave IN THE LIST FOR THE USEr
  handleFaveToggle = add => {
    // ... is for push every time without exchange every time 
    const favorites = [...this.state.favorites];
    const animeIndex = favorites.indexOf(add);
    // condtion for check the array if th empty or not
    if (animeIndex !== -1) {
      favorites.splice(animeIndex, 1);
      console.log(`Removing ${add.title}from fave`);
    } else {
      favorites.push(add);
      console.log(`Adding ${add.title}from faves`);
    }
    this.setState({ favorites });
  };
  
  handleRemove =remove =>{
    const favorites = [...this.state.favorites];
    console.log("remove");
    const animeIndex = favorites.indexOf(remove);
    
      favorites.splice(animeIndex,1);

    this.setState({
      favorites
    })
  }

  handleClear = clear =>{
    this.setState({
      favorites:[]
    })
  }

  // print one time before the render
  // axios with use the components for the didMount to call before the render
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
    return (
      <div>
        <AnimeLink
          listing={this.state.list}
          faves={this.state.favorites}
          onFaveToggle={this.handleFaveToggle}
          handleRemove={this.handleRemove}
          handleClear ={this.handleClear}
        />
        <hr />
      </div>
    );
  }
}
