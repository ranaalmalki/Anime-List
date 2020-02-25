import React from "react";
import AnimeCards from "./AnimeCards";
import Remove from "./Remove";
import Clear from "./Clear";
export default class AnimeAdd extends React.Component {
  render() {
    const userList = this.props.tofaves.map(item => (
      <div>
        <AnimeCards
          key={item.mal_id}
          title={item.title}
          img={item.image_url}
          Fave={this.props.tofaves.includes(item)}
          onFaveToggle={() => this.props.onFaveToggle1(item)}
          handleRemove={() => this.props.handleRemove(item)}
          handleClear={() => this.props.handleClear(item)}
        />
        <Remove handleRemove={() => this.props.handleRemove(item)} />
        <Clear handleClear={() => this.props.handleClear(item)} />
      </div>
    ));


    return <div className={`film-row-fave`}>{userList}</div>;
  }
}
