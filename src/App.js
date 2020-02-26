import React from "react";
import AnimeLink from "./component/AnimeLink";
import "./App.css";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      favorites: [],
      checked:[]
    };
  }

  // function for the add a new fave IN THE LIST FOR THE USEr
  handleFaveToggle = add => {
    // ... is for push every time without exchange every time
    const favorites = [...this.state.favorites];
    const animeIndex = favorites.indexOf(add);

    let favAnimeObj = add;
    favAnimeObj.isChecked = false;
    // condtion for check the array
    if (animeIndex === -1) {
      favorites.push(favAnimeObj);
      console.log(`Adding ${add.title}from faves`);
    }
    this.setState({ favorites });
  };

  handleRemove = remove => {
    console.log(remove)
    const favorites = [...this.state.favorites];
    const animeIndex = favorites[remove];

    favorites.splice(animeIndex, 1);

    this.setState({
      favorites: favorites
    });
  };

  handleClear = clear => {
    // console.log(this.state.checked);
    this.setState({
      favorites: []
    });
  };

  handleCheckbox = (title) => {
    console.log("hi1");
    // change the status of is checked from the title object
    title.isChecked = !title.isChecked
    // save the changes of the title object in the favorites array
    console.log(title);
  };

  filterDelete = () => {
    console.log(this.state.favorites)
    const filteredArr = this.state.favorites.filter(element => !element.isChecked)
    this.setState({
      favorites:filteredArr
    })
  };

  // onChangeValue = event => {
  //   this.setState({
  //     title: event.target.value
  //   });
  // };
  // addNewItem = item => {
  //   this.setState(state =>{
  //     const list = state.list.push(state.title);
  //     console.log("click"+list)

  //     return{
  //       list,
  //       title:"",
  //     }
  //   });

  // };

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
