import React from "react";
import AnimeCards from "./AnimeCards";
import Remove from "./Remove";
import Clear from "./Clear";
import Checkbox from "./Checkbox";
import Edit from "./Edit";
import FaveCards from "./FaveCards";
export default class AnimeUser extends React.Component {
// constructor(props){
// super(props);
// this.state ={
// checked:false,
// }
// }
//   handleCheckbox = event => {
//     console.log("hi1");
//     this.setState({
//       checked: !this.state.checked
//     });
//     console.log(this.state.checked);
//   };
  render() {
    const userList = this.props.tofaves.map(item => (
      <div>
        <FaveCards
          key={item.mal_id}
          title={item.title}
          img={item.image_url}
          Fave={this.props.tofaves.includes(item)}
          onFaveToggle={() => this.props.onFaveToggle1(item)}
          handleRemove={() => this.props.handleRemove(item)}

          // handleClear={() => this.props.handleClear(item)}
          // // handleCheckbox={() => this.props.handleCheckbox(item)}
          // addNewItem={() => this.props.addNewItem(item)}
          // onChangeValue={() => this.props.onChangeValue(item)}
        />
        {/* <Remove handleRemove={() => this.props.handleRemove()} />
        <Edit addNewItem={() => this.props.addNewItem()} />
        <Checkbox handleCheckbox={() => this.handleCheckbox()}
                  handleClear={()=>this.props.handleClear()}
                //  chekedCheackBox{this.props.chcked}
                />
        */}
      </div>
    ));

    return (
      <div className="">
        <Clear handleClear={() => this.props.handleClear()} />
        <button onClick={ this.props.filterDelete}  >delete</button>
        {userList}
      </div>
    );
  }
}
