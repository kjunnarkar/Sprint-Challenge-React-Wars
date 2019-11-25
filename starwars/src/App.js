import React, {useState, useEffect} from "react";
import './App.css';
import StarWars from "./components/StarWars";
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [StarData, setStarData] = useState([]);

  useEffect(()=> {

    axios.get(`https://swapi.co/api/people`)     
      .then(response => {
        console.log(response.data.results);  
        setStarData(response.data.results);
      })
      .catch(error => {
        console.log("You did not get Star Wars Data", error);
      });
  },[]);

  return (
    <div className="App">
      <h1 className="Header Title">React Wars</h1>
      <h1 className="Title">Star Wars Character Information</h1>
      {StarData.map((data, index) => {
        return (
          <StarWars
            key={index}
            name={data.name}
            species={data.species}
            gender={data.gender}
            birth={data.birth_year}
            height={data.height}
            mass={data.mass}
            hair={data.hair_color}
            skin={data.skin_color}
            eye={data.eye_color}
            home={data.homeworld}
          />
        )
      })};
    </div>
  );
}

export default App;
