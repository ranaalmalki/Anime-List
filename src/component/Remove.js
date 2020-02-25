import React from "react";
export default class Remove extends React.Component {
    Remove = e => {
        e.stopPropagation();
        console.log("click remove");
        this.props.handleRemove();
      };
  render() {
    return (

      <div>
          <button onClick={this.Remove}>Remove</button>
      </div>
    );
  }
}