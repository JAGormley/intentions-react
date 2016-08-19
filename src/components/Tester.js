import React, { Component } from 'react';

class Tester extends Component {
    constructor(props) {
        super(props);
        this.state = {chips: "ieieieieie"};
        this.getTheThing = this.getTheThing.bind(this);
    }


  render() {
    return (
      <div className="Tester">
        <button onClick={this.getTheThing}>{this.state.chips}</button>
      </div>
    );
  };

  getTheThing() {
      // url (required), options (optional)
      fetch('http://localhost:9000/chips', {method: 'get'}).then(function(response) {
        return response.json();
      }).then(function(data) {
       this.setState({chips: JSON.stringify(data.name, null, 4)});
     }.bind(this));

  };
}

export default Tester;
