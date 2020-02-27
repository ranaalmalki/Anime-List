import React from "react";

export default class AnimeCards extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="cards">
          <h2>{this.props.title}</h2>
          <img src={this.props.img} />
        </div>
      </div>
    );
  }
}
