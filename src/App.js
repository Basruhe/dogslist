import React from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";
import { Route } from "react-router-dom";
// import DogsList from "./components/DogsList";

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
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </div>
    );
  }
}
export default App;

// npm run start
