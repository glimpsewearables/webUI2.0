import React from "react";
import styled from "styled-components";
import PopUp from "./PopUp";

export default class Navbar extends React.Component {
  state = {
    seen: false
  };

  togglePop = () => {
   this.setState({
     seen: !this.state.seen
   });
 };



 render() {
    return (
      <div>
        <div className="btn" onClick={this.togglePop}>
          <button>Setup Wifi</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
