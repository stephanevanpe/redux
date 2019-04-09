import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from './Lamp';
import NameForm from './formulaire'
// import GenerateEmployee from './GenerateEmployee';
// import DisplayEmployee from './DisplayEmployee';
import DisplayCitation from './DisplayCitation';
import GenerateCitation from './GenerateCitation';

// const sampleEmployee = {
//   gender: 'male',
//   name: {
//     title: 'mr',
//     first: 'mathys',
//     last: 'aubert'
//   },
//   location: {
//     street: '9467 rue gasparin',
//     city: 'perpignan',
//     postcode: '90208'
//   },
//   email: 'mathys.aubert@example.com',
//   picture: {
//     medium: 'https://randomuser.me/api/portraits/med/men/66.jpg'
//   }
// };
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // working: false,
      // logoSpeed: "App-logo-speed",
      // employee: sampleEmployee,
      quotes: "lala",

    };
  }

  // handleClick = working =>{
  //   this.setState({ working: !this.state.working });
  //   this.state.working ? this.setState({ logoSpeed: "App-logo" }) : this.setState({ logoSpeed: "App-logo-speed" })
  // };

  // getEmployee() {
  //   // Récupération de l'employé via fetch
  //   fetch("https://randomuser.me/api?nat=fr")
  //     .then(response => response.json())
  //     .then(data => {
  //       // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
  //       this.setState({
  //         employee: data.results[0],
  //       });
  //     });
  // }

  getCharactere() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quotes: data[0],
        });
      });
  }


  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className={this.state.logoSpeed} alt="logo" />
          <button onClick={this.handleClick}>Work</button>
          <h1 className="App-title">Simpsons Quotes</h1>
          <Lamp on />
          <Lamp />
          <NameForm />

        </header> */}
        {/* <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />

        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Quotes/> */}

        {/* <GenerateEmployee selectEmployee={() => this.getEmployee()} />
        <DisplayEmployee employee={this.state.employee} /> */}

        <GenerateCitation selectCharacter={() => this.getCharactere()} />
        <DisplayCitation character={this.state.quotes} />
        />
      </div>
    );
  }
}

export default App;
