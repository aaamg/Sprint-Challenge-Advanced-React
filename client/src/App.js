  
import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import TheCard from "./components/PlayerCard";


const url = `http://localhost:5000/api/players`;


class App extends Component {
  state = {
    playerdata: []
  };

  componentDidMount() {
      axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({
         ...this.state, 
         playerdata: res.data,
         name: res.data.name,
         country: res.data.country
        });
      })
      .catch(err => {
        console.log("Error in axios pull", err);
      });
  }


  render() {
    return (
      <div>
        <h2>Players Data</h2>
        {this.state.playerdata.map(item => {
          return <TheCard item={item}/>
        })}
      </div>
    );
  }
}

export default App;
