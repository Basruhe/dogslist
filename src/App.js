import React from "react";
import "./App.css";
import DogsList from "./components/DogsList";

class App extends React.Component {
  render() {
    return (
      <div>
        <DogsList />
      </div>
    );
  }
}
export default App;

// npm run start
