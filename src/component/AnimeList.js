import React from "react";
import AnimeCards from "./AnimeCards";
import AnimeUser from "./AnimeUser";
import Add from "./Add";
export default class Animelist extends React.Component {
  render() {
    // let showAnime=[];
    console.log("10 anime list:", this.props.list);
    const list = this.props.list.map(item => (
      <div class='anime'>
      <AnimeCards
        key={item.mal_id}
        title={item.title}
        img={item.image_url}
        Fave={this.props.tofaves.includes(item)}
        onFaveToggle={() => this.props.onFaveToggle1(item)}/>
        <Add onFaveToggle={() => this.props.onFaveToggle1(item)}/>
      </div>
      
    ));

    return (
      <div>
        <h1>Anime List</h1>
        <p>{list}</p>
      </div>
    );
  }
}
