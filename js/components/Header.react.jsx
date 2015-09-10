var React = require('react');
var CepActions = require('../actions/CepActions');
var CepTextInput = require('./CepTextInput.react');

var Header = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <header id="header">
        <h1>ceps</h1>
        <CepTextInput
          id="cep-input"
          placeholder="Cep"
          onSave={this._onSave}
        />
      </header>
    );
  },

  _onSave: function(cep) {
    if (cep.trim()){
      CepActions.search(cep);
    }

  }

});

module.exports = Header;