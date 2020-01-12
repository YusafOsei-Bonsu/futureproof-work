import React from "react";
import StaticImage from '../components/StaticImage';
import Form from '../components/Form';
import "../styles/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  // The searched term will continously update as new characters are entered
  onChangeHandler = e => this.setState({ search: e.target.value });

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <div id="flex-container">
          <StaticImage />
          <Form updateSearch={this.onChangeHandler} city={this.state.search}/>
        </div>
      </div>
    );
  }
}

export default Home;
