import React from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <DogsListContainer />
      </div>
    );
  }
}
export default App;

// npm run start
