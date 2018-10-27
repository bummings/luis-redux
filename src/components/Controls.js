import React from "react";

class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOpen}>
          {this.state.isOpen ? "Close" : "Open"}
        </button>
      </div>
    );
  }
}

export default Controls;
