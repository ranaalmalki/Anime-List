import React from "react";
import Clear from "./Clear";
import Edit from "./Edit";
import FaveCards from "./FaveCards";
export default class AnimeUser extends React.Component {
  render() {
    const userList = this.props.tofaves.map(item => (
      <div>
        <FaveCards
          key={item.mal_id}
          title={item.title}
          img={item.image_url}
          Fave={this.props.tofaves.includes(item)}
          onFaveToggle={() => this.props.onFaveToggle1(item)}
          handleRemove={() => this.props.handleRemove(item)}
          handleCheckbox={() => this.props.handleCheckbox(item)}
          // addNewItem={() => this.props.addNewItem(item)}
          // onChangeValue={() => this.props.onChangeValue(item)}
        />
        {/* 
        <Edit addNewItem={() => this.props.addNewItem()} />
             */}
      </div>
    ));

    return (
      <div className="">
        <Clear handleClear={() => this.props.handleClear()} />
        <button className="buttonDelete" onClick={this.props.filterDelete}>
          Delete
        </button>
        {userList}
      </div>
    );
  }
}
