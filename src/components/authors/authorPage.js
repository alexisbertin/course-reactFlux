"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },

  componentDidMount: function() {
    if (this.isMounted()){
      this.setState({ authors: AuthorApi.getAllAuthors() });
    }
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <a href="/#authorsAdd" className="btn btn-default">Add Author</a>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage;
