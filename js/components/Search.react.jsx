var React = require('react');
var ClassNames = require('classnames');
var CepActions = require('../actions/CepActions');
var CepTextInput = require('./CepTextInput.react');
var ReactPropTypes = React.PropTypes;

var Search = React.createClass({

    propTypes: {
        error: ReactPropTypes.bool.isRequired
    },

    render: function() {

        var classes = ClassNames({
            'mdl-textfield': true,
            'mdl-js-textfield': true,
            'mdl-textfield--floating-label': true,
            'is-invalid': this.props.error,
            'is-focused': true,
          });


        return (
            <div className={classes} >
                <CepTextInput
                    id="cep-input"
                    className="mdl-textfield__input"
                    onSave={this._onSave} />
                <label className="mdl-textfield__label">Digite o Cep...</label>
                <span className="mdl-textfield__error">Cep não encontrado</span>
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