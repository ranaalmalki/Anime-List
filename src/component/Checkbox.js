import React from "react";
export default class Checkbox extends React.Component {
 Check = e => {
    e.stopPropagation();
    console.log("click check");
    this.props.handleCheckbox();
  };
  render() {
    return (
      <div>
        <input onChange={this.Check}  type="checkbox"  />
                <label htmlFor="{}">Label</label>
          
      </div>
    );
  }
}
