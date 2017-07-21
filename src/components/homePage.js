"use strict";
var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h1>Course Admin</h1>
        <p>React, React Router, and flux for super quick and ultra-responsive apps.</p>
      </div>
    );
  }
});

module.exports = Home;
