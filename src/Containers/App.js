import React, { Component } from 'react';
import './App.css'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      _robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(resp => resp.json())
    //   .then(result => this.setState({ _robots: result }))
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const robotJSON = await resp.json();
    this.setState({ _robots: robotJSON })
  }

  render() {
    const { _robots, searchfield } = this.state;
    const filteredRobot = _robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    return !_robots.length ? <h1 className='tc'>Loading. Please Wait</h1> : (
      <div className='tc'>
        <h1 className='f1'>Fourth Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App
