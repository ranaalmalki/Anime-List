import React from "react";
import AnimeCards from "./AnimeCards";
import Add from "./Add";
import AddNewAnime from "./AddNewAnime";

export default class Animelist extends React.Component {
  render() {
    console.log("10 anime list:", this.props.list);
    const list = this.props.list.map(item => (
      <div>
        <AnimeCards
          key={item.mal_id}
          title={item.title}
          img={item.image_url}
          Fave={this.props.tofaves.includes(item)}
          onFaveToggle={() => this.props.onFaveToggle1(item)}
          // addNewItem={() => this.props.addNewItem(item)}
          // onChangeValue={() => this.props.onChangeValue(item)}
        />
        <Add onFaveToggle={() => this.props.onFaveToggle1(item)} />
      </div>
    ));

    return (
      <div className="animeheader">
        <h1>Anime List</h1>
        {/* <AddNewAnime
          addNewItem={() => this.props.addNewItem()}
          onChangeValue={() => this.props.onChangeValue()}
        /> */}
        <div className="anime">{list}</div>
      </div>
    );
  }
}
