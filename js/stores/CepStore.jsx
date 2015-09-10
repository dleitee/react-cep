var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CepConstants = require('../constants/CepConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _address = [];

/**
 * Search an address with cep
 * @param  {string} cep
 */
function search(cep) {

    var data = {
        logradouro: 'Rua Sérgio Gil',
        numero: '263',
        complemento: 'APTO 702 A Torre 3',
        bairro: 'Balneário',
        cidade: 'Florianópolis',
        estado: 'SC'
    };

    _address = [
        {label: 'Logradouro', value:  data.logradouro},
        {label: 'Número', value: data.numero}, 
        {label: 'Complemento', value: data.complemento}, 
        {label: 'Bairro', value: data.bairro}, 
        {label: 'Cidade', value: data.cidade}, 
        {label: 'Estado', value: data.estado}
    ];

}



var CepStore = assign({}, EventEmitter.prototype, {

    getAddress: function() {
        return _address;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

AppDispatcher.register(function(action) {
  
  var cep;

  switch(action.actionType) {
    case CepConstants.CEP_SEARCH:
        cep = action.cep.trim();
        if (cep !== '') {
            search(cep);
            CepStore.emitChange();
        }
        break;

    default:

  }

});

module.exports = CepStore;