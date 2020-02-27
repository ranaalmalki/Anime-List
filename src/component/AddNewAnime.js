import React from "react";
export default class AddNewAnime extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.props.addNewItem}
          disabled={this.props.value}
        >
          Add
        </button>
      </div>
    );
  }
}
