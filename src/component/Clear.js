import React from "react";
export default class Add extends React.Component {
    Clear = e => {
        e.stopPropagation();
        console.log("click clear");
        this.props.handleClear();
      };
  render() {
    return (

      <div>
          <button onClick={this.Clear}>Clear</button>
      </div>
    );
  }
}