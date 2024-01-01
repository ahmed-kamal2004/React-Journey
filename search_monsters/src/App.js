import logo from './logo.svg';
import react, { Component } from 'react';
import './App.css';
import Monster from './Components/monster'
import { Row, Container, Col } from 'react-bootstrap/'
class App extends Component {


  constructor() {
    super();

    this.state = {
      monsters: [],
      search_value: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => { return { monsters: users } },
        () => console.log(users)
      ))
      .catch((error) => console.log(error))
  }
  render() {

    const filteredmonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().startsWith(this.state.search_value.toLowerCase())
    })

    console.log("filter", filteredmonsters, 'search value', this.state.search_value)
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input className="search" type="search" placeholder='Search for Monster' onChange={(event) => {
            this.setState(
              () => { return { search_value: event.target.value } },
              () => console.log(this.state.search_value)
            )
          }}>
          </input>
        </header>


        <div className="monsters">
          {


            filteredmonsters.map(
              (monster) => {
                return <Monster key={monster.id} name={monster.name} email={monster.email} username={monster.username} />
              }
            )


          }

        </div>
      </div>
    );
  }
}

export default App;
