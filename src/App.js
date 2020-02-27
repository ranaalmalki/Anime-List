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

  // function for  add a new anime in the user list
  handleFaveToggle = add => {
    // ... is for push every time without replace the item
    const favorites = [...this.state.favorites];
    const animeIndex = favorites.indexOf(add);

    let favAnimeObj = add;
    favAnimeObj.isChecked = false;
    // applay the user click one time
    if (animeIndex === -1) {
      favorites.push(favAnimeObj);
      console.log(`Adding ${add.title}from faves`);
    }
    //to allow add new item in the array favorites
    this.setState({ favorites });
  };

  //function for remove one item in user page
  handleRemove = remove => {
    console.log(remove);
    const favorites = [...this.state.favorites];
    const animeIndex = favorites[remove];

    favorites.splice(animeIndex, 1);

    this.setState({
      favorites: favorites
    });
  };

  //clear all the item in the favorites array by one click :)
  handleClear = clear => {
    this.setState({
      favorites: []
    });
  };

  // to check if the user click the checkbox will return true
  handleCheckbox = title => {
    // change the status of is checked from the title object
    title.isChecked = !title.isChecked;
    // save the changes of the title object in the favorites array
    console.log(title);
  };

  //when click the button delete will check if true will remove the item
  filterDelete = () => {
    console.log(this.state.favorites);
    const filteredArr = this.state.favorites.filter(
      element => !element.isChecked
    );
    this.setState({
      favorites: filteredArr
    });
  };

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
          handleClear={this.handleClear}
          handleCheckbox={this.handleCheckbox}
          addNewItem={this.addNewItem}
          onChangeValue={this.onChangeValue}
          filterDelete={this.filterDelete}
        />
        <hr />
      </div>
    );
  }
}
