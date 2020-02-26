import React from "react";
export default class Add extends React.Component {
    Add = e => {
        e.stopPropagation();
        console.log("click");
        this.props.onFaveToggle();
      };
  render() {
    return (

      <div>
          <button onClick={this.Add}>Add to my page</button>
      </div>
    );
  }
}