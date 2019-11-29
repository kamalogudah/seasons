import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to
    // this.state
    this.state = { lat: 20, errorMessage: '' };
  }
  // state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );

  };

  render() {

    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;

    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;

    }

    return <div> Loading Please wait ... </div>;
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));