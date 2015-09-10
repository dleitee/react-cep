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
        error: CepStore.haveError(),
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
            <Search error={this.state.error} />
            <LoadingBar load={this.state.loading}/>
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