import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      exercises: [],
      title: ''
    }
  }

  render() {
    return <h1>Exercises</h1>
  }
}

export default App;
