import React from "react";
export default class Add extends React.Component {
    Add = e => {
        e.stopPropagation();
        console.log("click");
        this.props.onFaveToggle();
      };
  render() {
    return (

      <div className="buttonAdd">
          <button onClick={this.Add}>Add to my page</button>
      </div>
    );
  }
}