import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.isOpen ? "Open" : "Closed"} </div>
      </div>
    );
  }
}

export default Display;
