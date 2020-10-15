import React, { Component } from "react";

export default class DogsList extends Component {
  state = {
    dogBreeds: null,
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        this.updateBreeds(breeds);
        console.log(breeds);
      })
      .catch(console.error);
  }

  updateBreeds(breeds) {
    this.setState({ dogBreeds: breeds });
  }

  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    return (
      <div className="dogs-list">
        <h1>Dags List</h1>

        {!this.state.dogBreeds && "Loading..."}
        {this.state.dogBreeds && (
          <ul>
            {this.state.dogBreeds.map((breed) => (
              <li key={breed}>{breed}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
