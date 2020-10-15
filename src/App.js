import React from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import { Route } from "react-router-dom";
import DogsList from "./components/DogsList";
import DogBreedImages from "./components/DogBreedImages";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={DogsListContainer} />
        {/* <Route
          exact
          path="/dog-breeds/{name-of-dog-breed}"
          component="{DogBreedImages}"
        /> */}
        <Route path="/dog-breeds/:breed" component={DogBreedImages} />
      </div>
    );
  }
}
export default App;

// npm run start
