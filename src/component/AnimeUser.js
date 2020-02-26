import React from "react";
import AnimeCards from "./AnimeCards";
import Remove from "./Remove";
import Clear from "./Clear";
import Checkbox from "./Checkbox";
import Edit from "./Edit";
export default class AnimeUser extends React.Component {
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
          handleCheckbox={() => this.props.handleCheckbox(item)}
          addNewItem={() => this.props.addNewItem(item)}
          onChangeValue={() => this.props.onChangeValue(item)}
        />
        <Remove handleRemove={() => this.props.handleRemove(item)} />
        <Edit addNewItem={() => this.props.addNewItem(item)} />
        <Checkbox handleCheckbox={() => this.props.handleCheckbox(item)} />
       
      </div>
    ));

    return (
      <div className="">
        <Clear handleClear={() => this.props.handleClear()} />
        {userList}
      </div>
    );
  }
}
