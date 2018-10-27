import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return (
      <div>
        <div>{this.state.isOpen ? "Open" : "Closed"} </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   //this is the whole application state === store
//   return {
//     //merged into props
//     isOpen: state.isOpen
//   };
// };

function mapStateToProps(state) {
  return {
    isOpen: state.isOpen
  };
}

const connectedContainer = connect(mapStateToProps);

export default Display;
