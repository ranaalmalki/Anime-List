import React from "react";
export default class FaveCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  handleCheckbox = event => {
    console.log("hi1");
    this.setState({
      checked: !this.state.checked
    });
    console.log(this.state.checked);
  };
  Remove = e => {
    e.stopPropagation();
    console.log("click remove");
    this.props.handleRemove();
  };

  
  render() {
    // Edit = e => {
    //             e.stopPropagation();
    //             console.log('On Text Change', );

    //           };

     
   

    //   Check = e => {
    //     e.stopPropagation();
    //     console.log("click check");
    //     this.props.handleCheckbox();
    //   };
   
    return (
      <div>
          <h1>{this.props.title}</h1>
        <button onClick={this.Remove}>Remove</button>
        {/* <button onClick={this.Edit}>Edit</button> */}

        <input type="checkbox" onChange={this.handleCheckbox} />
        <label>Label</label>
      </div>
    );
  }
}
