var React = require('react');
var CepActions = require('../actions/CepActions');
var CepTextInput = require('./CepTextInput.react');

var Search = React.createClass({

    render: function() {
        return (
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <CepTextInput
                    id="cep-input"
                    className="mdl-textfield__input"
                    onSave={this._onSave} />
                <label className="mdl-textfield__label">Digite o Cep...</label>
            </div>
        );
    },

    _onSave: function(cep) {
        if (cep.trim()){
            CepActions.search(cep);
        }
    }

});

module.exports = Search;