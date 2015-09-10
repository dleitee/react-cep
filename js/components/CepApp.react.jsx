var Search = require('./Search.react');
var Address = require('./Address.react');

var React = require('react');
var CepStore = require('../stores/CepStore');
var CepActions = require('../actions/CepActions');

function getCepState() {
  return {
    address: CepStore.getAddress(),
  };
}



var CepApp = React.createClass({

  getInitialState: function() {
    return getCepState();
  },

  componentDidMount: function() {
    CepStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CepStore.removeChangeListener(this._onChange);
  },


  render: function() {
    return (
      <div>
            <Search />
            <Address
              address={this.state.address}
              />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getCepState());
  },

  _onSave: function() {
    CepActions.search('');

  }

});

module.exports = CepApp;