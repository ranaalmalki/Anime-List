import React from "react";
export default class FaveCards extends React.Component {
  Remove = e => {
    e.stopPropagation();
    console.log("click remove");
    this.props.handleRemove();
  };

  // Edit = e => {
  //             e.stopPropagation();
  //             console.log('On Text Change', );

  //           };

  render() {
    return (
      <div>
        <div className="favecards">
          <h1>{this.props.title}</h1>
          <img src={this.props.img} />
        </div>
        <button onClick={this.Remove}>Remove</button>
        {/* <button onClick={this.Edit}>Edit</button> */}

        <input
          className="checkbox"
          type="checkbox"
          onChange={() => this.props.handleCheckbox()}
        />
      </div>
    );
  }
}
