"use strict";
var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1>About</h1>
        <p>
          This App uses the following techs
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
