import React from "react";
export default class AnimePoster extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image_url} alt={this.props.title} />
      </div>
    );
  }
}
