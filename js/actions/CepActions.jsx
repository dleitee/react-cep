var AppDispatcher = require('../dispatcher/AppDispatcher');
var CepConstants = require('../constants/CepConstants');

var CepActions = {

  /**
   * @param  {string} cep
   */
  search: function(cep) {
    AppDispatcher.dispatch({
      actionType: CepConstants.CEP_SEARCH,
      cep: cep
    });
  }

};

module.exports = CepActions;