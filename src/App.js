import React, { Component } from 'react';
import './App.css';

const githubURL = "https://api.github.com/users/jhoelzer";

class App extends Component {
  state = {
    user: {},
    active: false
  }

  handleClickButton = event => {
    console.log("clicked");
    fetch(githubURL)
      .then(res => res.json())
      .then(gitInfo => {
        this.setState({ user: gitInfo });
        console.log({ gitInfo });
      })
      .catch(err => console.log(`${err} error error error`));
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  render() {
    return (
      <div className="App">
        <button className="button" onClick={this.handleClickButton}>Click Here</button>
        <div>

          {this.state.active ?

            <div>
              <img src={this.state.user.avatar_url} />
              <h3>Name: {this.state.user.name}</h3>
              <h3>Username: {this.state.user.login}</h3>
              <h3>Portfolio URL: 
                <a href={this.state.user.blog} target="_blank">{this.state.user.blog}</a>
              </h3>
              <h3>Location: {this.state.user.location}</h3>
            </div>
            
          : null}

        </div>
      </div>
    );
  }
}

export default App;