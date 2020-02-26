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

     
  
    //   Check = e => {
    //     e.stopPropagation();
    //     console.log("click check");
    //     this.props.handleCheckbox();
    //   };
   
  render() {
   
    return (
      <div>
          <h1>{this.props.title}</h1>
          <img src={this.props.img}/>
        <button onClick={this.Remove}>Remove</button>
        {/* <button onClick={this.Edit}>Edit</button> */}
{/* {this.props.item.checked?"CHECKED":"NOT CHECKED"} */}
        <input  type="checkbox" onChange={() => this.props.handleCheckbox()} />
        <label>Label</label>
      </div>
    );
  }
}
