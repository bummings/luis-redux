import React from "react";

import Display from "./components/Display";
import Controls from "./components/Controls";

class App extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <Controls />
      </div>
    );
  }
}

export default App;
