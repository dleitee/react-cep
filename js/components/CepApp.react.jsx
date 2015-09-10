var Search = require('./Search.react');
var Address = require('./Address.react');
var LoadingBar = require('./LoadingBar.react');

var React = require('react');
var CepStore = require('../stores/CepStore');
var CepActions = require('../actions/CepActions');

function getCepState() {
  return {
    address: CepStore.getAddress(),
    loading: CepStore.isLoading(),
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
            <LoadingBar load={this.state.loading}/>
            <br/>
            <Address
              address={this.state.address}
              load={this.state.loading} />
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