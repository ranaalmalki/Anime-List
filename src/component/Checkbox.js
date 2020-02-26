import React from "react";
export default class Checkbox extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     checked:false
  //   }
  // }
 Check = e => {
    e.stopPropagation();
    console.log("click check");
    this.props.handleCheckbox();
  };
  
  // handleCheckbox = event => {
  //   console.log("hi1");
  //   this.setState({
  //     checked: !this.state.checked
  //   });
  //   console.log("hi2");
  // };
  

  render() {
    return (
      <div>
        {/* <input type="checkbox" onChange={this.Check}    />
                <label >Label</label> */}
          
      </div>
    );
  }
}
